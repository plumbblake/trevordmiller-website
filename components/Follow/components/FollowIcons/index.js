import React from 'react'
import { colorValues, fontSizes, spacing } from '../../../../utils/theme'
import { githubUrl, twitterUrl, linkedinUrl } from '../../../../utils/urls'
import Anchor from '../../../Anchor'
import Icon from '../../../Icon'

const followItems = [
  {
    iconType: 'github',
    label: 'GitHub',
    href: githubUrl,
  },

  {
    iconType: 'twitter',
    label: 'Twitter',
    href: twitterUrl,
  },

  {
    iconType: 'linkedin',
    label: 'LinkedIn',
    href: linkedinUrl,
  },
]

export default () => (
  <nav
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    {followItems.map((followItem, index) => (
      <Anchor key={index} href={followItem.href}>
        <div
          style={{
            padding: spacing.small,
          }}
        >
          <Icon
            type={followItem.iconType}
            fill={colorValues.colors.blue}
            size={fontSizes.xlarge}
          />
        </div>
      </Anchor>
    ))}
  </nav>
)
