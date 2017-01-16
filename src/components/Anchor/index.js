import React, {PropTypes} from 'react'
import {colorValues} from '../../utils/styleGuide'

const Anchor = ({
  href,
  children,
  inline = false,
}) => (
  <a 
    href={href}
    target='_blank'
    style={{
      color: colorValues.colors.blue,
      textDecoration: 'none',
      display: inline ? 'inline' : 'block',
      lineHeight: 0,
    }}
  >
    {children}
  </a>
)

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  inline: PropTypes.bool,
}

export default Anchor
