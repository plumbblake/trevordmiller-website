import React from 'react'
import { spacing, screenSizes } from '../../../../../../utils/theme'
import Heading from '../../../../../Heading'
import Image from '../../../../../Image'
import Info from '../../../../../Info'

export default ({ title, mainVisual, description, info, cta }) =>
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

    <div
      style={{
        marginTop: spacing.small,
      }}
    >
      <Heading level={2}>
        {description}
      </Heading>
    </div>

    {mainVisual &&
      <div
        style={{
          maxWidth: 350,
          margin: '0 auto',
        }}
      >
        <Image src={mainVisual} description="Decorative overview image" quiet />
      </div>}

    {cta &&
      <div
        style={{
          marginTop: spacing.small,
          textAlign: 'center',
        }}
      >
        {cta}
      </div>}

    {info &&
      <div
        style={{
          marginTop: spacing.small,
        }}
      >
        <Info>
          {info}
        </Info>
      </div>}
  </header>
