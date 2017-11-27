import React from 'react'
import PropTypes from 'prop-types'
import {
  colorValues,
  fontFamilies,
  fontWeights,
  fontSizes,
  spacing,
  lineHeights,
} from '../../utils/theme'

export const levelSpecificStyles = {
  1: {
    fontSize: fontSizes.xxxlarge,
    lineHeight: lineHeights.xxlarge,
    textAlign: 'center',
  },
  2: {
    fontSize: fontSizes.large,
    textAlign: 'center',
    marginBottom: spacing.medium,
  },
  3: {
    fontSize: fontSizes.xlarge,
    lineHeight: 1,
    marginBottom: spacing.medium,
  },
  4: {
    fontSize: fontSizes.large,
    marginBottom: spacing.small,
  },
}

const Heading = ({ children, level }) =>
  <div
    style={{
      color: colorValues.colors.cyan,
      fontFamily: fontFamilies.monospace,
      fontWeight: fontWeights.normal,
      overflowWrap: 'break-word',
      ...levelSpecificStyles[level],
    }}
  >
    {children}
  </div>

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  level: PropTypes.oneOf(
    Object.keys(levelSpecificStyles).map(levelString =>
      parseInt(levelString, 10)
    )
  ).isRequired,
}

export default Heading
