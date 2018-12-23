import React from "react";
import PropTypes from "prop-types";
import { fontFamilies, spacing, fontSizes } from "../../utils/theme";
import Well from "../Well";

const PreformattedText = ({ children }) => (
  <div
    style={{
      marginTop: spacing.medium,
      marginBottom: spacing.medium
    }}
  >
    <Well>
      <pre
        style={{
          fontFamily: fontFamilies.monoSpace,
          fontSize: fontSizes.small,
          overflow: "auto"
        }}
      >
        {children}
      </pre>
    </Well>
  </div>
);

PreformattedText.propTypes = {
  children: PropTypes.node.isRequired
};

export default PreformattedText;
