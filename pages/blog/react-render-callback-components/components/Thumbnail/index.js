import React from 'react'
import Toggle from '../Toggle'

const Thumbnail = ({ src, teaser }) =>
  <Toggle>
    {(isOpen, handleToggleClick) =>
      <div>
        <div>
          {teaser}
        </div>
        <img
          src={src}
          alt={teaser}
          onClick={handleToggleClick}
          style={{
            maxWidth: isOpen ? '100%' : 150,
          }}
        />
      </div>}
  </Toggle>

export default Thumbnail
