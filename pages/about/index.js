import React from 'react'
import {spacing} from '../../utils/styleGuide'
import {githubUrl, npmUrl, twitterUrl, spotifyUrl, freshlyMarriedUrl} from '../../utils/urls'
import Screen from '../../components/Screen'
import Avatar from '../../components/Avatar'
import Heading from '../../components/Heading'
import Teaser from '../../components/Teaser'

const lifeAspects = [
  {
    visual: 'terminal',
    label: 'Software Engineer',
    description: `I work as a Software Engineer. I love learning and solving problems. My current tech focus is with React and Node. Being a programmer isn't just a job for me, it's a hobby too; I especially enjoy contributing to open source.`,
    links: [
      {
        description: 'Current and past projects',
        href: '/projects',
      },
      {
        description: 'Code on GitHub',
        href: githubUrl,
      },
      {
        description: 'Libraries on npm',
        href: npmUrl,
      },
      {
        description: 'Blog posts',
        href: '/blog',
      },
      {
        description: 'Tweets',
        href: twitterUrl,
      },
    ],
  },
  {
    visual: 'music',
    label: 'musician',
    description: `I play, write, and record music. My main instrument is guitar. I've published some music under the artist name "Perfect Particle". I mainly enjoy modern jazz, math rock, ambient, and electronic styles.`,
    links: [
      {
        description: 'Perfect Particle',
        href: '/projects/perfect-particle',
      },
      {
        description: 'Guitar lessons',
        href: '/projects/guitar-lessons',
      },
      {
        description: 'Spotify playlists',
        href: spotifyUrl,
      },
    ],
  },

  {
    visual: 'couple',
    label: 'family man',
    description: `No kids yet. We like playing board games, watching shows, going on walks - we are pretty boring but we like it! My wife runs a neat project called Freshly Married to help couples strengthen their relationships.`,
    links: [
      {
        description: 'Freshly Married',
        href: freshlyMarriedUrl,
      },
    ],
  },

  {
    visual: 'suit',
    label: 'Mormon',
    description: `I've got plenty of weaknesses, but I strive to follow Jesus Christ.`,
    links: [
      {
        description: 'Info on Mormons',
        href: 'https://www.mormon.org',
      },
    ],
  },

]

export default () => (
  <Screen
    baseRouteTitle='About'
    mainVisual='/static/trevordmiller-website.jpg'
    pathname={`https://trevordmiller.com/about`}
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
            links={lifeAspect.links}
          />
        ),
      }))
    ]}
  />
)
