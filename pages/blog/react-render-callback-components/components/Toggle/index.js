import { Component } from 'react'
import PropTypes from 'prop-types'

class Toggle extends Component {
  state = {
    isOpen: false,
  }

  handleToggleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { children } = this.props

    return children(this.state.isOpen, this.handleToggleClick)
  }
}

Toggle.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Toggle
