import React from 'react'
import { spacing } from '../../utils/theme'
import { githubUrl, freshlyMarriedUrl } from '../../utils/urls'
import Screen from '../../components/Screen'
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
        description: 'Blog posts',
        href: '/blog',
      },
      {
        description: 'Current and past projects',
        href: '/projects',
      },
      {
        description: 'Open source code on GitHub',
        href: githubUrl,
      },
      {
        description: 'Quick posts on social media',
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

export default () =>
  <Screen
    baseRouteTitle="about"
    mainVisual="/static/trevordmiller-website.jpg"
    pathname={`https://trevordmiller.com/about`}
    title="about"
    description="Aspects from the life of Trevor D. Miller"
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
