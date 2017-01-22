import React from 'react'
import {spacing} from '../../../../../../utils/styleGuide'
import Heading from '../../../../../../components/Heading'

const characteristics = [
  {
    title: 'Intentional',
    description: 'Colors have a dedicated meaning',
  },
  {
    title: 'Current',
    description: 'First-class syntax highlighting for today\'s web development languages',
  },
  {
    title: 'Soft',
    description: 'Flat pastel colors that are easy on the eyes',
  },
  {
    title: 'Balanced',
    description: 'Designed by a designer who knows color theory',
  },
  {
    title: 'Maintainable',
    description: 'Single-source-of-truth for color values and documentation',
  },
  {
    title: 'Free',
    description: '100% open source',
  },
]

export default () => (
  <div>
    {characteristics.map((characteristic, index) => (
      <div
        key={index}
        style={{
          marginBottom: (index + 1 < characteristics.length) ? spacing.large : 0,
        }}
      >
        <Heading level={4}>{characteristic.title}</Heading>
        <div>{characteristic.description}</div>
      </div>
    ))}
  </div>
)
