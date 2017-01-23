import React, {PropTypes} from 'react'
import {uiGroups, borderRadii, borderSizes} from '../../utils/styleGuide'
import Anchor from '../Anchor'

const Image = ({src, quiet = false}) => (
  <Anchor href={src}>
    <img
      style={{
        border: quiet ? 0 : `${borderSizes.small}px solid ${uiGroups.gray3}`,
        borderRadius: borderRadii.medium,
        width: '100%',
      }}
      src={src}
      role='presentation'
    />
  </Anchor>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image
