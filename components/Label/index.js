import React from 'react'
import PropTypes from 'prop-types'
import { uiGroups, fontSizes } from '../../utils/theme'

const Label = ({ children }) => (
  <p
    style={{
      fontSize: fontSizes.small,
      color: uiGroups.gray3,
    }}
  >
    {children}
  </p>
)

Label.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Label
