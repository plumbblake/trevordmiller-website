import React from 'react'
import {spacing, uiGroups, fontSizes} from '../utils/styleGuide'
import DeviceWidth from '../DeviceWidth'
import List from '../List'
import Anchor from '../Anchor'
import Image from '../Image'
import Icon from '../Icon'

export default ({visual, description, href, hrefDescription = 'View'}) => (
  <DeviceWidth>
    {(deviceWidth) => {
      const visualIsImage = visual && visual.startsWith('/')

      return (

        <div style={deviceWidth === 'small'
          ? {} 
          : {
              display: 'flex',
              alignItems: 'center',
            }
        }>

          {visual
            ? <div style={deviceWidth === 'small'
                ? {
                    marginBottom: spacing.xsmall,
                  }
                : {
                    marginRight: spacing.large,
                    flex: visualIsImage  ? 1 : 'none',
                  }
              }>
                {visualIsImage
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
            flex: 2,
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
    }}
  </DeviceWidth>
)
