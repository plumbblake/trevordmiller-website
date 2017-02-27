import React, {PropTypes} from 'react'

const Video = ({src}) => (
  <video
    src={src}
    controls
    style={{
      width: '100%',
    }}
  />
)

Video.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Video
