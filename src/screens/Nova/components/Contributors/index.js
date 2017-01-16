import React from 'react'
import {
  colorValues,
  spacing,
  fontSizes,
  opacities,
} from '../../../../utils/styleGuide'
import Icon from '../../../../components/Icon'
import Anchor from '../../../../components/Anchor'

const contributors = [
  {
    handle: '@AC_Design',
    url: 'https://twitter.com/AC_Design'
  },
  {
    handle: '@iammerrick',
    url: 'http://merrickchristensen.com/'
  },
  {
    handle: '@trevordmiller',
    url: 'http://trevordmiller.com'
  },
]

export default () => (
  <div style={{
    textAlign: 'center',
    fontSize: fontSizes.small,
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      // Built with 
      <div style={{
        marginLeft: spacing.xsmall,
        marginRight: spacing.xsmall,
        display: 'flex',
        alignItems: 'center',
      }}>
        <Icon
          type='heart'
          fill={colorValues.colors.red}
          size={fontSizes.medium}
        />
      </div>
      by
    </div>
    <div style={{
      opacity: opacities.subtle,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      {contributors.map((contributor, index) => (
        <span
          key={index}
          style={{
            marginRight: (index + 1 < contributors.length) ? spacing.medium : 0,
          }}
        >
          <Anchor
            href={contributor.url}
            inline={true}
          >
            {contributor.handle}
          </Anchor>
        </span>
      ))}
    </div>
  </div>
)
