import React, { Component } from 'react'
import {
  spacing,
  borderRadii,
  borderSizes,
  fontSizes,
  uiGroups,
  colorValues,
} from '../../utils/theme'
import Heading from '../Heading'
import Button from '../Button'
import Checkbox from '../Checkbox'

const inputResetStyles = {
  fontSize: fontSizes.medium,
  border: 0,
  WebkitAppearance: 'none',
  MozAppearance: 'none',
}

const submitUrl =
  'https://trevordmiller.us3.list-manage.com/subscribe/post?u=70b7070413b98c77c71e28694&amp;id=97d3f6b0ec'

class Subscribe extends Component {
  state = {
    isOpen: false,
  }

  handleToggle = event => {
    event.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { kind = 'button' } = this.props
    const { isOpen } = this.state

    const closedOutputByKind = {
      button: (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Button onClick={this.handleToggle}>Join my email list</Button>
        </div>
      ),

      box: (
        <div>
          <Button onClick={this.handleToggle} type="inline">
            Subscribe to my email list
          </Button>
        </div>
      ),
    }

    return (
      <div>
        {isOpen ? (
          <div
            style={{
              border: `${borderSizes.medium}px solid ${
                uiGroups.userCurrentState
              }`,
              padding: spacing.large,
              borderRadius: borderRadii.medium,
            }}
          >
            <Heading level={3}>
              Submit your email for occasional updates
            </Heading>

            <div>I'll never spam you or share your email with anyone else.</div>

            <form
              action={submitUrl}
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <div
                style={{
                  marginTop: spacing.medium,
                }}
              >
                <Heading level={4}>Email</Heading>
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="you@wherever.com"
                  required
                  style={{
                    ...inputResetStyles,
                    width: '100%',
                    maxWidth: 300,
                    padding: spacing.small,
                    background: uiGroups.gray2,
                    color: uiGroups.gray6,
                    borderRadius: borderRadii.medium,
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: spacing.medium,
                }}
              >
                <Heading level={4}>When do you want to be emailed?</Heading>
                <Checkbox
                  label="New courses*"
                  value="1"
                  name="group[20246][1]"
                  id="mce-group[20246]-20246-0"
                  defaultChecked
                  required
                />

                <Checkbox
                  label="New blog posts"
                  value="4"
                  name="group[20246][4]"
                  id="mce-group[20246]-20246-2"
                />

                <Checkbox
                  label="New projects"
                  value="2"
                  name="group[20246][2]"
                  id="mce-group[20246]-20246-1"
                />
              </div>

              <div
                style={{
                  marginTop: spacing.medium,
                }}
              >
                <input
                  type="submit"
                  defaultValue="Submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  style={{
                    ...inputResetStyles,
                    marginTop: spacing.medium,
                    paddingTop: spacing.medium,
                    paddingBottom: spacing.medium,
                    paddingLeft: spacing.large,
                    paddingRight: spacing.large,
                    minWidth: 175,
                    background: colorValues.colors.blue,
                    color: uiGroups.backgroundShade,
                    borderRadius: borderRadii.medium,
                    cursor: 'pointer',
                  }}
                />
              </div>
            </form>
          </div>
        ) : (
          closedOutputByKind[kind]
        )}
      </div>
    )
  }
}

export default Subscribe
