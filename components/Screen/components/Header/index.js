import React from 'react'
import {spacing, screenSizes} from '../../../utils/styleGuide'
import Heading from '../../../Heading'

export default ({title, description}) => (
  <header style={{
    maxWidth: screenSizes.large,
    margin: 'auto',
    paddingTop: spacing.xlarge,
    paddingBottom: spacing.xlarge,
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
  }}>
    <Heading level={1}>
      {title}
    </Heading>
    {description
      ? <div style={{
          marginTop: spacing.small,
        }}>
          <Heading level={2}>
            {description}
          </Heading>
        </div>
      : null
    }
  </header>
)
