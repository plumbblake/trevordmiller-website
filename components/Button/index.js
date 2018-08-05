import React from "react";
import PropTypes from "prop-types";
import {
  uiGroups,
  colorValues,
  spacing,
  borderRadii,
  borderSizes,
  fontSizes
} from "utils/theme";

const stylesByType = {
  primary: {
    color: colorValues.colors.blue,
    border: `${borderSizes.small}px solid ${colorValues.colors.blue}`
  },
  secondary: {
    color: uiGroups.gray4,
    border: `${borderSizes.small}px solid ${uiGroups.gray2}`
  }
};

const stylesBySize = {
  medium: {
    padding: spacing.medium
  },
  small: {
    paddingTop: spacing.xsmall,
    paddingBottom: spacing.xsmall,
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium
  }
};

const Button = ({ children, onClick, type = "primary", size = "medium" }) => (
  <button
    onClick={onClick}
    style={{
      cursor: "pointer",
      display: "inline-block",
      textAlign: "center",
      border: "none",
      outline: "none",
      borderRadius: borderRadii.medium,
      background: "transparent",
      fontSize: fontSizes.medium,
      ...stylesByType[type],
      ...stylesBySize[size]
    }}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(Object.keys(stylesByType)),
  size: PropTypes.oneOf(Object.keys(stylesBySize))
};

export default Button;
