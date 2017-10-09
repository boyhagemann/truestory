import React, { Component } from 'react'
import { getStories } from '../utils/http'

export default WrappedComponent => {

  return class extends Component {

    constructor() {
      super()
      this.state = {
        stories: []
      }
    }

    componentDidMount() {
      getStories().then( stories => {
        this.setState({ stories })
      })
    }

    render() {
      return <WrappedComponent { ...this.state } />
    }
  }
}
