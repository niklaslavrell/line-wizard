import React, { Component } from 'react'
import { Link } from 'gatsby'
// import { Provider as AlertProvider, Alert } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
// import { withAlert } from 'react-alert'

import Button from '../components/button'
import Image from '../components/image'
import Layout from '../components/layout'
import getTextWithNewLines from '../utils/spell'
import getNumberOfNewLines from '../utils/noOfLines'
import wizard from '../images/wizard-flash-200.gif'
import './index.css'

// optional cofiguration
// const options = {
//   position: 'bottom center',
//   timeout: 0, // 5000
//   offset: '30px',
//   transition: 'scale', // oneOf(['fade', 'scale']
//   type: 'success',
// }

const buttonText = 'Copy clean wizard lines'
const buttonTextSuccess = 'Copied!'
const buttonTextSpells = [
  'Wingardium Leviosa...',
  'Riddikulus...',
  'Obliviate...',
  'Sectumsempra...',
  'Avada Kedavra...',
  'Alohomora...',
  'Lumos...',
  'Expelliarmus...',
  'Accio...',
  'Expecto Patronum...',
]
const textAreaPlaceholderText =
  'Join the club of clean wizard line breaks..\n\n📝🧙‍💫\n\n#linewizard'
const successMessages = [
  'The spell has broken the lines',
  'Broken the lines, the spell has',
  'The spell created new lines',
  'Lines have levitated',
]
const successMessageAction = 'Go ahead and paste on Instagram'
const failMessages = [
  'The spell could not break any lines',
  'There were no lines to break',
  'Not a lot of lines were broken',
  'Very few lines are broken',
  'The lines were not a lot broken',
  'Lines did not break this time',
]
const failMessageAction = 'Try pasting something'

var timeout = null

/**
 * https://whatwebcando.today/clipboard.html
 */

/**
 * Permissions API: https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
 * Clipboard API: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
 * Guide: https://developers.google.com/web/updates/2018/03/clipboardapi
 */

/** How to listen to manual cut/copy/paste events
 * https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData
 * window.addEventListener('copy', () => console.log('copy listener'))
 * window.addEventListener('cut', () => console.log('cut listener'))
 * window.addEventListener('paste', () => console.log('paste listener'))
 */

const wasThereAnyText = string => string.length > 0

const analyticsEvent = {
  PASTE: 'PASTE',
  COPY: 'COPY',
}
const sendAnalyticsEvent = (event, text, numberOfNewLines) => {
  if (event !== analyticsEvent.PASTE && event !== analyticsEvent.COPY) {
    console.error('Did not specify analytics event')
  }
  if (window.ga) {
    window.ga('send', 'event', {
      eventCategory: 'Copy Text',
      eventAction:
        event === analyticsEvent.PASTE
          ? 'paste'
          : event === analyticsEvent.COPY
          ? 'copy'
          : 'click',
      eventLabel: wasThereAnyText(text) ? 'success' : 'fail',
      eventValue: numberOfNewLines,
    })
  }
}

const getMessage = (messages, index) => messages[(index - 1) % messages.length]

