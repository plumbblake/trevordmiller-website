import React, {PropTypes} from 'react'

const Audio = ({src}) => (
  <audio
    src={src}
    controls
    style={{
      width: '100%',
    }}
  />
)

Audio.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Audio
