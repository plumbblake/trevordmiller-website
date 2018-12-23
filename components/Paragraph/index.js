import React from "react";
import PropTypes from "prop-types";
import { spacing } from "../../utils/theme";

const Paragraph = ({ children }) => (
  <p
    style={{
      marginTop: spacing.medium,
      marginBottom: spacing.medium
    }}
  >
    {children}
  </p>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
};

export default Paragraph;
