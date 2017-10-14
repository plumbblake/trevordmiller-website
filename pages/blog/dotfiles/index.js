import React from 'react'
import ScreenWithBlog from '../../../components/ScreenWithBlog'
import Paragraph from '../../../components/Paragraph'
import Anchor from '../../../components/Anchor'
import Button from '../../../components/Button'
import Code from '../../../components/Code'
import Image from '../../../components/Image'
import List from '../../../components/List'

export default () =>
  <ScreenWithBlog
    id="dotfiles"
    sections={[
      {
        title: `What are dotfiles?`,
        component: (
          <div>
            <Paragraph>
              Dotfiles are a file that has a filename prefixed with a dot
              (period) like <Code>.npmrc</Code>, <Code>.gitconfig</Code>, and{' '}
              <Code>.vimrc</Code>. This means they are hidden by default on most
              operating systems. Most of them live in your home directory
              (although projects can have local dotfiles that override global
              settings such as <Code>.gitignore</Code>, <Code>.npmrc</Code>,{' '}
              <Code>.eslintrc.json</Code>, <Code>.travis.yml</Code> etc).
            </Paragraph>

            <Paragraph>
              You can see your global dotfiles by listing the hidden files in
              your home directory (<Code>ls -a ~</Code>). You will most likely
              see a few of them.
            </Paragraph>

            <Image
              src="/static/dotfiles-list.png"
              description="Listing hidden dotfiles in your root directory"
            />
          </div>
        ),
      },

      {
        title: `Where do dotfiles come from?`,
        component: (
          <div>
            <Paragraph>
              Some tools generate dotfiles automatically, others you can add and
              manage yourself. For example, I manage a few dotfiles that are
              critical for my workflow.
            </Paragraph>

            <Image
              src="/static/dotfiles.png"
              description="My managed dotfiles"
            />

            <List
              items={[
                <span>
                  <Code>.snippets</Code> is where I keep my code snippets.
                </span>,
                <span>
                  <Code>.bash_profile</Code> is run when my shell (Bash) starts.
                  This is where I set up my <Code>$PATH</Code>, shell prompt,
                  Unix command aliases, etc.
                </span>,
                <span>
                  <Code>.gitconfig</Code> is used by Git for global
                  configuration. This includes my default Git options, logging
                  colors, etc.
                </span>,
                <span>
                  <Code>.tmux.conf</Code> is used by tmux (a window manager for
                  the terminal) to set up keyboard shortcuts, styles etc..
                </span>,
                <span>
                  <Code>.vimrc</Code> is used by Vim (a terminal editor) to
                  configure editor settings, plugins, styles etc.
                </span>,
              ]}
            />
          </div>
        ),
      },

      {
        title: `Backing up dotfiles with Git`,
        component: (
          <div>
            <Paragraph>
              The beauty of dotfiles is it is how you like to use your tools
              organized in one place! You can move them to any computer you work
              on to feel right at home. I keep my dotfiles backed up in a Git
              repo so I don't loose them and so they can be easily cloned and
              used on any machine I am on.
            </Paragraph>

            <Anchor href="https://github.com/trevordmiller/dotfiles">
              <Button>View my dotfiles repo</Button>
            </Anchor>

            <Paragraph>
              Most tools that use dotfiles require their dotfiles to exist in
              your home directory, so once you organize them in a Git repo like
              this, you need to symlink (symbolic link) them to your home
              directory. The <Code>index</Code> script at the root of my
              dotfiles repo is run to do this automatically for any amount of
              dotfiles in the <Code>files</Code> directory.
            </Paragraph>
          </div>
        ),
      },

      {
        title: `Conclusion`,
        component: (
          <div>
            <Paragraph>
              Dotfiles are a great way to organize your settings and are the
              default option for many tools. I'd recommend organizing yours in a
              Git repo like this so that you can keep track of and duplicate
              your settings anywhere.
            </Paragraph>
          </div>
        ),
      },
    ]}
  />
