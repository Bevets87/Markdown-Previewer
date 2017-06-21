import React, { Component } from 'react'
import marked from 'marked'

import './Output.css'

class Output extends Component {
  constructor (props) {
    super (props)
    this.createMarkup = this.createMarkup.bind(this)
  }
  createMarkup (value) {
    const markup = marked(value)
    return {__html: markup}
  }
  render () {
    return (
      <div className='output-container col-sm-6'>
        <span dangerouslySetInnerHTML={this.createMarkup(this.props.value)}/>
      </div>
    )
  }
}

export default Output
