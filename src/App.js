import React, { Component } from 'react';

import Output from './Output'
import Input from './Input'

import './App.css'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
        value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange (e) {
    e.preventDefault()
    this.setState({
      value: e.target.value
    })
  }
  render () {
    return (
      <div className="container">
        <h1 className="title">Markdown Previewer</h1>
        <Input handleOnChange={this.handleOnChange} value={this.state.value}/>
        <Output value={this.state.value}/>
      </div>
    )
  }
}

export default App;
