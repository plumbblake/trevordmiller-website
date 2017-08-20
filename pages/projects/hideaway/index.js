import React from 'react'
import fetch from 'node-fetch'
import Screen from '../../../components/Screen'
import Video from '../../../components/Video'
import Image from '../../../components/Image'
import Paragraph from '../../../components/Paragraph'
import CodeBlock from '../../../components/CodeBlock'
import Code from '../../../components/Code'
import Anchor from '../../../components/Anchor'
import Button from '../../../components/Button'
import Label from '../../../components/Label'
import { projects } from '../'
import {
  exampleStartScript,
  exampleFinishScript,
} from './utils/exampleCodeStrings'

const key = 'hideaway'

const Hideaway = ({ latestDownloadUrl }) =>
  <Screen
    baseRouteTitle="projects"
    mainVisual={projects[key].mainVisual}
    showMainVisual
    pathname={`https://trevordmiller.com/projects/${key}`}
    title="Hideaway"
    description="A Mac app to escape distractions for a set amount of time"
    showDescription
    sections={[
      {
        component: (
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Anchor
              href={
                latestDownloadUrl ||
                'https://github.com/trevordmiller/hideaway/releases/latest'
              }
            >
              <Button big>Download</Button>
            </Anchor>
            <Label>macOS Sierra or later required</Label>
          </div>
        ),
      },

      {
        title: 'Choose how long. Hit start. Work in peace.',
        component: (
          <div>
            <Video
              src="/static/hideaway-example.mp4"
              autoplay
              loop
              muted
              controls={false}
            />

            <Paragraph>
              Working at a computer brings regular distruptions of calendar
              events, emails, texts, etc. Hideaway is a mac app that helps you
              get rid of these distractions for a set amount of time so you can
              focus. When you hit "Start Hideaway", it closes all apps +
              websites, hides your dock, and turns on Do Not Disturb for the
              amount of time you have set. When the timer is done, it shows your
              dock and allows notifications again.
            </Paragraph>
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
              Then for the finish script, you could stop playing the music and
              open up the apps and websites you need to check throughout the day
              to stay caught up (Slack, email, calendar, text messages etc.).
            </Paragraph>

            <CodeBlock language="bash">
              {exampleFinishScript}
            </CodeBlock>

            <Paragraph>
              This gives you dedicated focus time during Hideaway sessions, but
              you'll still have all the updates waiting for you when the timer
              is done.
            </Paragraph>
          </div>
        ),
      },
    ]}
  />

Hideaway.getInitialProps = async () => {
  const res = await fetch(
    'https://api.github.com/repos/trevordmiller/hideaway/releases/latest'
  )
  const json = await res.json()
  return {
    latestDownloadUrl: json.assets[0] && json.assets[0].browser_download_url,
  }
}

export default Hideaway
