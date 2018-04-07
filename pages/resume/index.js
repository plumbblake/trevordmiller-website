import React from 'react'
import tags from '../../utils/tags'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Teaser from '../../components/Teaser'
import List from '../../components/List'

export const companies = {
  trevordmiller: {
    tags: [tags.inProgress, tags.general],
    title: `Owner at trevordmiller`,
    description: (
      <List
        items={[
          `Maintaining open source libraries and apps`,
          `Building freelance apps and services`,
          `Teaching thousands of developers through online courses, conferences, and local bootcamps`,
        ]}
      />
    ),
  },

  meetedgar: {
    tags: [
      tags.inProgress,
      tags.postgresql,
      tags.ruby,
      tags.node,
      tags.graphQl,
      tags.react,
      tags.redux,
    ],
    title: 'Senior Software Developer at MeetEdgar',
    description: (
      <List
        items={[
          `Contributing to full-stack development of the Edgar web app`,
          `Converting desktop only styles to cross-platform responsive styles`,
          `Managing tests, builds, and deployments in Continous Integration`,
          `Refactored thousands of old tests`,
          `Led front-end development of the Ropig web app`,
          `Automated API layer between back-end and front-end`,
          `Introduced end-to-end tests for critical features`,
        ]}
      />
    ),
  },

  egghead: {
    tags: [tags.node, tags.react, tags.redux],
    title: 'Director of Instruction at egghead.io',
    description: (
      <List
        items={[
          `Led onboarding of all new instructors`,
          `Developed the instructor web app for uploading videos, viewing royalties/stats etc.`,
          `Built the component library shared across egghead apps`,
          `Recorded and published my own courses as an instructor`,
        ]}
      />
    ),
  },

  domo: {
    tags: [tags.node, tags.react],
    title: `Senior Software Developer at Domo`,
    description: (
      <List
        items={[
          `Built the mobile web app`,
          `Applied complex logic for data visualizations, client-side caching, and realtime chat`,
        ]}
      />
    ),
  },

  ics: {
    tags: [tags.node, tags.javascript, tags.css],
    title: `Software Developer at ICS`,
    description: (
      <List
        items={[
          `Led mobile-first development for users across the world in over 70 languages`,
          `Authored and maintained an internal framework built for performance and accessibility`,
          `Published npm modules for use across projects and teams`,
          `Helped start the component library shared across projects`,
          `Introduced unit testing to old and new code`,
        ]}
      />
    ),
  },

  qualtrics: {
    tags: [tags.javascript, tags.css],
    title: `Software Developer at Qualtrics`,
    description: (
      <List
        items={[
          `Built over 500 custom themes for important companies (Google, Microsoft, etc.)`,
          `Updated team templates to be responsive`,
          `Created a custom Facebook app`,
          `Interviewed potential new hires`,
          `Trained new hires`,
        ]}
      />
    ),
  },

  byu: {
    tags: [tags.javascript, tags.css, tags.php],
    title: `Software Developer at Brigham Young University`,
    description: (
      <List
        items={[
          `Maintained websites for 12 BYU programs`,
          `Updated team templates to be responsive`,
        ]}
      />
    ),
  },
}

const companyKeys = Object.keys(companies)

export default () => (
  <ScreenWithBaseRoute
    id="resume"
    sections={companyKeys.map(companyKey => {
      const company = companies[companyKey]
      return {
        title: company.title,
        component: (
          <Teaser tags={company.tags} description={company.description} />
        ),
      }
    })}
  />
)
