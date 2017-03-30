import {Component} from 'react'

const deviceWidthThresholds = {
  small: '500',
}

export default class extends Component {
  
  state = {
    deviceWidth: 'small',
  }

  componentDidMount = () => {
    this.handleWidthChange()
    window.onresize = this.handleWidthChange
  }

  handleWidthChange = () => {
    if(window.screen.width <= deviceWidthThresholds.small) {
      this.setState({
        deviceWidth: 'small',
      })
    } else {
      this.setState({
        deviceWidth: 'large',
      })
    }
  }

  render() {
    const {deviceWidth} = this.state
    const {children} = this.props
    return children(deviceWidth)
  }
}
