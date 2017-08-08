import React from 'react'
import Screen from '../../../components/Screen'
import Paragraph from '../../../components/Paragraph'
import Image from '../../../components/Image'
import { projects } from '../'

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
        title: `???`,
        component: (
          <div>
            <Paragraph>???</Paragraph>

            <Image src="/static/???.png" description="???" />
          </div>
        ),
      },
    ]}
  />
