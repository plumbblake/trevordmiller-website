import React from 'react'
import {spacing} from '../../../../utils/styleGuide'
import Heading from '../../../Heading'

export default ({title, description}) => (
  <header style={{
    paddingTop: spacing.medium,
    paddingRight: spacing.large,
    paddingLeft: spacing.large,
    paddingBottom: spacing.medium,
  }}>
    <Heading level={1}>
      {title}
    </Heading>
    <Heading level={2}>
      {description}
    </Heading>
  </header>
)
