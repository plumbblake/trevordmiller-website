import React from 'react'
import { spacing } from '../../utils/theme'
import { githubUrl, freshlyMarriedUrl } from '../../utils/urls'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Avatar from '../../components/Avatar'
import Heading from '../../components/Heading'
import Teaser from '../../components/Teaser'

const lifeAspects = [
  {
    visual: 'terminal',
    label: `coder`,
    description: `I work as a Software Engineer. I love learning and solving problems. Being a programmer isn't just a job for me, it's a hobby too. I especially enjoy working in the terminal and contributing to open source. I strive to learn new things every day and share what I learn.`,
    links: [
      {
        description: 'Watch my video courses',
        href: '/courses',
      },
      {
        description: 'Read my blog posts',
        href: '/blog',
      },
      {
        description: 'See my current and past projects',
        href: '/projects',
      },
      {
        description: 'Check out my open source code on GitHub',
        href: githubUrl,
      },
      {
        description: 'Subscribe to my email lists and social media posts',
        href: '/follow',
      },
    ],
  },

  {
    visual: 'couple',
    label: 'family man',
    description: `No kids yet. We like playing board games, watching shows, going on walks - we are pretty boring but we like it! My wife runs a neat project called Freshly Married to help couples strengthen their relationships.`,
    links: [
      {
        description: 'View Freshly Married',
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
        description: 'Learn about Mormons',
        href: 'https://www.mormon.org',
      },
    ],
  },
]

export default () => (
  <ScreenWithBaseRoute
    id="about"
    sections={[
      {
        component: (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 200,
                marginBottom: spacing.small,
              }}
            >
              <Avatar />
            </div>
            <Heading level={2}>Well hello there! My name is Trevor.</Heading>
            {JSON.parse('{')}
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
      })),
    ]}
  />
)
