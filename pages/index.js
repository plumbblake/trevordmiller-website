import React from 'react'
import {spacing} from '../components/utils/styleGuide'
import Screen from '../components/Screen'
import Avatar from '../components/Avatar'
import Heading from '../components/Heading'
import Teaser from '../components/Teaser'

const lifeAspects = [
  {
    visual: 'eggo',
    label: 'Software Engineer',
    description: `I work for egghead.io, a website for learning how to code through concise screencasts. I help instructors and teach as an instructor myself.`,
    more: {
      description: 'Watch my coding lessons',
      href: 'https://egghead.io/instructors/trevor-miller',
    },
  },
  {
    visual: 'terminal',
    label: 'coder',
    description: `I love learning. Being a programmer isn't just a job for me, it's a hobby too.`,
    more: {
      description: 'View my code projects',
      href: '/projects',
    },
  },
  {
    visual: 'music',
    label: 'musician',
    description: `I play, write, and record music. My main instrument is guitar.`,
    more: {
      description: 'View my music projects',
      href: '/projects',
    },
  },
  {
    visual: 'headphones',
    label: 'music enthusiast',
    description: `I mainly enjoy modern jazz, math rock, ambient, and electronic stuff.`,
    more: {
      description: 'View my Spotify playlists',
      href: 'https://open.spotify.com/user/trevordmiller',
    },
  },
  {
    visual: 'couple',
    label: 'family man',
    description: `No kids yet. My wife Amy runs a cool project called Freshly Married, to help couples strengthen their marriages.`,
    more: {
      description: 'View Freshly Married',
      href: 'http://freshlymarried.com',
    },
  },
  {
    visual: 'suit',
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
    description='Aspects from the life of Trevor D. Miller'
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
          <Teaser 
            key={index}
            visual={lifeAspect.visual}
            description={lifeAspect.description}
            href={lifeAspect.more.href}
            hrefDescription={lifeAspect.more.description}
          />
        ),
      }))
    ]}
  />
)
