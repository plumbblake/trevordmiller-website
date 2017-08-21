import { Component } from 'react'

class Toggle extends Component {
  state = {
    isOpen: false,
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return this.props.children(this.state.isOpen, this.handleToggle)
  }
}

export default Toggle
