import React from 'react'
import { colorValues, fontSizes, spacing } from '../../../../utils/theme'
import Anchor from '../../../Anchor'
import Icon from '../../../Icon'

const accounts = [
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
    iconType: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/trevordmiller',
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
    {accounts.map((account, index) => (
      <Anchor key={index} href={account.href}>
        <div
          style={{
            padding: spacing.small,
          }}
        >
          <Icon
            type={account.iconType}
            fill={colorValues.colors.blue}
            size={fontSizes.xlarge}
          />
        </div>
      </Anchor>
    ))}
  </nav>
)