const PasteText = () => (
  <div
    style={{
      display: 'inherit',
      margin: 'auto',
    }}
  >
    PASTE YOUR
    <div
      style={{
        width: '1.3rem',
        marginLeft: '0.4rem',
        marginRight: '0.4rem',
        marginTop: '0.15rem',
      }}
    >
      <Image />
    </div>
    CAPTION HERE
    <span
      role="img"
      aria-label="A hand pointing down"
      aria-hidden="false"
      style={{ marginLeft: '0.1rem' }}
    >
      👇
    </span>
  </div>
)

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      // textWithNewLines: '',
      numberOfNewLines: 0,
      buttonPresses: 0,
      spelling: false,
      clipboardRead: null,
      clipboardWrite: null,
      error: null,
    }

    this.checkClipboardPermissions = this.checkClipboardPermissions.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.doPasteText = this.doPasteText.bind(this)
    this.onPasteButtonClick = this.onPasteButtonClick.bind(this)
    this.onCopyButtonClick = this.onCopyButtonClick.bind(this)
    this.spell = this.spell.bind(this)
    this.doCopyText = this.doCopyText.bind(this)
  }

  componentDidMount() {
    this.checkClipboardPermissions()
  }

  checkClipboardPermissions() {
    var that = this
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: 'clipboard-read' })
        .then(permission => {
          that.setState({
            clipboardRead: permission.state, // 'granted', 'denied' or 'prompt'
          })
        })
      navigator.permissions
        .query({ name: 'clipboard-write' })
        .then(permission => {
          that.setState({
            clipboardWrite: permission.state, // 'granted', 'denied' or 'prompt'
          })
        })
    } else {
      // console.log('Browser do not support the Permission API')
    }
  }

  onTextChange(event) {
    // the text have manually been updated by the user
    const text = event.target.value
    const textWithNewLines = getTextWithNewLines(text)
    const numberOfNewLines = getNumberOfNewLines(textWithNewLines)

    this.setState({
      text: text,
      // textWithNewLines: textWithNewLines,
      numberOfNewLines: numberOfNewLines,
      buttonPresses: 0,
    })
  }

  doPasteText(text) {
    const textWithNewLines = getTextWithNewLines(text)
    const numberOfNewLines = getNumberOfNewLines(textWithNewLines)

    this.setState({
      text: text,
      // textWithNewLines: textWithNewLines,
      numberOfNewLines: numberOfNewLines,
      spelling: true,
      buttonPresses: this.state.buttonPresses + 1,
    })

    this.spell()
    this.doCopyText(textWithNewLines)

    sendAnalyticsEvent(analyticsEvent.PASTE, text, numberOfNewLines)
  }

  onPasteButtonClick(event) {
    if (navigator.clipboard) {
      navigator.clipboard
        .readText()
        .then(clipboardText => {
          this.doPasteText(clipboardText)
          this.setState({ error: null })
        })
        .catch(err => {
          console.error('Failed to read from clipboard:', err)
          this.checkClipboardPermissions()
          this.setState({ error: 'Failed to read from clipboard' })
        })
    } else {
      console.error('Failed to access clipboard')
    }
  }

  onCopyButtonClick(event) {
    const text = this.state.text
    // const textWithNewLines = this.state.textWithNewLines
    const textWithNewLines = getTextWithNewLines(this.state.text)
    const numberOfNewLines = getNumberOfNewLines(textWithNewLines)

    this.setState({
      spelling: true,
      buttonPresses: this.state.buttonPresses + 1,
    })
    this.spell()
    this.doCopyText(textWithNewLines)

    sendAnalyticsEvent(analyticsEvent.COPY, text, numberOfNewLines)
  }

  spell() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      this.setState({ spelling: false })
    }, 1500)
  }

  /**
   * TODO: do something like this var copyText = event.srcElement
   * TODO: check what happens if the user blocks clipboard-write
   */
  doCopyText(textWithNewLines) {
    // detect if browser supports the Clipboard API
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textWithNewLines)
        .then(() => {
          this.setState({ error: null })
        })
        .catch(err => {
          console.error('Failed to write to clipboard:', err)
          this.checkClipboardPermissions()
          this.setState({ error: 'Failed to write to clipboard' })
        })
    } else {
      // using trying legacy version
      var textAreaElement = document.getElementById('text')
      textAreaElement.value = textWithNewLines

      let ua = navigator.userAgent.toLocaleLowerCase()
      if (ua.includes('iphone') || ua.includes('ipad')) {
        const contentEditable = textAreaElement.contentEditable
        textAreaElement.contentEditable = true

        const readOnly = textAreaElement.readOnly
        textAreaElement.readOnly = true

        let range = document.createRange()
        range.selectNodeContents(textAreaElement)

        let selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)

        textAreaElement.setSelectionRange(0, 1000000)

        textAreaElement.contentEditable = contentEditable
        textAreaElement.readOnly = readOnly
      } else {
        textAreaElement.select()
      }

      document.execCommand('copy')
      textAreaElement.blur()
    }
    // alert('Success')
    // alert.show('The lines have been broken 💫\nGo ahead and paste on insta 🎉')
  }

  render() {
    const { text, buttonPresses, spelling, clipboardRead, error } = this.state

    return (
      <Layout>
        {/* <AlertProvider template={AlertTemplate} {...options}> */}
        <div
          style={{
            fontWeight: '700',
            fontSize: '1.1rem',
            display: 'flex',
            marginBottom: '1rem',
            letterSpacing: '0.05rem',
          }}
        >
          <div style={{ display: 'flex', width: '100%' }}>
            {clipboardRead && clipboardRead !== 'denied' ? (
              <Button
                onClick={this.onPasteButtonClick}
                disabled={spelling}
                style={{
                  marginBottom: '0.2rem',
                }}
              >
                <PasteText />
              </Button>
            ) : (
              <PasteText />
            )}
          </div>
        </div>
        {/* form should be position relative to make the wizard relative to it */}
        <form
          style={{
            width: '100%',
            maxWidth: '23.49rem',
            marginBottom: '1rem',
            position: 'relative',
          }}
        >
          <textarea
            id="text"
            name="text"
            className="textarea"
            rows="6"
            cols="50"
            placeholder={textAreaPlaceholderText}
            aria-label="Paste your instagram caption here"
            value={text}
            disabled={spelling}
            onChange={this.onTextChange}
            style={{
              width: '100%',
              padding: '0.3rem 0.5rem',
              resize: 'vertical',
              minHeight: '100px',
              borderWidth: '0.1rem',
              borderRadius: '0.2rem',
              borderColor: '#000000b3',
            }}
          />
          {/* positioning the wizard absolute to the form */}
          <img
            src={wizard}
            alt="Wizard"
            className={true && spelling ? 'wizard-animation' : ''}
            style={{
              position: 'absolute',
              right: '0rem',
              //bottom: '-5rem', // if starting from below then change animation
              bottom: '0rem',
              display: spelling ? 'inline' : 'none',
              width: '5rem',
              zIndex: '-10',
              marginBottom: '0rem',
            }}
          />
        </form>
        {/* a div to hide the wizard behind in the animation */}
        <div
          style={{
            width: '100%',
            height: '5rem',
            background: 'white',
            marginTop: '-1.4rem',
          }}
        />
        {/* <Alert>
            {alert => ( */}
        {/* push the button back up with a minus margin */}
        <Button
          style={{ marginTop: '-4rem' }}
          disabled={spelling}
          onClick={this.onCopyButtonClick}
        >
          {spelling
            ? getMessage(buttonTextSpells, buttonPresses)
            : buttonPresses > 0 && wasThereAnyText(text)
            ? buttonTextSuccess
            : buttonText}
        </Button>

        {/* )}
          </Alert> */}
        <div
          style={{
            minHeight: '3.75rem',
          }}
        >
          {error ? (
            <div
              style={{
                padding: '0.3rem 0.5rem',
                background: '#FC3030',
                color: 'white',
                width: '100%',
                maxWidth: '500px',
                borderRadius: '0.4rem',
                letterSpacing: '0.03rem',
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >
              <strong>
                {error}
                <span
                  role="img"
                  aria-label="A crying face"
                  aria-hidden="false"
                  style={{ marginLeft: '0.1rem' }}
                >
                  😢
                </span>
              </strong>
            </div>
          ) : buttonPresses > 0 && !spelling && wasThereAnyText(text) ? (
            <div
              style={{
                padding: '0.3rem 0.5rem',
                background: '#11BB77',
                color: 'white',
                width: '100%',
                maxWidth: '500px',
                borderRadius: '0.4rem',
                letterSpacing: '0.03rem',
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >
              <strong>
                {getMessage(successMessages, buttonPresses) + ' '}
                <span
                  role="img"
                  aria-label="Stars"
                  aria-hidden="false"
                  style={{ marginLeft: '0.1rem' }}
                >
                  💫
                </span>
              </strong>
              <br />
              {successMessageAction + ' '}
              <span
                role="img"
                aria-label="A party popper"
                aria-hidden="false"
                style={{ marginLeft: '0.1rem' }}
              >
                🎉
              </span>
            </div>
          ) : buttonPresses > 0 && !spelling ? (
            <div
              style={{
                padding: '0.3rem 0.5rem',
                background: '#FC3030',
                color: 'white',
                width: '100%',
                maxWidth: '500px',
                borderRadius: '0.4rem',
                letterSpacing: '0.03rem',
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >
              <strong>
                {getMessage(failMessages, buttonPresses) + ' '}
                <span
                  role="img"
                  aria-label="Woman shrugging"
                  aria-hidden="false"
                  style={{ marginLeft: '0.1rem' }}
                >
                  🤷‍
                </span>
              </strong>
              <br />
              {failMessageAction + ' '}
              <span
                role="img"
                aria-label="Pen and paper"
                aria-hidden="false"
                style={{ marginLeft: '0.1rem' }}
              >
                📝
              </span>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
                to="/help"
              >
                <strong>Need help?</strong>
              </Link>
            </div>
          ) : null}
        </div>
        {/* </AlertProvider> */}
      </Layout>
    )
  }
}

export default IndexPage
