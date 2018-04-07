import React from 'react'
import ScreenWithBlogPost from '../../../components/ScreenWithBlogPost'
import Paragraph from '../../../components/Paragraph'
import Image from '../../../components/Image'
import List from '../../../components/List'
import Anchor from '../../../components/Anchor'

export default () => (
  <ScreenWithBlogPost
    id="windows-on-mac"
    sections={[
      {
        title: `Why Boot Camp?`,
        component: (
          <div>
            <Paragraph>
              In this post, we'll go over how to run Windows on Mac using Boot
              Camp. You might want to do this so you can run Windows-only
              software, to test apps or websites in Windows etc. Although there
              are many options for running Windows on Mac, I recommend Boot Camp
              because:
            </Paragraph>

            <List
              items={[
                `it's the officially supported option`,
                `it's free`,
                `it's legal`,
                `it's native rather than an emulator, so it has fast performance as if you were running a standalone Windows machine`,
              ]}
            />
          </div>
        ),
      },

      {
        title: 'Prep',
        component: (
          <div>
            <Paragraph>
              Back up your Mac, connect to the fastest internet you can, and
              plug in your power cable.
            </Paragraph>
          </div>
        ),
      },

      {
        title: 'Disk image',
        component: (
          <div>
            <Paragraph>
              Download an official disk image (ISO) from{' '}
              <Anchor href="https://www.microsoft.com/en-us/software-download/windows10ISO">
                the microsoft.com downloads
              </Anchor>. Choose your edition and type. For modern macbooks that
              will be Windows 10, 64-bit.
            </Paragraph>

            <Image
              src="/static/windows-iso-download.png"
              description="Windows ISO download screenshot"
            />
          </div>
        ),
      },

      {
        title: 'Boot Camp Assistant',
        component: (
          <div>
            <Paragraph>
              Now you can create a partition on your Mac for Windows. Open the
              "Boot Camp Assistant" app. Select the ISO file you downloaded.
              Specify a partition size; you can't resize this later without
              re-partitioning, so choose wisely (for me, I have a 500GB Macbook
              Pro, so I gave my Windows partition 150GB).
            </Paragraph>

            <Image
              src="/static/boot-camp-assistant.jpg"
              description="Mac Boot Camp Assistant screenshot"
            />

            <Paragraph>
              Boot Camp Assistant creates a Windows partition named BOOTCAMP,
              restarts your Mac, then opens the Windows installer. From here you
              can go through the Windows installation as you would on any normal
              Windows machine (which is what the partition is - a real Windows
              Machine running on Mac hardware). Once your installation is
              complete, you can use Windows as you would any other Windows
              machine (download software you want to use, change your settings
              etc.)
            </Paragraph>
          </div>
        ),
      },

      {
        title: 'Switching between Windows and Mac',
        component: (
          <div>
            <Paragraph>
              To switch between Windows and Mac, choose "Restart" from either
              operating system's menu. As your computer is restarting, hold down
              the "Option" key until the partion selector screen shows up. You
              can then choose to boot with Windows or Mac.
            </Paragraph>

            <Image
              src="/static/boot-camp-restart-select.jpg"
              description="Mac Boot Camp operating system select on restart"
            />
          </div>
        ),
      },

      {
        title: 'Startup disc',
        component: (
          <div>
            <Paragraph>
              When you restart your computer and don't hold down "Option", by
              default it will go back to the operating system it was in last. If
              you want to boot with Mac by default, select Mac from your
              "Startup Disc" section of the "System Preferences" app.
            </Paragraph>

            <Image
              src="/static/boot-camp-startup-disc.png"
              description="Mac startup disc"
            />
          </div>
        ),
      },
    ]}
  />
)
