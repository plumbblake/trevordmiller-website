import React from 'react'
import LazyLoad from 'react-lazy-load'

const Avatar = () => (
  <LazyLoad offset={500}>
    <img 
      src='/static/avatar.jpg'
      alt='An avatar of Trevor' 
      style={{
        width: '100%',
        borderRadius: '50%',
      }}
    />
  </LazyLoad>
)

export default Avatar
