import React from 'react'
import {uiGroups, fontSizes, spacing} from '../../../../../../utils/styleGuide'
import {githubUrl, twitterUrl} from '../../../../../../utils/urls'
import Anchor from '../../../../../Anchor'
import Icon from '../../../../../Icon'

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
