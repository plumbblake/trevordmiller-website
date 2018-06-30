import React from "react";
import PropTypes from "prop-types";

const CircuitBoard = ({ children }) => (
  <div
    style={{
      backgroundImage:
        'url("/static/circuit-board-flipped.png"), url("/static/circuit-board.png")',
      backgroundSize: "1000px, 1000px",
      backgroundPosition: "center top, center bottom",
      backgroundRepeat: "no-repeat, no-repeat"
    }}
  >
    {children}
  </div>
);

CircuitBoard.propTypes = {
  children: PropTypes.node.isRequired
};

export default CircuitBoard;
