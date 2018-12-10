import React, { Component } from 'react'
// import { Link } from 'gatsby'
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

const buttonText = 'Copy the Broken Lines'
const textAreaPlaceholderText =
  'Join the club and break the lines 💫 #linewizard'
const successMessages = [
  'The spell has broken the lines',
  'Broken the lines, the spell has',
  'Spell created new lines',
  'Wingardium Leviosa. Lines has levitated.',
]
const successMessageAction = 'Go ahead and paste on insta'
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
      buttonPresses: 0,
    }

    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.copyWithLineBreak = this.copyWithLineBreak.bind(this)
  }

  onTextChange(event) {
    // this.setState({ text: event.target.value })
    this.setState({
      text: event.target.value.replace(/(?:\r\n|\r|\n)/g, '\u2063\n'),
      buttonPresses: 0,
    })
  }

  /**
   * TODO: do something like this var copyText = event.srcElement
   */
  onButtonClick(event, alert) {
    this.copyWithLineBreak(alert)
  }

  copyWithLineBreak(alert) {
    var textAreaElement = document.getElementById('text')
    textAreaElement.select()
    document.execCommand('copy')
    textAreaElement.blur()
    this.setState({ buttonPresses: this.state.buttonPresses + 1 })
    // alert('Success')
    // alert.show('The lines have been broken 💫\nGo ahead and paste on insta 🎉')
  }

  render() {
    const text = this.state.text
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
          onClick={event => this.onButtonClick(event, alert)}
          className="copyButton"
          style={{
            padding: '0.75rem',
            background: '#16CF97',
            color: 'white',
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
              color: '#16CF97',
              width: '100%',
              maxWidth: '500px',
              border: '0.075rem solid #16CF97',
              borderRadius: '0.2rem',
              letterSpacing: '0.075rem',
              fontSize: '0.9rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            <strong>
              {successMessages[buttonPresses % successMessages.length] + ' '}
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
              background: '#e6dd9c47',
              color: '#eacf0d',
              width: '100%',
              maxWidth: '500px',
              border: '0.075rem solid #eacf0d',
              borderRadius: '0.2rem',
              letterSpacing: '0.075rem',
              fontSize: '0.9rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            <strong>
              {failMessages[buttonPresses % failMessages.length] + ' '}
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
          </div>
        ) : null}
        {/* <Link to="/about">About</Link> */}
        {/* </AlertProvider> */}
      </Layout>
    )
  }
}

export default IndexPage
