import React from 'react'
import ScreenWithBlogPost from '../../../components/ScreenWithBlogPost'
import Paragraph from '../../../components/Paragraph'
import Image from '../../../components/Image'
import Anchor from '../../../components/Anchor'
import Code from '../../../components/Code'

export default () =>
  <ScreenWithBlogPost
    id="rebuilding-my-website"
    sections={[
      {
        title: `The code`,
        component: (
          <div>
            <Paragraph>
              The code is{' '}
              <Anchor href="https://github.com/trevordmiller/trevordmiller-website">
                available on GitHub
              </Anchor>.
            </Paragraph>
            <Image
              src="/static/trevordmiller-website.png"
              description="The home page of trevordmiller.com"
            />
          </div>
        ),
      },
      {
        title: `Scripts`,
        component: (
          <div>
            <Paragraph>
              The project has a{' '}
              <Anchor href="https://github.com/trevordmiller/trevordmiller-website/blob/master/package.json">
                minimal package.json
              </Anchor>. This file declares dependencies, scripts, and some
              config for compilation and linting. The only steps needed to work
              in the app are to clone it, run <Code>npm install</Code> to
              install dependencies, then run <Code>npm run dev</Code> to
              develop. <Code>npm run verify</Code> can additionally be run to
              check builds, linting, and tests. Once a pull request is merged
              into master, <Code>npm run stage</Code> is run to deploy the
              latest code to a test release URL; if everything looks good,{' '}
              <Code>npm run release</Code> is run to tie the latest deployment
              to the <Code>trevordmiller.com</Code> URL.
            </Paragraph>
            <Image
              src="/static/trevordmiller-website-workflow.jpg"
              description="Screenshot of working on the website in vim"
            />
          </div>
        ),
      },
      {
        title: `Directories`,
        component: (
          <div>
            <Paragraph>
              The project has three directories. <Code>static</Code>,{' '}
              <Code>components</Code>, and <Code>pages</Code>.
            </Paragraph>
            <Paragraph>
              <Anchor href="https://github.com/trevordmiller/trevordmiller-website/tree/master/static">
                The static directory
              </Anchor>{' '}
              holds static files (like favicons and raster images). When the app
              is deployed, these can be accessed at <Code>/static/*</Code>. This
              functionality works by default with Next.js.
            </Paragraph>
            <Paragraph>
              <Anchor href="https://github.com/trevordmiller/trevordmiller-website/tree/master/components">
                The components directory
              </Anchor>{' '}
              holds generic components used across app pages. These are ES2015
              modules that export React components, things like Icons, Buttons,
              Headings etc.
            </Paragraph>
            <Paragraph>
              <Anchor href="https://github.com/trevordmiller/trevordmiller-website/tree/master/pages">
                The pages directory
              </Anchor>{' '}
              holds app pages. A "page" is just a component, but it is special
              because Next.js wires up the file path to the matching route (ie{' '}
              <Code>pages/index.js</Code> becomes{' '}
              <Code>https://trevordmiller.com</Code> and{' '}
              <Code>pages/projects/guitar-lessons</Code> becomes{' '}
              <Code>https://trevordmiller.com/projects/guitar-lessons</Code>).
              This functionality works by default with Next.js. The page
              components generally just compose the generic components in the{' '}
              <Code>components</Code> folder to create a page.
            </Paragraph>
            <Paragraph>
              Files are organized in <Code>SomeFile</Code> named directories
              with an <Code>index.js</Code> for the entry point. This allows
              them to have sub-components or utilities that are referenced with
              a relative path for easy extraction into an npm published package.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Style guide`,
        component: (
          <div>
            <Paragraph>
              The project uses{' '}
              <Anchor href="https://github.com/trevordmiller/trevordmiller-website/blob/master/utils/theme/index.js">
                a module for a style guide
              </Anchor>. This is the source for shared styles like colors,
              spacing (padding/margin), font sizes, etc. The color scheme is{' '}
              <Anchor href="/projects/nova">Nova</Anchor>, which I use across my
              projects and tools - so the style guide module simply maps colors
              to the <Code>nova-colors</Code> npm package values.
            </Paragraph>
            <Image
              src="/static/nova-colors.jpg"
              description="Screenshot of nova color tiles"
            />
            <Image
              src="/static/guitar-lessons.jpg"
              description="Screenshot of the guitar lessons fretboard pattern picker"
            />
          </div>
        ),
      },
      {
        title: `Conclusion`,
        component: (
          <div>
            <Paragraph>
              I'm happy with how this has turned out. It seems to be easy to
              maintain and add-to. Let's see how it does going forward :)
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
