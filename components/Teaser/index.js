import React from 'react'
import {spacing, uiGroups, fontSizes, screenSizes} from '../../utils/styleGuide'
import List from '../List'
import Anchor from '../Anchor'
import Image from '../Image'
import Icon from '../Icon'

export default ({visual, description, href, hrefDescription = 'View'}) => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  }}>

    {visual
      ? <div style={{
          marginBottom: spacing.xsmall,
          marginRight: spacing.large,
          maxWidth: screenSizes.small,
        }}>
          {visual && visual.startsWith('/')
            ? <Image
                src={visual}
                description='Decorative image'
                quiet
              />
            : <Icon
                type={visual}
                fill={uiGroups.userCurrentState}
                size={fontSizes.xxxlarge}
              />
          }
        </div>
      : null
    }

    <div style={{
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: screenSizes.small,
    }}>
      <div>
        {description}
      </div>
      <div style={{
        marginTop: spacing.small,
      }}>
        <List
          items={[
            <span style={{
              fontSize: fontSizes.large,
            }}>
              <Anchor href={href}>
                {hrefDescription}
              </Anchor>
            </span>,
          ]}
          type='link'
        />
      </div>
    </div>

  </div>
)
