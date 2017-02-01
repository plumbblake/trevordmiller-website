import React from 'react'
import {uiGroups, fontSizes, spacing} from '../../../utils/styleGuide'
import Anchor from '../../../Anchor'
import Icon from '../../../Icon'

const followItems = [
  {
    iconType: 'envelope',
    label: 'Newsletter',
    href: 'http://eepurl.com/czOhev',
  },
  {
    iconType: 'eggo',
    label: 'egghead.io',
    href: 'https://egghead.io/instructors/trevor-miller',
  },
  {
    iconType: 'github',
    label: 'GitHub',
    href: 'https://github.com/trevordmiller',
  },
  {
    iconType: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/trevordmiller',
  },
  {
    iconType: 'spotify',
    label: 'Spotify',
    href: 'https://open.spotify.com/user/trevordmiller',
  },
]

export default () => (
  <footer style={{
    paddingBottom: spacing.xxlarge,
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
  }}>
    <div style={{
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
            padding: `${spacing.medium}px ${spacing.large}px`,
          }}>
            <Icon
              type={followItem.iconType}
              fill={uiGroups.backgroundShade}
              size={fontSizes.xlarge}
            />
          </div>
        </Anchor>
      ))}
    </div>
  </footer>
)
