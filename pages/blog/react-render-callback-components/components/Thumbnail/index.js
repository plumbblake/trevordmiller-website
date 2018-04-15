import React from 'react'
import PropTypes from 'prop-types'
import Toggle from '../Toggle'

const Thumbnail = ({ src, teaser }) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <div>
        <div>{teaser}</div>
        <button onClick={handleToggleClick}>
          <img
            src={src}
            alt={teaser}
            style={{
              maxWidth: isOpen ? '100%' : 150,
            }}
          />
        </button>
      </div>
    )}
  </Toggle>
)

Thumbnail.propTypes = {
  teaser: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Thumbnail
