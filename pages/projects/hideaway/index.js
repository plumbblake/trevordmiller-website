import React from 'react'
import PageWithProject from '../../../components/PageWithProject'
import Video from '../../../components/Video'
import Paragraph from '../../../components/Paragraph'
import Anchor from '../../../components/Anchor'
import Button from '../../../components/Button'
import Label from '../../../components/Label'

const Hideaway = () => (
  <PageWithProject
    id="hideaway"
    sections={[
      {
        component: (
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Anchor
              href={'https://github.com/trevordmiller/hideaway/releases/latest'}
            >
              <Button>Download</Button>
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
    ]}
  />
)

export default Hideaway
