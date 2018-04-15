/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import PropTypes from 'prop-types'

const Audio = ({ src }) => (
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
