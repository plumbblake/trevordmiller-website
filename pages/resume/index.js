import React from 'react'
import tags from '../../utils/tags'
import { spacing, fontSizes, uiGroups } from '../../utils/theme'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Teaser from '../../components/Teaser'
import List from '../../components/List'
import Avatar from '../../components/Avatar'
import Icon from '../../components/Icon'

export const companies = {
  trevordmiller: {
    tags: [
      tags.inProgress,
      tags.node,
      tags.react,
      tags.reactNative,
      tags.typescript,
    ],
    title: `Owner at trevordmiller`,
    responsibilities: (
      <List
        items={[
          `Maintaining open source libraries and apps`,
          `Building freelance apps and services`,
          `Teaching thousands of developers through online courses, conferences, and local boot camps`,
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
    responsibilities: (
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
    responsibilities: (
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
    responsibilities: (
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
    responsibilities: (
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
    responsibilities: (
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
    responsibilities: (
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
    sections={[
      {
        component: (
          <div
            style={{
              marginBottom: spacing.small,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 100,
                minWidth: 100,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar />
            </div>

            <div
              style={{
                marginLeft: spacing.medium,
                fontSize: fontSizes.small,
              }}
            >
              <div>Trevor D. Miller</div>
              <div
                style={{
                  color: uiGroups.gray4,
                }}
              >
                <div>Software Developer</div>
                <div>https://trevordmiller.com</div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {[
                    {
                      icon: 'github',
                      text: 'trevordmiller',
                    },
                    {
                      icon: 'twitter',
                      text: 'trevordmiller',
                    },
                    {
                      icon: 'linkedin',
                      text: 'trevordmiller',
                    },
                  ].map(handle => (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: spacing.medium,
                      }}
                    >
                      <div
                        style={{
                          marginRight: spacing.xxsmall,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Icon
                          type={handle.icon}
                          size={fontSizes.small}
                          fill={uiGroups.gray4}
                        />
                      </div>
                      <div>{handle.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ),
      },

      ...companyKeys.map(companyKey => {
        const company = companies[companyKey]
        return {
          title: company.title,
          component: (
            <Teaser tags={company.tags} body={company.responsibilities} />
          ),
        }
      }),
    ]}
  />
)
