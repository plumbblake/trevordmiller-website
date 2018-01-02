import React, { Component } from 'react'
import Screen from '../components/Screen'
import Anchor from '../components/Anchor'

export default class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    return (
      <Screen
        mainVisual="/static/trevordmiller-website.png"
        pathname="https://trevordmiller.com"
        title={statusCode === 404 ? '404' : 'Error'}
        description={
          statusCode === 404 ? `That page doesn't exist` : 'An error occurred'
        }
        sections={[
          {
            title: 'Try again',
            component: <Anchor href="/">Navigate home</Anchor>,
          },
        ]}
      />
    )
  }
}
