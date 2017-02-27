import React from 'react'
import Screen from '../../../components/Screen'
import Paragraph from '../../../components/Paragraph'
import Image from '../../../components/Image'
import Video from '../../../components/Video'
import {posts} from '../'

const key = 'minimal-office'

export default () => (
  <Screen
    title={posts[key].title}
    description={posts[key].description}
    showDescription
    sections={[
      {
        title: `Video walkthrough`,
        component: (
          <div>
            <Video src='/static/minimal-office.mp4' />
          </div>
        ),
      },
      {
        title: `Cable management`,
        component: (
          <div>
            <Paragraph>
              I'm a bit of a neat freak, so I decided to go all out with cable management. Almost everything is mounted below the desk.
            </Paragraph>
            <Image
              src='/static/minimal-office-under-desk.jpg'
              description='Cable management below the desk'
            />
            <Paragraph>
              The only visible cables are a power cable from the wall (which powers everything) and my headphone cable. The power cable goes up the left desk leg into a box I mounted under the desk which contains a surge protector with plenty of outlets, and a USB hub.
            </Paragraph>
            <Image
              src='/static/minimal-office-brain-box.jpg'
              description='Cable management box with USB hub'
            />
            <Paragraph>
              The USB hub has all of my computer inputs; things like my keyboard, monitor, an external hard drive for backups, a DAC, etc. I tried to build it in a modular way so I can still swap out cables and devices occasionally without taking everything apart.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Laptop drawer`,
        component: (
          <div>
            <Paragraph>
              My laptop is placed in a keyboard tray mounted under the desk so I can easily plug it in to the USB hub and remove it to use outside my office.
            </Paragraph>
            <Image
              src='/static/minimal-office-laptop-drawer.jpg'
              description='Laptop drawer under desk'
            />
          </div>
        ),
      },
      {
        title: `Other inputs`,
        component: (
          <div>
            <Paragraph>
              On the front lip of the desk I have some input devices. First there is the included desk memory controls for sitting/standing. Then I have a USB female end to connect any temporary USB devices like my midi controller. Then I have an audio interface so I can plug in my mic and guitar for screencasting and recording music.
            </Paragraph>
            <Image
              src='/static/minimal-office-other-inputs.jpg'
              description='Audio interface and standing desk memory buttons'
            />
          </div>
        ),
      },
      {
        title: `Above the desk`,
        component: (
          <div>
            <Paragraph>
              Above the desk I have mounted a 4k monitor, my headphones on a headphone stand, my mechanical keyboard, my mouse, and a small fan.
            </Paragraph>
            <Image
              src='/static/minimal-office-first-person.jpg'
              description='Above my clean minimal office desk'
            />
            <Image
              src='/static/minimal-office-behind-monitor.jpg'
              description='Behind the mounted monitor'
            />
          </div>
        ),
      },
      {
        title: `Standing desk conversion`,
        component: (
          <div>
            <Paragraph>
              The desk can move up and down with motors in the legs. I usually stand before lunch and then sit after. I’ve been using standing desks for years and enjoy the flexibility and extra movement. It’s fun to dance around a bit while typing ;)
            </Paragraph>
            <Image
              src='/static/minimal-office-sitting.jpg'
              description='Sitting at the standing desk'
            />
            <Image
              src='/static/minimal-office-standing.jpg'
              description='Standing at the standing desk'
            />
          </div>
        ),
      },
      {
        title: `Conclusion`,
        component: (
          <div>
            <Paragraph>
              I'm very happy with the result. I like having everything tidy and minimal where I spend a good chunk of my life. To me it's worth "sharpening the saw" occasionally like this with things I use a lot.
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
)
