import React from 'react'
import { uiGroups, fontSizes, spacing } from '../../../../utils/theme'
import {
  githubUrl,
  twitterUrl,
  redditUrl,
  facebookUrl,
  linkedinUrl,
} from '../../../../utils/urls'
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
    iconType: 'reddit',
    label: 'Reddit',
    href: redditUrl,
  },

  {
    iconType: 'facebook',
    label: 'Facebook',
    href: facebookUrl,
  },

  {
    iconType: 'linkedin',
    label: 'LinkedIn',
    href: linkedinUrl,
  },
]

export default () =>
  <nav
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    {followItems.map((followItem, index) =>
      <Anchor key={index} href={followItem.href}>
        <div
          style={{
            padding: spacing.small,
          }}
        >
          <Icon
            type={followItem.iconType}
            fill={uiGroups.userCurrentState}
            size={fontSizes.xlarge}
          />
        </div>
      </Anchor>
    )}
  </nav>
