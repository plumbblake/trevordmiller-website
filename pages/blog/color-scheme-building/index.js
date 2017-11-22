import React from 'react'
import ScreenWithBlogPost from '../../../components/ScreenWithBlogPost'
import Paragraph from '../../../components/Paragraph'
import Image from '../../../components/Image'
import Anchor from '../../../components/Anchor'
import Code from '../../../components/Code'
import List from '../../../components/List'

export default () =>
  <ScreenWithBlogPost
    id="color-scheme-building"
    sections={[
      {
        title: `Which color scheme?`,
        component: (
          <div>
            <Paragraph>
              This post is about how the {' '}
              <Anchor href="/projects/nova">
                Nova - A color scheme for modern web development
              </Anchor>{' '}
              color scheme was built.{' '}
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Project goals`,
        component: (
          <div>
            <Paragraph>I had a set of goals for the project</Paragraph>
            <Image
              src="/static/nova-characteristics.png"
              description={`Nova color scheme goals`}
            />
            <Paragraph>
              I especially wanted each color to have a dedicated meaning so that
              the color scheme was functional
            </Paragraph>
            <Image
              src="/static/nova-color-meanings.png"
              description={`Nova color scheme color meanings`}
            />
          </div>
        ),
      },
      {
        title: `Project implementation`,
        component: (
          <div>
            <Paragraph>
              I wanted the project to be easy to maintain, so I decided to
              create a source module called{' '}
              <Anchor href="https://github.com/trevordmiller/nova-colors">
                nova-colors
              </Anchor>{' '}
              that could contain all of the color values (organized by color
              meaning), and then use this module in the repo for each editor and
              tool so that they could all be updated from the same source. I did
              this for editors (Vim, Atom), terminal emulators (Hyper, iTerm),
              and other tools (Git, tmux). Here is an example of{' '}
              <Anchor href="https://github.com/trevordmiller/nova-vim/blob/master/src/index.js">
                the Nova Vim plugin
              </Anchor>; you can see how the <Code>src/</Code> directory
              contains the vim-specific wire-up while using the{' '}
              <Code>nova-colors</Code> package for color values, and then this
              gets compiled.
            </Paragraph>
            <Paragraph>
              The nice thing about having <Code>nova-colors</Code> as its own
              package is it can be used anywhere; for example,{' '}
              <Anchor href="https://github.com/trevordmiller/trevordmiller-website/blob/master/utils/theme/index.js#L1-L10">
                I'm using it on my own website as part of the style guide module
              </Anchor>.
            </Paragraph>
          </div>
        ),
      },
      {
        title: `Thank you`,
        component: (
          <div>
            <Paragraph>
              I'd like to thank the following wonderful people for their help
              with Nova
            </Paragraph>
            <List
              items={[
                <span>
                  <Anchor href="http://merrickchristensen.com/">
                    Merrick Christensen
                  </Anchor>{' '}
                  for his help building the initial Nova plugins
                </span>,
                <span>
                  <Anchor href="https://twitter.com/AC_Design">
                    Adam Christiansen
                  </Anchor>{' '}
                  for designing the initial color palette
                </span>,
                <span>
                  <Anchor href="http://alexlafroscia.com/">
                    Alex LaFroscia
                  </Anchor>{' '}
                  for contributions through pull requests to the project
                </span>,
              ]}
            />
          </div>
        ),
      },
      {
        title: `Conclusion`,
        component: (
          <div>
            <Paragraph>
              I would recommend using a shared location for source values for
              things like style guides and color schemes, with a compile step -
              it makes using and maintaining them a lot easier ;)
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
