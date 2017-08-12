import React from 'react'
import Screen from '../../../components/Screen'
import Video from '../../../components/Video'
import Image from '../../../components/Image'
import Paragraph from '../../../components/Paragraph'
import CodeBlock from '../../../components/CodeBlock'
import Code from '../../../components/Code'
import Button from '../../../components/Button'
import Anchor from '../../../components/Anchor'
import { projects } from '../'
import {
  exampleStartScript,
  exampleFinishScript,
} from './utils/exampleCodeStrings'

const key = 'hideaway'

export default () =>
  <Screen
    baseRouteTitle="Projects"
    mainVisual={projects[key].mainVisual}
    pathname={`https://trevordmiller.com/projects/${key}`}
    title="Hideaway"
    description="A Mac app to escape distractions for a set amount of time"
    showDescription
    sections={[
      {
        title: 'Choose length. Hit start. Work in peace.',
        component: (
          <div>
            <Video src="/static/hideaway-example.mp4" autoplay loop muted />

            <Paragraph>
              Hideaway closes all apps and websites, hides your dock, and turns
              on Do Not Disturb for the amount of time you set. When the timer
              is done, it shows your dock and allows notifications again.
            </Paragraph>

            <Anchor href="https://github.com/trevordmiller/hideaway/releases/latest">
              <Button>Download</Button>
            </Anchor>
            <Paragraph>macOS Sierra or later required</Paragraph>
          </div>
        ),
      },

      {
        title: 'Customize',
        component: (
          <div>
            <Paragraph>
              By tapping the cog icon in the top right of Hideaway, you can get
              to the settings. You can add scripts to run on Hideway start
              and/or finish if you'd like to add more functionality.
            </Paragraph>

            <Image
              src="/static/hideaway-settings.png"
              description="Hideaway settings"
            />

            <Paragraph>
              Open apps with <Code>{`open -a '{app name}'`}</Code>. Open
              websites with <Code>{`open '{website}'`}</Code>. Any commands you
              can type in your terminal will work, just put each command on its
              own line.
            </Paragraph>

            <Paragraph>
              Here is an example of a start script that starts playing a
              playlist in Spotify (using the{' '}
              <Anchor href="https://github.com/hnarayanan/shpotify">
                shpotify CLI installed separately
              </Anchor>) and opens up your task list for work in Trello.
            </Paragraph>

            <CodeBlock language="bash">
              {exampleStartScript}
            </CodeBlock>

            <Paragraph>
              Then for the finish script we could stop playing the music and
              open up the apps and websites you need to check throughout the day
              to stay caught up (Slack, email, calendar, text messages etc.).
            </Paragraph>

            <CodeBlock language="bash">
              {exampleFinishScript}
            </CodeBlock>
          </div>
        ),
      },
    ]}
  />
