import React from 'react'
import PropTypes from 'prop-types'
import { colorValues } from '../../utils/theme'
import icons from './utils/icons'

const Icon = ({ type, fill = colorValues.grays.gray6, style, size = '100%' }) =>
  <svg
    viewBox={`0 0 ${icons[type].viewBox} ${icons[type].viewBox}`}
    fill={fill}
    style={style}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    {icons[type].elements}
  </svg>

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Icon
