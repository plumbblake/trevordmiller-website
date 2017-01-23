import React from 'react'
import {spacing} from '../../../../utils/styleGuide'
import Heading from '../../../Heading'

export default ({title, description}) => (
  <header style={{
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
