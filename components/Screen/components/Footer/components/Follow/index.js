import React from 'react'
import {uiGroups, fontSizes, spacing} from '../../../../../utils/styleGuide'
import {eggheadUrl, githubUrl, twitterUrl, spotifyUrl} from '../../../../../utils/urls'
import Anchor from '../../../../../Anchor'
import Icon from '../../../../../Icon'

const followItems = [
  {
    iconType: 'eggo',
    label: 'egghead.io',
    href: eggheadUrl,
  },
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
    iconType: 'spotify',
    label: 'Spotify',
    href: spotifyUrl,
  },
]

export default () => (
  <nav style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }}>
    {followItems.map((followItem, index) => (
      <Anchor 
        key={index}
        href={followItem.href}
      >
        <div style={{
          padding: spacing.small,
        }}>
          <Icon
            type={followItem.iconType}
            fill={uiGroups.backgroundShade}
            size={fontSizes.xxlarge}
          />
        </div>
      </Anchor>
    ))}
  </nav>
)
