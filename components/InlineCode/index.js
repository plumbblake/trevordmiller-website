import React from 'react'
import PropTypes from 'prop-types'
import { syntaxGroups, fontFamilies } from 'utils/theme'

const InlineCode = ({ children }) => (
  <code
    style={{
      fontFamily: fontFamilies.monoSpace,
      color: syntaxGroups.statement,
    }}
  >
    {children}
  </code>
)

InlineCode.propTypes = {
  children: PropTypes.string.isRequired,
}

export default InlineCode
