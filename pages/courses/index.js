import React from 'react'
import tags from '../../utils/tags'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Teaser from '../../components/Teaser'

export const courses = {
  'real-world-git': {
    tags: [tags.terminal, tags.git],
    mainVisual: '/static/real-world-git.png',
    previewVideo: '/static/real-world-git-course-preview.mp4',
    previewVideoThumbnail:
      '/static/real-world-git-coruse-preview-thumbnail.png',
    title: `Real-world Git`,
    description: `Learn the most important Git commands`,
    cost: 0,
    time: '1 hour',
    enrollHref:
      'https://sso.teachable.com/secure/158085/users/sign_up?after_success_url=%2Fsecure%2F158085%2Fcheckout%2F504126%2Freal-world-git',
    about: `Git is a staple of almost every programming job. It is powerful. But, it can also be confusing. You can accidentally make big mistakes on your codebase with just a few keystrokes. Because of this, many developers rely on graphical apps to use Git. While this works fine for a lot of people, I think knowing how to use Git directly from the command line is a lot more flexible once you understand a few things. It's also a lot of fun! Running Git commands from your terminal makes you feel like a wizard.`,
    curriculum: [
      {
        title: `Basics`,
        items: [
          {
            title: 'Creating local repos with git init',
          },
          {
            title: 'Copying remote repos to local machines with git clone',
          },
          {
            title: 'Capturing code history snapshots with git add/commit/push',
          },
          {
            title: 'Documenting repos with README files',
          },
        ],
      },

      {
        title: `Working with others`,
        items: [
          {
            title: 'Syncing local and remote repos with git pull',
          },
          {
            title: 'Isolating feature development with git branch',
          },
          {
            title: 'Syncing branches with git merge',
          },
          {
            title: 'Resolving merge conflicts with git status',
          },
          {
            title: 'Saving uncommitted changes with git stash',
          },
        ],
      },

      {
        title: `Viewing code history`,
        items: [
          {
            title:
              'Navigating git command pager output with Unix less commands',
          },
          {
            title: 'Viewing commit history with git log',
          },
          {
            title: 'Formatting commit history with git log arguments',
          },
          {
            title: 'Filtering commit history with git log arguments',
          },
          {
            title: 'Comparing file changes with git diff',
          },
          {
            title: 'Checking who changed lines last with git blame',
          },
        ],
      },

      {
        title: `Tips and tricks`,
        items: [
          {
            title: 'Using semantic versioning with git tag',
          },
          {
            title: 'Cleaning up commits with git rebase',
          },
          {
            title: 'Diagnosing which commit broke something with git bisect',
          },
          {
            title: 'Running scripts on git events with git hooks',
          },
          {
            title: 'Configuring global settings with git config',
          },
          {
            title: 'Removing unnecessary git tracking with .gitignore files',
          },
          {
            title:
              'Removing all unnecessary git tracking with a global .gitignore file',
          },
        ],
      },
    ],
  },

  'egghead-testing-cookbook': {
    tags: [tags.terminal, tags.node, tags.react],
    mainVisual: '/static/egghead-testing-cookbook.png',
    title: `Testing Cookbook`,
    description: `I've grown to love testing, especially for creating "pure" modules that just transform data or render something. I taught this video course to show some of the ways I test my code.`,
    links: [
      {
        description: 'View the videos',
        href: 'https://egghead.io/courses/react-testing-cookbook',
      },
    ],
  },

  'egghead-publish-npm': {
    tags: [tags.terminal, tags.git, tags.node],
    mainVisual: '/static/egghead-publish-npm.png',
    title: `Publish packages on npm`,
    description: `I made this 20 minute long video course to help programmers learn how to share their own code on npm. It can seem scary at first, but learning how to do this can open up a world of new possibilities for you and your team.`,
    links: [
      {
        description: 'View the videos',
        href: 'https://egghead.io/courses/publish-javascript-packages-on-npm',
      },
    ],
  },
}

const courseKeys = Object.keys(courses)

export default () => (
  <ScreenWithBaseRoute
    id="courses"
    sections={courseKeys.map(courseKey => {
      const course = courses[courseKey]
      return {
        title: course.title,
        component: (
          <Teaser
            tags={course.tags}
            visual={course.mainVisual}
            description={course.description}
            links={
              course.links || [
                {
                  description: 'View the videos',
                  href: `/courses/${courseKey}`,
                },
              ]
            }
          />
        ),
      }
    })}
  />
)
