import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  spacing,
  uiGroups,
  fontFamilies,
  borderRadii,
  borderSizes,
} from '../../utils/theme'
import nova from './utils/nova'

const CodeBlock = ({ children, fileName, output, language = 'javascript' }) =>
  <div
    style={{
      fontFamily: fontFamilies.monospace,
      border: `${borderSizes.medium}px solid ${uiGroups.backgroundShade}`,
      borderRadius: borderRadii.medium,
      marginTop: spacing.medium,
      marginBottom: spacing.medium,
    }}
  >
    {fileName &&
      <div
        style={{
          padding: spacing.xsmall,
          background: uiGroups.backgroundShade,
          color: uiGroups.userCurrentState,
        }}
      >
        {fileName}
      </div>}
    <div
      style={{
        padding: spacing.large,
      }}
    >
      <SyntaxHighlighter
        language={language}
        style={nova}
        customStyle={{
          padding: 0,
          margin: 0,
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
    {output &&
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
            background: uiGroups.gray6,
            color: uiGroups.backgroundShade,
            fontFamily: fontFamilies.sansserif,
          }}
        >
          {output}
        </div>
      </div>}
  </div>

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  output: PropTypes.node,
  language: PropTypes.oneOf(['javascript', 'bash']),
}

export default CodeBlock
