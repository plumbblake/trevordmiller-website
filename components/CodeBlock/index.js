import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { spacing, uiGroups, borderRadii, borderSizes } from '../../utils/theme'
import nova from './utils/nova'

const CodeBlock = ({ children, fileName, output }) => (
  <div
    style={{
      border: `${borderSizes.medium}px solid ${uiGroups.backgroundShade}`,
      borderRadius: borderRadii.medium,
      marginTop: spacing.medium,
      marginBottom: spacing.medium,
    }}
  >
    {fileName && (
      <div
        style={{
          padding: spacing.xsmall,
          background: uiGroups.backgroundShade,
          color: uiGroups.userCurrentState,
        }}
      >
        {fileName}
      </div>
    )}
    <div
      style={{
        padding: spacing.large,
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={nova}
        customStyle={{
          padding: 0,
          margin: 0,
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
    {output && (
      <div>
        <div
          style={{
            padding: spacing.xsmall,
            background: uiGroups.backgroundShade,
            color: uiGroups.userCurrentState,
          }}
        >
          Output
        </div>
        <div
          style={{
            padding: spacing.large,
          }}
        >
          {output}
        </div>
      </div>
    )}
  </div>
)

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  output: PropTypes.node,
}

export default CodeBlock
