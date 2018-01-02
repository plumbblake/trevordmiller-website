import React, { Component } from 'react'
import Raven from 'raven-js'
import Heading from '../../../Heading'
import Button from '../../../Button'

const SENTRY_PUBLIC_DSN =
  'https://c1ab0bd30979402eaba992a0aabf3a1b@sentry.io/265579'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
    }
    Raven.config(SENTRY_PUBLIC_DSN, {
      ignoreUrls: ['localhost', '127.0.0.1'],
    }).install()
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
    Raven.captureException(error, {
      extra: errorInfo,
    })
  }

  render() {
    const { children } = this.props
    const { error } = this.state

    return error ? (
      <div>
        <Heading level={2}>Sorry, something's gone wrong :(</Heading>

        <p>
          Trevor has been notified that you ran into an error, but if you could
          fill out a report for him that would be awesome.
        </p>

        <Button onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>
          Send report
        </Button>
      </div>
    ) : (
      children
    )
  }
}

export default ErrorBoundary
