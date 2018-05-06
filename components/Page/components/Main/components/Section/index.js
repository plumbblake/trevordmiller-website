import React from 'react'
import PropTypes from 'prop-types'
import { spacing, uiGroups } from 'utils/theme'
import Heading from 'components/Heading'

const Section = ({ children, note, title }) => (
  <section id={title}>
    {title && <Heading level={3}>{title}</Heading>}

    {note && (
      <div
        style={{
          color: uiGroups.gray3,
          marginBottom: spacing.small,
        }}
      >
        {note}
      </div>
    )}

    {children}
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  note: PropTypes.string,
  title: PropTypes.string,
}

export default Section
