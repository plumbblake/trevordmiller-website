import { Component } from "react";
import PropTypes from "prop-types";

class Toggle extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    const handleToggle = this.handleToggle;

    return children({ isOpen, handleToggle });
  }
}

Toggle.propTypes = {
  children: PropTypes.func.isRequired
};

export default Toggle;
