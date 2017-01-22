import React from 'react'
import {uiGroups, fontSizes, spacing}  from '../../../../utils/styleGuide'
import Icon from '../../../../components/Icon'
import Heading from '../../../../components/Heading'
import Anchor from '../../../../components/Anchor'

const aspects = [
  {
    iconType: 'office',
    label: 'Software Engineer',
    description: 'I work with a company called egghead.io, which is a platform for instructors to teach others how to code through consise screencasts. I help code the instructor\'s platform as well as teach as an instructor myself.',
    more: {
      description: 'Watch my coding lessons',
      href: 'https://egghead.io/instructors/trevor-miller',
    },
  },
  {
    iconType: 'terminal',
    label: 'coder',
    description: 'I love learning and can often be found reading, watching video tutorials, or writing code for open source projects. Being a programmer isn\'t just a job for me, it\'s a hobby too.',
    more: {
      description: 'View my projects',
      href: '/projects',
    },
  },
  {
    iconType: 'headphones',
    label: 'music enthusiast',
    description: 'I mainly enjoy modern jazz, math/post rock, ambient, and electronic stuff.',
    more: {
      description: 'View my Spotify playlists',
      href: 'https://open.spotify.com/user/trevordmiller',
    },
  },
  {
    iconType: 'music',
    label: 'musician',
    description: 'I play, write, and record music. My main instrument is guitar.',
    more: {
      description: 'Listen to my albums',
      href: '/projects/perfect-particle',
    },
  },
  {
    iconType: 'couple',
    label: 'family man',
    description: 'No kids yet. My wife Amy runs a cool project called Freshly Married, to help couples strengthen their marriages.',
    more: {
      description: 'View Freshly Married',
      href: 'http://freshlymarried.com',
    },
  },
  {
    iconType: 'suit',
    label: 'Mormon',
    description: 'I\'ve got plenty of weaknesses, but I strive to follow Christ.',
    more: {
      description: 'Learn about Mormons',
      href: 'https://www.mormon.org',
    },
  },
]

export default () => (
  <div>
    {aspects.map((aspect, index) => (
      <div 
        key={index}
        style={{
          display: 'flex',
          marginBottom: spacing.xlarge,
        }}
      >
        <div style={{
          marginRight: spacing.large,
        }}>
          <Icon
            type={aspect.iconType}
            fill={uiGroups.userCurrentState}
            size={fontSizes.xxlarge}
          />
        </div>
        <div>
          <Heading level={3}>
            {`I'm a ${aspect.label}`}
          </Heading>
          <div>{aspect.description}</div>
          <div style={{
            marginTop: spacing.medium,
          }}>
            <Anchor href={aspect.more.href}>
              {aspect.more.description}
            </Anchor>
          </div>
        </div>
      </div>
    ))}
  </div>
)
