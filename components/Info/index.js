import React from "react";
import PropTypes from "prop-types";
import { spacing, borderRadii } from "utils/theme";

const Info = ({ children }) => (
  <div
    style={{
      padding: spacing.large,
      borderRadius: borderRadii.medium,
      background: "rgba(0, 0, 0, 0.25)"
    }}
  >
    {children}
  </div>
);

Info.propTypes = {
  children: PropTypes.node.isRequired
};

export default Info;
