import React from 'react'
import { spacing } from '../../utils/theme'
import PageWithBaseRoute from '../../components/PageWithBaseRoute'
import Avatar from '../../components/Avatar'
import Heading from '../../components/Heading'
import Teaser from '../../components/Teaser'

const lifeAspects = [
  {
    visual: 'terminal',
    label: `software developer`,
    description: `I'm a software developer. I love learning and solving problems. I strive to learn new things every day and share what I learn. I especially enjoy open source, testing, and clean code.`,
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
        description: 'See my open source code',
        href: '/projects',
      },
      {
        description: 'View my work experience',
        href: '/resume',
      },
      {
        description: 'Join my email list',
        href: '/follow',
      },
    ],
  },

  {
    visual: 'couple',
    label: 'family man',
    description: `I'm a family man. A wife, a dog, no kids (yet). We like playing video games, watching shows, going on walks - we are pretty boring but we like it! My wife runs a neat project called Freshly Married to help couples strengthen their relationships.`,
    links: [
      {
        description: 'View Freshly Married',
        href: 'https://freshlymarried.com',
      },
    ],
  },

  {
    visual: 'suit',
    label: 'Mormon',
    description: `I've got plenty of weaknesses, but I strive to be a good Christian.`,
    links: [
      {
        description: 'Learn about Mormons',
        href: 'https://www.mormon.org',
      },
    ],
  },
]

const About = () => (
  <PageWithBaseRoute
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
          </div>
        ),
      },
      ...lifeAspects.map((lifeAspect, index) => ({
        title: `I'm a ${lifeAspect.label}`,
        component: (
          <Teaser
            key={index}
            visual={lifeAspect.visual}
            body={lifeAspect.description}
            links={lifeAspect.links}
          />
        ),
      })),
    ]}
  />
)

export default About
