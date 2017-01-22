import React from 'react'
import {syntaxGroups, spacing, fontSizes} from '../../../../../../utils/styleGuide'
import ColorTile from './components/ColorTile'

// TODO: Update to latest nova-colors groups

const colorMeanings = [
  [
    {
      value: syntaxGroups.constant,
      meaning: 'Constant',
    },
    {
      value: syntaxGroups.identifier,
      meaning: 'Identifier',
    },
    {
      value: syntaxGroups.global,
      meaning: 'Global',
    },
    {
      value: syntaxGroups.emphasis,
      meaning: 'Emphasis',
    },
    {
      value: syntaxGroups.special,
      meaning: 'Special',
    },
    {
      value: syntaxGroups.statement,
      meaning: 'Statement',
    },
    {
      value: syntaxGroups.type,
      meaning: 'Type',
    },
    {
      value: syntaxGroups.trivial,
      meaning: 'Trivial',
    },
  ],
]

const tileWidth = 72

const Colors = () => (
  <div>
    {colorMeanings.map((group, index) => (
      <div
        key={index}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {group.map((color, index) => (
          <div
            key={index}
            style={{
              marginRight: (index + 1 < group.length) ? spacing.medium : 0,
              marginBottom: (index + 1 < group.length) ? spacing.large : 0,
              textAlign: 'center',
              width: tileWidth,
            }}
          >
            <div style={{
              marginBottom: spacing.small,
            }}>
              <ColorTile
                color={color.value}
                size={tileWidth}
              />
            </div>
            <div style={{
              fontSize: fontSizes.small,
            }}>
              {color.meaning}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
)

export default Colors
