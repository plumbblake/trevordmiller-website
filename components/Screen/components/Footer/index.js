import React from 'react'
import {uiGroups, fontSizes, spacing} from '../../../utils/styleGuide'
import {newsletterSignupUrl, eggheadUrl, githubUrl, twitterUrl, spotifyUrl} from '../../../utils/urls'
import Info from '../../../Info'
import Anchor from '../../../Anchor'
import Icon from '../../../Icon'

const followItems = [
  {
    iconType: 'envelope',
    label: 'Newsletter',
    href: newsletterSignupUrl,
  },
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
  <footer style={{
    paddingBottom: spacing.xxlarge,
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
  }}>
    <Info>
      You can <Anchor href={newsletterSignupUrl}>subscribe to my newsletter</Anchor> if you'd like occasional updates on new blog posts and whatnot - no spam
    </Info>
    <nav style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingBottom: 200,
    }}>
      {followItems.map((followItem, index) => (
        <Anchor 
          key={index}
          href={followItem.href}
        >
          <div style={{
            padding: spacing.medium,
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
  </footer>
)
