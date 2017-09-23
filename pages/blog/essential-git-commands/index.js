import React from 'react'
import { spacing } from '../../../utils/styleGuide'
import Screen from '../../../components/Screen'
import Subscribe from '../../../components/Subscribe'
import Paragraph from '../../../components/Paragraph'
import Image from '../../../components/Image'
import { posts } from '../'

const key = 'essential-git-commands'

export default () =>
  <Screen
    baseRouteTitle="blog"
    mainVisual={posts[key].mainVisual}
    pathname={`https://trevordmiller.com/blog/${key}`}
    title={posts[key].title}
    description={posts[key].description}
    showDescription
    sections={[
      {
        title: 'My Git journey',
        component: (
          <div>
            <Paragraph>
              Git is one of those tools that has made me cry both from tears of
              joy and pain. It is so powerful and awesome. But it can also mess
              you up pretty bad. The biggest mistakes I've made in my career
              have been from one or two careless Git commands.
            </Paragraph>

            <Image
              src="/static/git-sadness.jpg"
              description="Tried Git but broke everything meme"
              quiet
              size="medium"
            />

            <Paragraph>
              So I set out on a journey to really learn and understand Git. It
              took me about six months but I can say I am much more confident in
              using Git now. I don't know everything, but I know enough to do
              what I want to do and get me and my teammates out of tough
              situations.
            </Paragraph>

            <Image
              src="/static/git-confidence.jpg"
              description="Git all the things meme"
              quiet
              size="medium"
            />
          </div>
        ),
      },

      {
        title: 'The critical commands to know and understand',
        component: (
          <div>
            <Paragraph>
              You could spend months digging through the Git documentation and
              loads of tutorials like I did, but I find myself using the same
              small set of commands for most situations. Below are the commands
              I find myself using the majority of the time, with explanations of
              how they work. I made a pretty PDF version of these commands which
              you can download for reference if you'd like.
            </Paragraph>
          </div>
        ),
      },

      {
        title: 'Cheatsheet',
        component: (
          <div>
            <Paragraph>
              I made a PDF as a cheatsheet for the most common Git commands
              which you can download.
            </Paragraph>

            <div
              style={{
                marginTop: spacing.large,
              }}
            >
              <Subscribe
                download={{
                  key: 'essential-git-commands',
                  title: 'Essential Git commands PDF',
                }}
              />
            </div>

            <Paragraph>
              Pro tip: print it out and tape it up by your toilet for maximum
              learning potential.
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
