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

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      success: 0,
    }

    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.copyWithLineBreak = this.copyWithLineBreak.bind(this)
  }

  onTextChange(event) {
    // this.setState({ text: event.target.value })
    this.setState({
      text: event.target.value.replace(/(?:\r\n|\r|\n)/g, '\u2063\n'),
    })
  }

  /**
   * TODO: do something like this var copyText = event.srcElement
   */
  onButtonClick(event, alert) {
    // /* Get the text field */
    // var copyText = document.getElementById('text')

    // /* Select the text field */
    // copyText.select()

    // /* Copy the text inside the text field */
    // document.execCommand('copy')

    // /* Alert the copied text */
    // alert('Copied the text: ' + copyText.value)
    this.copyWithLineBreak(alert)
  }

  copyWithLineBreak(alert) {
    // var str = document.getElementById('text').value
    // var str = this.state.text
    // str = str.replace(/(?:\r\n|\r|\n)/g, '\u2063\n')
    // document.getElementById('text').value = str
    // this.setState({ text: src })

    // resolve the element
    // var el = '.textarea'
    // el = typeof el === 'string' ? document.querySelector(el) : el
    var textAreaElement = document.getElementById('text')

    // handle iOS as a special case
    // if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    //   // save current contentEditable/readOnly status
    //   var editable = textAreaElement.contentEditable
    //   var readOnly = textAreaElement.readOnly

    //   // convert to editable with readonly to stop iOS keyboard opening
    //   textAreaElement.contentEditable = true
    //   textAreaElement.readOnly = true

    //   // create a selectable range
    //   var range = document.createRange()
    //   range.selectNodeContents(textAreaElement)

    //   // select the range
    //   var selection = window.getSelection()
    //   selection.removeAllRanges()
    //   selection.addRange(range)
    //   textAreaElement.setSelectionRange(0, 999999)

    //   // restore contentEditable/readOnly to original state
    //   textAreaElement.contentEditable = editable
    //   textAreaElement.readOnly = readOnly
    // } else {
    //   textAreaElement.select()
    // }

    textAreaElement.select()
    document.execCommand('copy')
    textAreaElement.blur()
    this.setState({ success: this.state.success + 1 })
    // alert('Success')
    // alert.show('The lines have been broken 💫\nGo ahead and paste on insta 🎉')
  }

  render() {
    const text = this.state.text
    const success = this.state.success

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
            cols="40"
            placeholder="Paste and wish for breaks.. 💫"
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
          }}
        >
          Copy with Line Breaks
        </button>
        {/* )}
          </Alert> */}
        {success > 0 ? (
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
            }}
          >
            <strong>
              The lines are broken and copied 💫 ({this.state.success} times)
            </strong>
            <br />
            Go ahead and paste on insta 🎉
          </div>
        ) : null}
        {/* <Link to="/page-2/">About</Link> */}
        {/* </AlertProvider> */}
      </Layout>
    )
  }
}

export default IndexPage
