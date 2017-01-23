import React from 'react'
import {spacing, screenSizes} from '../../../../utils/styleGuide'
import Heading from '../../../Heading'

export default ({title, description}) => (
  <header style={{
    maxWidth: screenSizes.large,
    margin: 'auto',
    paddingTop: spacing.large,
    paddingBottom: spacing.xlarge,
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
  }}>
    <Heading level={1}>
      {title}
    </Heading>
    {description
      ? <Heading level={2}>
          {description}
        </Heading>
      : null
    }
  </header>
)
