import React from 'react'
import PropTypes from 'prop-types'
import {spacing} from '../../../../../../utils/styleGuide'
import Heading from '../../../../../Heading'

const Section = ({children, title}) => (
  <section
    id={title}
    style={{
      paddingBottom: spacing.xlarge,
      paddingLeft: spacing.large,
      paddingRight: spacing.large,
    }}
  >
    {title
      ? <Heading level={3}>
          {title}
        </Heading>
      : null
    }
    {children}
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Section
