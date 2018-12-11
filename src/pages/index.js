import React, { Component } from 'react'
import { Link } from 'gatsby'
// import { Provider as AlertProvider, Alert } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
// import { withAlert } from 'react-alert'

import Button from '../components/button'
import Image from '../components/image'
import Layout from '../components/layout'
import wizard from '../images/wizard-flash-200.gif'

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
const buttonTextSpelling = 'Wingardium Leviosa...'
const textAreaPlaceholderText =
  'Join the club of clean wizard line breaks..\n\n📝🧙‍💫\n\n#linewizard'
const successMessages = [
  'The spell has broken the lines',
  'Broken the lines, the spell has',
  'Spell created new lines',
  'Wingardium Leviosa. Lines has levitated.',
]
const successMessageAction = 'Go ahead and paste on Instagram'
const failMessages = [
  'The spell could not break any lines',
  'There was no lines to break',
  'Not a lot of lines were broken',
  'Very few lines are broken',
  'The lines were not a lot broken',
  'Lines broke but not this time',
]
const failMessageAction = 'Try pasting something'

var timeout = null

/**
 * STRING REPLACE FORMULA
 */

// ORIGINAL VALUES
// const getTextWithNewLines = string =>
//   string.replace(/(?:\r\n|\r|\n)/g, '\u2063\n')

// ORIGINAL VALUES AS VARIABLES
// const originalRegExp = /(?:\r\n|\r|\n)/g
// const originalNewLineString = '\u2063\n'
// const getTextWithNewLines = string =>
// string.replace(originalRegExp, originalNewLineString)

// ORIGINAL VALUES AS A REGEXP CONSTRUCTOR
// const regexpString = '(?:\\r\\n|\\r|\\n)'
// const regexpFlags = 'g'
// const regexFromString = new RegExp(regexpString, regexpFlags)
// const originalNewLineString = '\u2063\n'
//   const getTextWithNewLines = string =>
//     string.replace(regexFromString, originalNewLineString)

// FROM REVERSED STRINGS
// const reverseString = str => {
//   return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0)
// }
// const regexpStringReversed = ')n\\|r\\|n\\r\\:?('
// const regexpFlagsReversed = 'g'
// const charReversed = '\n\u2063'
// const getTextWithNewLines = string =>
//   string.replace(
//     new RegExp(
//       reverseString(regexpStringReversed),
//       reverseString(regexpFlagsReversed)
//     ),
//     reverseString(charReversed)
//   )

// FROM CHAR CODES REVERSED
const reverseString = str => {
  return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0)
}
const regexpStringReversed = ')n\\|r\\|n\\r\\:?('
// const regexpFlagsReversed = 'g' // charCodeAt(0)// 103
const regexFlagReversedCharCodeZero = 103
// const charReversed = '\n\u2063'
// const originalNewLineString = '\u2063\n'
// console.log('originalNewLineString 0', originalNewLineString.charCodeAt(0)) // 8291
// console.log('originalNewLineString 1', originalNewLineString.charCodeAt(1)) // 10
// console.log('string from char code', String.fromCharCode(10)) // \n
const newLineCharCodeZero = 8291
const newLineCharCodeOne = 10

const getTextWithNewLines = string =>
  string.replace(
    new RegExp(
      reverseString(regexpStringReversed),
      reverseString(String.fromCharCode(regexFlagReversedCharCodeZero))
    ),
    reverseString(String.fromCharCode(newLineCharCodeOne, newLineCharCodeZero))
  )
// TO BE CONTINUED

/**
 * END OF STRING REPLACE FORMULA
 */

const getNumberOfNewLines = string => string.split('\u2063\n').length - 1
const wasThereAnyText = string => string.length > 0

