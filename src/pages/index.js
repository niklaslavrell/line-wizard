import React, { Component } from 'react'
import { Link } from 'gatsby'
// import { Provider as AlertProvider, Alert } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
// import { withAlert } from 'react-alert'

import Button from '../components/button'
import Image from '../components/image'
import Layout from '../components/layout'
import wizard from '../images/giphy-wand-transparent.gif'

// optional cofiguration
// const options = {
//   position: 'bottom center',
//   timeout: 0, // 5000
//   offset: '30px',
//   transition: 'scale', // oneOf(['fade', 'scale']
//   type: 'success',
// }

const buttonText = 'Copy clean wizard lines'
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

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      textWithNewLines: '',
      numberOfNewLines: 0,
      buttonPresses: 0,
      spelling: false,
    }

    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.spell = this.spell.bind(this)
    this.copyWithLineBreak = this.copyWithLineBreak.bind(this)
  }

  onTextChange(event) {
    let text = event.target.value
    let textWithNewLines = text.replace(/(?:\r\n|\r|\n)/g, '\u2063\n')
    let numberOfNewLines = textWithNewLines.split('\u2063\n').length - 1
    this.setState({
      text: text,
      textWithNewLines: textWithNewLines,
      numberOfNewLines: numberOfNewLines,
      buttonPresses: 0,
    })
  }

  /**
   * TODO: do something like this var copyText = event.srcElement
   */
  onButtonClick(event, text, textWithNewLines, numberOfNewLines) {
    this.setState({
      spelling: true,
      buttonPresses: this.state.buttonPresses + 1,
    })
    this.spell()
    this.copyWithLineBreak(textWithNewLines)
    if (window.ga) {
      window.ga('send', 'event', {
        eventCategory: 'Copy Text',
        eventAction: 'click',
        eventLabel: text.length > 0 ? 'success' : 'fail',
        eventValue: numberOfNewLines,
      })
    }
  }

  spell() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      this.setState({ spelling: false })
    }, 1000)
  }

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
    const text = this.state.text
    const textWithNewLines = this.state.textWithNewLines
    const numberOfNewLines = this.state.numberOfNewLines
    const buttonPresses = this.state.buttonPresses
    const spelling = this.state.spelling

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
        <Button
          disabled={spelling}
          onClick={event =>
            this.onButtonClick(event, text, textWithNewLines, numberOfNewLines)
          }
        >
          {buttonText}
        </Button>

        {/* )}
          </Alert> */}
        <div
          style={{
            minHeight: '3.75rem',
          }}
        >
          {buttonPresses > 0 && !spelling && text.length > 0 ? (
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
