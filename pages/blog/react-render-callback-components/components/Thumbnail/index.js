import React from 'react'
import Toggle from '../Toggle'

const Thumbnail = ({ src, teaser }) =>
  <Toggle>
    {(isOpen, handleToggle) =>
      <div>
        <div>
          {teaser}
        </div>
        <img
          src={src}
          alt={teaser}
          onClick={handleToggle}
          style={{
            maxWidth: isOpen ? '100%' : 150,
          }}
        />
      </div>}
  </Toggle>

export default Thumbnail
