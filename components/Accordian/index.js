import React from "react";
import PropTypes from "prop-types";
import {
  colorValues,
  fontSizes,
  fontWeights,
  spacing,
  borderSizes,
  uiGroups
} from "utils/theme";
import Toggle from "components/Toggle";
import Well from "components/Well";

const Accordian = ({ summary, children }) => (
  <Toggle>
    {({ isOpen, handleToggle }) => (
      <Well>
        <button
          onClick={handleToggle}
          style={{
            cursor: "pointer",
            display: "block",
            width: "100%",
            border: "none",
            outline: "none",
            background: "transparent",
            textAlign: "left",
            fontSize: fontSizes.large,
            fontWeight: fontWeights.light,
            color: colorValues.colors.blue,
            lineHeight: 1
          }}
          data-testid="accordianSummary"
        >
          {summary}
        </button>

        {isOpen ? (
          <div
            style={{
              borderTop: `${borderSizes.small}px solid ${uiGroups.background}`,
              marginTop: spacing.large,
              paddingTop: spacing.large
            }}
          >
            {children}
          </div>
        ) : null}
      </Well>
    )}
  </Toggle>
);

Accordian.propTypes = {
  summary: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default Accordian;
