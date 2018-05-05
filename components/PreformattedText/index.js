import React from 'react'
import PropTypes from 'prop-types'
import {
  fontFamilies,
  spacing,
  uiGroups,
  borderRadii,
  borderSizes,
} from '../../utils/theme'

const PreformattedText = ({ children }) => (
  <pre
    style={{
      fontFamily: fontFamilies.monoSpace,
      border: `${borderSizes.medium}px solid ${uiGroups.backgroundShade}`,
      borderRadius: borderRadii.medium,
      marginTop: spacing.medium,
      marginBottom: spacing.medium,
      padding: spacing.large,
      overflow: 'auto',
    }}
  >
    {children}
  </pre>
)

PreformattedText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PreformattedText
