import React, {PropTypes} from 'react'
import {uiGroups, borderRadii, borderSizes} from '../utils/styleGuide'
import Anchor from '../Anchor'

const Image = ({src, description, quiet = false}) => (
  <Anchor href={src}>
    <img
      style={{
        border: quiet ? 0 : `${borderSizes.medium}px solid ${uiGroups.gray3}`,
        borderRadius: borderRadii.large,
        width: '100%',
      }}
      src={src}
      alt={description}
    />
  </Anchor>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image
