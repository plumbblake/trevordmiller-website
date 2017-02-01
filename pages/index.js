import React from 'react'
import {spacing, uiGroups, fontSizes} from '../components/utils/styleGuide'
import Screen from '../components/Screen'
import Avatar from '../components/Avatar'
import Heading from '../components/Heading'
import Icon from '../components/Icon'
import Teaser from '../components/Teaser'

const lifeAspects = [
  {
    iconType: 'eggo',
    label: 'Software Engineer',
    description: `I work for egghead.io, a website for learning how to code through consise screencasts. I help instructors and teach as an instructor myself.`,
    more: {
      description: 'Watch my coding lessons',
      href: 'https://egghead.io/instructors/trevor-miller',
    },
  },
  {
    iconType: 'terminal',
    label: 'coder',
    description: `I love learning. Being a programmer isn't just a job for me, it's a hobby too.`,
    more: {
      description: 'View my projects',
      href: '/projects',
    },
  },
  {
    iconType: 'headphones',
    label: 'music enthusiast',
    description: `I mainly enjoy modern jazz, math rock, ambient, and electronic stuff.`,
    more: {
      description: 'View my Spotify playlists',
      href: 'https://open.spotify.com/user/trevordmiller',
    },
  },
  {
    iconType: 'music',
    label: 'musician',
    description: `I play, write, and record music. My main instrument is guitar.`,
    more: {
      description: 'Listen to my albums',
      href: '/projects/perfect-particle',
    },
  },
  {
    iconType: 'couple',
    label: 'family man',
    description: `No kids yet. My wife Amy runs a cool project called Freshly Married, to help couples strengthen their marriages.`,
    more: {
      description: 'View Freshly Married',
      href: 'http://freshlymarried.com',
    },
  },
  {
    iconType: 'suit',
    label: 'Mormon',
    description: `I've got plenty of weaknesses, but I strive to follow Christ.`,
    more: {
      description: 'Learn about Mormons',
      href: 'https://www.mormon.org',
    },
  },
]

export default () => (
  <Screen
    title='About'
    description='A bit about me'
    sections={[
      {
        component: (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <div style={{
              width: 200,
              marginBottom: spacing.small,
            }}>
              <Avatar />
            </div>
            <Heading level={2}>
              Well, hello there! My name is Trevor.
            </Heading>
          </div>
        ),
      },
      ...lifeAspects.map((lifeAspect, index) => ({
        title: `I'm a ${lifeAspect.label}`,
        component: (
          <div 
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{
              marginRight: spacing.large,
            }}>
              <Icon
                type={lifeAspect.iconType}
                fill={uiGroups.userCurrentState}
                size={fontSizes.xxxlarge}
              />
            </div>
            <div>
              <Teaser 
                description={lifeAspect.description}
                href={lifeAspect.more.href}
                hrefDescription={lifeAspect.more.description}
              />
            </div>
          </div>
        ),
      }))
    ]}
  />
)
