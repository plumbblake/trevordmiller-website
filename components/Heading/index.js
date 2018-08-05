import React from "react";
import PropTypes from "prop-types";
import {
  uiGroups,
  fontWeights,
  fontSizes,
  spacing,
  lineHeights
} from "utils/theme";

const levelSpecificStyles = {
  1: {
    color: uiGroups.userCurrentState,
    fontSize: fontSizes.xxxlarge,
    lineHeight: ineHeights.xxlarge,
    textAlign: "center"
  },
  2: {
    color: uiGroups.gray4,
    fontSize: fontSizes.large,
    textAlign: "center",
    marginBottom: spacing.medium
  },
  3: {
    color: uiGroups.userCurrentState,
    fontSize: fontSizes.xlarge,
    lineHeight: 1,
    marginTop: spacing.xlarge,
    marginBottom: spacing.medium
  },
  4: {
    color: uiGroups.userCurrentState,
    fontSize: fontSizes.large,
    marginTop: spacing.large,
    marginBottom: spacing.small
  }
};

export const levels = Object.keys(levelSpecificStyles);

const Heading = ({ children, level }) => (
  <div
    style={{
      fontWeight: fontWeights.light,
      ...levelSpecificStyles[level]
    }}
  >
    {children}
  </div>
);

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  level: PropTypes.oneOf([1, 2, 3, 4]).isRequired
};

export default Heading;
