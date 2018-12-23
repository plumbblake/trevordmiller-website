import React from "react";
import PropTypes from "prop-types";
import { uiGroups, spacing } from "../../utils/theme";

const Quote = ({ children }) => (
  <blockquote
    style={{
      color: uiGroups.gray4,
      fontStyle: "italic",
      marginTop: 0,
      marginBottom: 0,
      marginLeft: spacing.medium,
      marginRight: spacing.medium,
      padding: spacing.medium
    }}
  >
    {children}
  </blockquote>
);

Quote.propTypes = {
  children: PropTypes.node.isRequired
};

export default Quote;
