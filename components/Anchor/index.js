import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { colorValues } from '../../utils/styleGuide'

const Anchor = ({ href, children }) => {
  const linkStyle = {
    color: colorValues.colors.blue,
    lineHeight: 0,
  }

  return href.startsWith('/')
    ? <Link prefetch href={href}>
        <a style={linkStyle}>
          {children}
        </a>
      </Link>
    : <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        {children}
      </a>
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
}

export default Anchor
