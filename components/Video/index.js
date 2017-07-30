import React from 'react'
import PropTypes from 'prop-types'
import { uiGroups } from '../../utils/styleGuide'

const Video = ({ src }) =>
  <div
    style={{
      background: uiGroups.gray2,
    }}
  >
    <video
      src={src}
      controls
      style={{
        width: '100%',
        display: 'block',
      }}
    />
  </div>

Video.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Video
