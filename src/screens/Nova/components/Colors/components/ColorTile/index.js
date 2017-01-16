import React, {PropTypes} from 'react'
import {borderRadii} from '../../../../../../utils/styleGuide'

const ColorTile = ({
  color,
  size,
}) => (
  <div style={{
    background: color,
    borderRadius: borderRadii.large,
    width: size,
    height: size,
  }} />
)

ColorTile.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

export default ColorTile
