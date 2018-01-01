import React from 'react'
import PropTypes from 'prop-types'
import { uiGroups } from '../../utils/theme'

const Video = ({
  src,
  autoplay,
  loop,
  muted,
  controls = 'true',
  thumbnail,
}) => (
  <div
    style={{
      background: uiGroups.gray2,
    }}
  >
    <video
      src={src}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      controls={controls}
      poster={thumbnail}
      style={{
        width: '100%',
        display: 'block',
      }}
    />
  </div>
)

Video.propTypes = {
  src: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
}

export default Video
