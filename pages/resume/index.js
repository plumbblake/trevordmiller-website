import React from 'react'
import tags from 'utils/tags'
import { spacing, fontSizes, uiGroups } from 'utils/theme'
import PageWithBaseRoute from 'components/PageWithBaseRoute'
import Teaser from 'components/Teaser'
import List from 'components/List'
import ListItem from 'components/ListItem'
import Avatar from 'components/Avatar'
import Icon from 'components/Icon'

export const companies = {
  trevordmiller: {
    tags: [
      tags.inProgress,
      tags.graphQl,
      tags.node,
      tags.go,
      tags.react,
      tags.reactNative,
      tags.electron,
      tags.typescript,
    ],
    title: `Owner at trevordmiller`,
    dateRange: `January 2009 - Present`,
    responsibilities: [
      `Teaching thousands of developers through video courses, blog posts, conferences, and local boot camps`,
      `Maintaining open source libraries and apps`,
      `Building freelance apps and services`,
      `Managing online developer communities`,
    ],
  },

  meetedgar: {
    tags: [
      tags.inProgress,
      tags.graphQl,
      tags.node,
      tags.react,
      tags.redux,
      tags.flow,
      tags.ruby,
      tags.postgresql,
    ],
    title: 'Senior Software Developer at MeetEdgar',
    dateRange: `May 2017 - Present`,
    responsibilities: [
      `Contributing to full-stack development of the Edgar web app`,
      `Converting desktop only styles to cross-platform responsive styles`,
      `Managing tests, builds, and deployments in Continuous Integration`,
      `Refactored thousands of old tests`,
      `Led front-end development of the Ropig web app`,
      `Automated API layer between back-end and front-end`,
      `Introduced end-to-end tests for critical features`,
    ],
  },

  egghead: {
    tags: [tags.node, tags.react, tags.redux, tags.ruby, tags.postgresql],
    title: 'Director of Instruction at egghead.io',
    dateRange: `July 2015 - May 2017`,
    responsibilities: [
      `Led onboarding of all new instructors`,
      `Developed the instructor web app for uploading videos, viewing royalties/stats etc.`,
      `Built the component library shared across egghead apps`,
      `Recorded and published my own courses as an instructor`,
    ],
  },

  domo: {
    tags: [tags.node, tags.react, tags.redux],
    title: `Senior Software Developer at Domo`,
    dateRange: `September 2015 - October 2016`,
    responsibilities: [
      `Built the mobile web app`,
      `Applied complex logic for data visualizations, client-side caching, and realtime chat`,
    ],
  },

  ics: {
    tags: [tags.node, tags.javascript, tags.css],
    title: `Senior Web Developer at The Church of Jesus Christ of Latter-day Saints`,
    dateRange: `March 2014 - September 2015`,
    responsibilities: [
      `Led mobile-first development for users across the world in over 70 languages`,
      `Authored and maintained an internal framework built for performance and accessibility`,
      `Published npm modules for use across projects and teams`,
      `Helped start the component library shared across projects`,
      `Introduced unit testing to old and new code`,
    ],
  },

  qualtrics: {
    tags: [tags.javascript, tags.css],
    title: `Web Developer at Qualtrics`,
    dateRange: `May 2013 - March 2014`,
    responsibilities: [
      `Built over 500 custom themes for important companies (Google, Microsoft, etc.)`,
      `Updated team templates to be responsive`,
      `Created a custom Facebook app`,
      `Interviewed potential new hires`,
      `Trained new hires`,
    ],
  },

  byu: {
    tags: [tags.javascript, tags.css, tags.php],
    title: `Web Developer at Brigham Young University`,
    dateRange: `August 2012 - May 2013`,
    responsibilities: [
      `Maintained websites for 12 BYU programs`,
      `Updated team templates to be responsive`,
    ],
  },
}

const companyKeys = Object.keys(companies)

const Resume = () => (
  <PageWithBaseRoute
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
                width: 85,
                minWidth: 85,
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
                    flexWrap: 'wrap',
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
                      key={handle.icon}
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
          note: company.dateRange,
          title: company.title,
          component: (
            <Teaser
              tags={company.tags}
              body={
                <List>
                  {company.responsibilities.map(responsibility => (
                    <ListItem key={responsibility}>{responsibility}</ListItem>
                  ))}
                </List>
              }
            />
          ),
        }
      }),
    ]}
  />
)

export default Resume
