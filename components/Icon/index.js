import React from "react";
import PropTypes from "prop-types";
import { colorValues } from "utils/theme";
import iconsSource from "./utils/icons";

export const icons = iconsSource;

const Icon = ({ type, fill = colorValues.grays.gray6, size = "100%" }) => (
  <svg
    viewBox={`0 0 ${icons[type].viewBox} ${icons[type].viewBox}`}
    fill={fill}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    style={{
      minWidth: size
    }}
  >
    {icons[type].elements}
  </svg>
);

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Icon;
