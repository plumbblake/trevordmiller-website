import React from 'react'
import { spacing, screenSizes } from '../../../../../../utils/theme'
import Heading from '../../../../../Heading'
import Image from '../../../../../Image'

export default ({ title, mainVisual, description }) =>
  <header
    style={{
      maxWidth: screenSizes.large,
      margin: 'auto',
      paddingTop: spacing.xlarge,
      paddingBottom: spacing.xlarge,
      paddingLeft: spacing.large,
      paddingRight: spacing.large,
    }}
  >
    <Heading level={1}>
      {title}
    </Heading>
    {description &&
      <div
        style={{
          marginTop: spacing.small,
        }}
      >
        <Heading level={2}>
          {description}
        </Heading>
      </div>}
    {mainVisual &&
      <div
        style={{
          maxWidth: 250,
          margin: '0 auto',
        }}
      >
        <Image src={mainVisual} description="Decorative overview image" quiet />
      </div>}
  </header>
