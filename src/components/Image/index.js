import React, {PropTypes} from 'react'
import {colors, borderRadii, borderSizes} from '../../utils/styleGuide'
import Anchor from '../Anchor'

const Section = ({src, quiet = false}) => (
  <Anchor href={src}>
    <img
      style={{
        border: quiet ? 0 : `${borderSizes.small}px solid ${colors.decoration.light}`,
        borderRadius: borderRadii.medium,
        width: '100%',
      }}
      src={src}
      role='presentation'
    />
  </Anchor>
)

Section.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Section
