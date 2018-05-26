import React from 'react'
import PropTypes from 'prop-types'
import { fontFamilies, spacing, fontSizes } from 'utils/theme'
import Info from 'components/Info'

const PreformattedText = ({ children }) => (
  <div
    style={{
      marginTop: spacing.medium,
      marginBottom: spacing.medium,
    }}
  >
    <Info>
      <pre
        style={{
          fontFamily: fontFamilies.monoSpace,
          fontSize: fontSizes.small,
          overflow: 'auto',
        }}
      >
        {children}
      </pre>
    </Info>
  </div>
)

PreformattedText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PreformattedText