const analyticsEvent = {
  PASTE: 'PASTE',
  COPY: 'COPY',
}
const sendAnalyticsEvent = (event, text, numberOfNewLines) => {
  if (event !== analyticsEvent.PASTE || event !== analyticsEvent.COPY) {
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

const PasteText = () => (
  <React.Fragment>
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
  </React.Fragment>
)

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      textWithNewLines: '',
      numberOfNewLines: 0,
      buttonPresses: 0,
      spelling: false,
      clipboardRead: null,
      clipboardWrite: null,
    }

    this.checkClipboardPermissions = this.checkClipboardPermissions.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.doPasteText = this.doPasteText.bind(this)
    this.onPasteButtonClick = this.onPasteButtonClick.bind(this)
    this.onCopyButtonClick = this.onCopyButtonClick.bind(this)
    this.spell = this.spell.bind(this)
    this.copyWithLineBreak = this.copyWithLineBreak.bind(this)
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
    let text = event.target.value
    let textWithNewLines = getTextWithNewLines(text)
    let numberOfNewLines = getNumberOfNewLines(textWithNewLines)
    this.setState({
      text: text,
      textWithNewLines: textWithNewLines,
      numberOfNewLines: numberOfNewLines,
      buttonPresses: 0,
    })
  }

  doPasteText(text) {
    let textWithNewLines = getTextWithNewLines(text)
    let numberOfNewLines = getNumberOfNewLines(textWithNewLines)

    this.setState({
      text: text,
      textWithNewLines: textWithNewLines,
      numberOfNewLines: numberOfNewLines,
      spelling: true,
      buttonPresses: this.state.buttonPresses + 1,
    })

    this.spell()
    this.copyWithLineBreak(textWithNewLines)

    sendAnalyticsEvent(analyticsEvent.PASTE, text, numberOfNewLines)
  }

  onPasteButtonClick(event) {
    if (navigator.clipboard) {
      navigator.clipboard
        .readText()
        .then(clipboardText => {
          this.doPasteText(clipboardText)
        })
        .catch(err => {
          console.error('Failed to read clipboard contents: ', err)
          this.checkClipboardPermissions()
        })
    } else {
      console.error('Failed to access clipboard')
    }
  }

  onCopyButtonClick(event) {
    const text = this.state.text
    const textWithNewLines = this.state.textWithNewLines
    const numberOfNewLines = this.state.numberOfNewLines

    this.setState({
      spelling: true,
      buttonPresses: this.state.buttonPresses + 1,
    })
    this.spell()
    this.copyWithLineBreak(textWithNewLines)

    sendAnalyticsEvent(analyticsEvent.COPY, text, numberOfNewLines)
  }

  spell() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      this.setState({ spelling: false })
    }, 1000)
  }

  /**
   * TODO: do something like this var copyText = event.srcElement
   * TODO: check what happens if the user blocks clipboard-write
   */
  copyWithLineBreak(textWithNewLines) {
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

    // alert('Success')
    // alert.show('The lines have been broken 💫\nGo ahead and paste on insta 🎉')
  }

  render() {
    const { text, buttonPresses, spelling, clipboardRead } = this.state

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
          <div style={{ display: 'flex', margin: 'auto' }}>
            {clipboardRead && clipboardRead !== 'denied' ? (
              <Button
                onClick={this.onPasteButtonClick}
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
        <form
          style={{
            width: '100%',
            maxWidth: '500px',
            marginBottom: '1rem',
          }}
        >
          <textarea
            id="text"
            name="text"
            className="textarea"
            rows="8"
            cols="50"
            placeholder={textAreaPlaceholderText}
            aria-label="Paste your instagram caption here"
            value={text}
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
        </form>
        {/* <Alert>
            {alert => ( */}
        <Button disabled={spelling} onClick={this.onCopyButtonClick}>
          {spelling
            ? buttonTextSpelling
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
          {buttonPresses > 0 && !spelling && wasThereAnyText(text) ? (
            <div
              style={{
                padding: '0.3rem 0.5rem',
                background: '#E7F6E6',
                color: '#11BB77',
                width: '100%',
                maxWidth: '500px',
                border: '0.075rem solid #11BB77',
                borderRadius: '0.4rem',
                letterSpacing: '0.075rem',
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >
              <strong>
                {successMessages[(buttonPresses - 1) % successMessages.length] +
                  ' '}
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
                background: '#FFF9EA',
                color: '#6A6A6A',
                width: '100%',
                maxWidth: '500px',
                border: '0.075rem solid #FFCB12',
                borderRadius: '0.4rem',
                letterSpacing: '0.075rem',
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >
              <strong>
                {failMessages[(buttonPresses - 1) % failMessages.length] + ' '}
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
              <Link to="/help">
                <strong>Need help?</strong>
              </Link>
            </div>
          ) : spelling ? (
            <img
              src={wizard}
              alt="Wizard"
              className="wizard"
              style={{
                display: 'flex',
                margin: 'auto',
                width: '3.75rem',
              }}
            />
          ) : null}
        </div>
        {/* </AlertProvider> */}
      </Layout>
    )
  }
}

export default IndexPage
