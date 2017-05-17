import React from 'react'
import {spacing, uiGroups, fontSizes, screenSizes} from '../../utils/styleGuide'
import List from '../List'
import Anchor from '../Anchor'
import Image from '../Image'
import Icon from '../Icon'

export default ({visual, description, links}) => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
  }}>

    {visual
      ? <div style={{
          marginBottom: spacing.xsmall,
          marginRight: spacing.large,
          maxWidth: 200,
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
                size={70}
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
      {links
        ? <div style={{
            marginTop: spacing.small,
          }}>
            <List
              items={links.map((link) => (
                <span style={{
                  fontSize: fontSizes.large,
                }}>
                  <Anchor href={link.href}>
                    {link.description}
                  </Anchor>
                </span>
              ))}
              type='link'
            />
          </div>
        : null
      }
    </div>

  </div>
)
