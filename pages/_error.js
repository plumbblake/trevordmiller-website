import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from 'components/Page'
import Anchor from 'components/Anchor'
import Button from 'components/Button'

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    return (
      <Page
        mainVisual="/static/trevordmiller-website.png"
        pathname="https://trevordmiller.com"
        title={statusCode === 404 ? '404' : 'Error'}
        description={
          statusCode === 404 ? `That page doesn't exist` : 'An error occurred'
        }
        sections={[
          {
            title: 'Try again',
            component: (
              <Anchor href="/">
                <Button>Navigate to home page</Button>
              </Anchor>
            ),
          },
        ]}
      />
    )
  }
}

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
}

export default Error
