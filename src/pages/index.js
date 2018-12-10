import React, { Component } from 'react'
import { Link } from 'gatsby'
// import { Provider as AlertProvider, Alert } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
// import { withAlert } from 'react-alert'

import Layout from '../components/layout'
import Image from '../components/image'

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

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      textWithNewLines: '',
      buttonPresses: 0,
    }

    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.copyWithLineBreak = this.copyWithLineBreak.bind(this)
  }

  onTextChange(event) {
    // this.setState({ text: event.target.value })
    this.setState({
      text: event.target.value,
      textWithNewLines: event.target.value.replace(
        /(?:\r\n|\r|\n)/g,
        '\u2063\n'
      ),
      buttonPresses: 0,
    })
  }

  /**
   * TODO: do something like this var copyText = event.srcElement
   */
  onButtonClick(event, alert, textWithNewLines) {
    this.copyWithLineBreak(alert, textWithNewLines)
  }

  copyWithLineBreak(alert, textWithNewLines) {
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
    this.setState({ buttonPresses: this.state.buttonPresses + 1 })

    // alert('Success')
    // alert.show('The lines have been broken 💫\nGo ahead and paste on insta 🎉')
  }

  render() {
    const text = this.state.text
    const textWithNewLines = this.state.textWithNewLines
    const buttonPresses = this.state.buttonPresses

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
                maxWidth: '20px',
                height: '20px',
                width: '20px',
                marginLeft: '0.4rem',
                marginRight: '0.4rem',
                marginTop: '0.1rem',
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
        <button
          type="button"
          onClick={event => this.onButtonClick(event, alert, textWithNewLines)}
          className="copyButton"
          style={{
            padding: '0.75rem',
            //background: '#16CF97',
            background: '#ffdd00',
            //color: 'white',
            color: 'black',
            fontWeight: '600',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '2rem',
            textTransform: 'uppercase',
            border: '0rem',
            boxShadow: '0px 2px 2px lightgray',
            letterSpacing: '0.075rem',
            fontSize: '1.1rem',
            marginBottom: '1rem',
            cursor: 'pointer',
          }}
        >
          {buttonText}
        </button>
        {/* )}
          </Alert> */}
        {buttonPresses > 0 && text.length > 0 ? (
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
              marginBottom: '1rem',
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
        ) : buttonPresses > 0 ? (
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
              marginBottom: '1rem',
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
        ) : null}
        {/* </AlertProvider> */}
      </Layout>
    )
  }
}

export default IndexPage
