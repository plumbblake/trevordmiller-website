import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import Paragraph from '../../../components/Paragraph'
import List from '../../../components/List'
import Anchor from '../../../components/Anchor'
import Image from '../../../components/Image'
import Video from '../../../components/Video'
import Code from '../../../components/Code'
import Button from '../../../components/Button'

const RaspberryPiButton = () => (
  <PageWithBlogPost
    id="raspberry-pi-button"
    sections={[
      {
        title: `Background`,
        component: (
          <div>
            <Paragraph>
              I wanted to create a physical button that my dog could hit with
              his paw or nose to send me a text message when he needs to go
              outside to the bathroom. I decided to use a Raspberry Pi (a small,
              cheap Linux computer), a momentary switch (a physical push
              button), and Node to program the text messaging logic when the
              button is pressed.
            </Paragraph>
          </div>
        ),
      },

      {
        title: `The final product`,
        component: (
          <div>
            <Paragraph>
              It works! You press the button and it sends me a text message from
              my dog saying "I need to go to the bathroom!". It would be cool to
              additionally 3D print a case and button surface area extending
              disc, but the functional pieces are here.
            </Paragraph>
            <Video src="/static/dog-bathroom-button-final.mp4" />
          </div>
        ),
      },

      {
        title: `Parts`,
        component: (
          <div>
            <List
              items={[
                <span key="pi3">Raspberry Pi 3</span>,
                <span key="sd">8+ GB micro SD card pre-loaded with NOOBS</span>,
                <span key="case">Raspberry Pi 3 case</span>,
                <span key="power">2.5A 5V micro USB power supply</span>,
                <span key="button">
                  Momentary button with built-in resistor and GPIO wires
                </span>,
                <span key="peripherals">
                  An HDMI cable, USB keyboard, and USB mouse if you don't
                  already have them
                </span>,
              ]}
            />
            <Paragraph>
              The{' '}
              <Anchor href="https://www.amazon.com/gp/product/B01C6Q2GSY">
                CanaKit "Complete Starter Kit"
              </Anchor>{' '}
              and{' '}
              <Anchor href="https://www.amazon.com/gp/product/B0170B75EU">
                Raspberry Squid Button Twin Pack
              </Anchor>{' '}
              are what I purchased to get these items.
            </Paragraph>
            <Paragraph>
              You could probably use cheaper items instead, but I chose these
              items to simplify the setup (skip installing Linux, soldering, and
              wiring up circuits and so I could use Node and npm in a Linux
              environment which I am comfortable with).
            </Paragraph>
          </div>
        ),
      },

      {
        title: `Case`,
        component: (
          <div>
            <Paragraph>Connect the case onto the Raspberry Pi.</Paragraph>
            <Video src="/static/dog-bathroom-button-case.mp4" />
          </div>
        ),
      },

      {
        title: `SD card`,
        component: (
          <div>
            <Paragraph>
              Slide the micro SD card into the slot on the bottom of the
              Raspberry Pi. The SD card should have NOOBS on it which is the
              official Raspberry Pi operating system installer.
            </Paragraph>
            <Video src="/static/dog-bathroom-button-sd.mp4" />
          </div>
        ),
      },

      {
        title: `Cables`,
        component: (
          <div>
            <Paragraph>
              Connect one end of the HDMI cable to the HDMI input on the
              Raspberry Pi and the other end to a monitor or TV. Connect a USB
              keyboard and mouse to the USB ports on the Raspberry Pi. Connect
              the power adapter to the Raspberry Pi - this will boot the device.
            </Paragraph>
            <Image
              src="/static/dog-bathroom-button-cables.png"
              description="Raspberry Pi cables"
            />
          </div>
        ),
      },

      {
        title: `Operating System setup`,
        component: (
          <div>
            <Paragraph>
              The first time you connect power to the Raspberry Pi, you should
              see the NOOBS install screen. Select Raspbian and then "Install".
            </Paragraph>
            <Image
              src="/static/dog-bathroom-button-noobs.png"
              description="NOOBS Raspbian installer"
            />
            <Paragraph>
              Once NOOBS has installed the operating system (this will take a
              few minutes), a reboot will occur and Raspbian should start by
              default going forward. Raspbian is the official operating system
              for Raspberry Pis and is a fork of Debian (a Linux distribution).
              It has all the basics you would expect from a Linux computer
              (browser, terminal, file system).
            </Paragraph>
            <Image
              src="/static/dog-bathroom-button-raspbian.png"
              description="Raspbian desktop"
            />
          </div>
        ),
      },

      {
        title: `Connect Wi-Fi`,
        component: (
          <div>
            <Paragraph>
              To connect Wi-Fi, tap the network icon in the top menu bar and
              then the network to connect to. A popup will show to enter the
              network's password.
            </Paragraph>
            <Image
              src="/static/dog-bathroom-button-wifi.png"
              description="Raspbian Wi-Fi setup"
            />
          </div>
        ),
      },

      {
        title: `Upgrade Node + npm`,
        component: (
          <div>
            <Paragraph>
              Open the terminal app. Figure out what version of Node you want to
              use and then run the commands below with the version in place of
              X.Y.Z:
            </Paragraph>
            <List
              items={[
                <span key="download">
                  Download the latest with{' '}
                  <Code>
                    wget
                    https://nodejs.org/dist/vX.Y.Z/node-vX.Y.Z-linux-armv7l.tar.gz
                  </Code>
                </span>,
                <span key="unpack">
                  Unpack the download with{' '}
                  <Code>tar -xvf node-vX.Y.Z-linux-armv7l.tar.gz</Code>
                </span>,
                <span key="cd">
                  Go into the unpacked download with{' '}
                  <Code>cd node-vX.Y.Z-linux-armv7l</Code>
                </span>,
                <span key="copy">
                  Copy the binaries with <Code>sudo cp -R * /usr/local/</Code>
                </span>,
              ]}
            />
          </div>
        ),
      },

      {
        title: `Button`,
        component: (
          <div>
            <Paragraph>
              Connect the button's wires to pin numbers five (GPIO 3) and six
              (ground) on the Raspberry Pi GPIO header.
            </Paragraph>
            <Video src="/static/dog-bathroom-button-gpio.mp4" />
          </div>
        ),
      },

      {
        title: `Set up the Node script`,
        component: (
          <div>
            <Paragraph>
              You will need a code editor. I use Vim which can be installed with
              (<Code>sudo apt-get update && sudo apt-get install vim</Code>);
              there are other terminal-based editors or some editors inside the
              Raspbian menu you can use as well. Next you will need to create
              your project code; you can view mine in the{' '}
              <Anchor href="https://github.com/trevordmiller/dog-bathroom-button">
                dog-bathroom-button
              </Anchor>{' '}
              repo. This uses a few dependencies which can be installed with{' '}
              <Code>npm install</Code>. Then, running <Code>npm start</Code>{' '}
              will start the Node process which listens for the button press (on
              the GPIO 3 pin) and sends a text message using Twilio. It also has
              a debounce wrapper so that the button can only fire a text message
              once every 10 seconds, even if it is pressed more than once in
              that time period (for the over-eager dog).
            </Paragraph>
            <Anchor href="https://github.com/trevordmiller/dog-bathroom-button">
              <Button>View the Code</Button>
            </Anchor>
          </div>
        ),
      },

      {
        title: `Run the Node script automatically on boot`,
        component: (
          <div>
            <Paragraph>
              You can have the script run automatically on boot by adding{' '}
              <Code>{`cd {project} && npm start &`}</Code> to the{' '}
              <Code>/etc/rc.local</Code> file. This file is run when Raspian
              boots, and adding the <Code>&</Code> to the end runs the server as
              a background process. Once this is done, you can shutdown the
              device, unplug everything, and then re-plug in only the power
              adapter and the program will run on its own by any outlet in your
              home.
            </Paragraph>
          </div>
        ),
      },

      {
        title: `Phone contact`,
        component: (
          <div>
            <Paragraph>
              I set up a phone contact for my dog with his picture to make the
              texts more clear. I also set up "Emergency Bypass" for the contact
              (a feature on iOS that lets the contact through even if your phone
              is on silent) to ensure I always hear when my dog needs to go out.
            </Paragraph>
            <Image
              src="/static/dog-bathroom-button-contact.png"
              description="Dog bathroom button contact"
            />
          </div>
        ),
      },

      {
        title: `Safe shut down`,
        component: (
          <div>
            <Paragraph>
              When working on a Raspberry Pi, it should always be shut down
              safely before power is removed to avoid corrupting the SD card.
              The easiest way to do this is tapping "Shutdown" from the "Menu"
              button. When you want to use it again, just plug the power adapter
              in and it will take you to the Raspbian desktop again by default.
            </Paragraph>
          </div>
        ),
      },

      {
        title: `Conclusion`,
        component: (
          <div>
            <Paragraph>
              This project was a lot of fun. Although I'm not sure how practical
              it will be - if my dog can even use it - it was a great learning
              experience. Embedded systems are powerful and with modern
              technology can be controlled with languages like Node that are
              more traditionally seen in use on the web. Go forth and play with
              hardware!
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
)

export default RaspberryPiButton
