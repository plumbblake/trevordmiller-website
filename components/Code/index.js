import React from 'react'
import PropTypes from 'prop-types'
import { syntaxGroups, fontFamilies } from '../../utils/theme'

const Code = ({ children }) => (
  <span
    style={{
      fontFamily: fontFamilies.monoSpace,
      color: syntaxGroups.statement,
    }}
  >
    {children}
  </span>
)

Code.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Code
