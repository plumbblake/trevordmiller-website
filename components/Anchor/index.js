import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { colorValues } from 'utils/theme'

const Anchor = ({ href, children }) => {
  const linkStyle = {
    color: colorValues.colors.blue,
    lineHeight: 0,
  }

  return href.startsWith('/') ? (
    <Link href={href} prefetch>
      <a href={href} style={linkStyle}>
        {children}
      </a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
      {children}
    </a>
  )
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
}

export default Anchor
