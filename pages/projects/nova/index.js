import React from 'react'
import {
  colorValues,
  spacing,
  fontSizes,
  opacities,
  borderRadii,
  borderSizes,
  syntaxGroups,
  uiGroups,
} from '../../../utils/styleGuide'
import Screen from '../../../components/Screen'
import Icon from '../../../components/Icon'
import Anchor from '../../../components/Anchor'
import Heading from '../../../components/Heading'
import List from '../../../components/List'
import Image from '../../../components/Image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { projects } from '../'

const key = 'nova'

const contributors = [
  {
    handle: '@AC_Design',
    url: 'https://twitter.com/AC_Design',
  },
  {
    handle: '@iammerrick',
    url: 'http://merrickchristensen.com/',
  },
  {
    handle: '@trevordmiller',
    url: '/',
  },
]

const colorMeanings = [
  [
    {
      value: syntaxGroups.constant,
      meaning: 'Constant',
    },
    {
      value: syntaxGroups.identifier,
      meaning: 'Identifier',
    },
    {
      value: syntaxGroups.global,
      meaning: 'Global',
    },
    {
      value: syntaxGroups.emphasis,
      meaning: 'Emphasis',
    },
    {
      value: syntaxGroups.special,
      meaning: 'Special',
    },
    {
      value: syntaxGroups.statement,
      meaning: 'Statement',
    },
    {
      value: syntaxGroups.type,
      meaning: 'Type',
    },
    {
      value: syntaxGroups.trivial,
      meaning: 'Trivial',
    },
  ],
]

const characteristics = [
  {
    title: 'Intentional',
    description: 'Colors have a dedicated meaning',
  },
  {
    title: 'Current',
    description:
      "First-class syntax highlighting for today's web development languages",
  },
  {
    title: 'Soft',
    description: 'Flat pastel colors that are easy on the eyes',
  },
  {
    title: 'Balanced',
    description: 'Designed by a designer who knows color theory',
  },
  {
    title: 'Maintainable',
    description: 'Single-source-of-truth for color values and documentation',
  },
  {
    title: 'Free',
    description: '100% open source',
  },
]

const plugins = [
  {
    title: 'Git',
    icon: 'git',
    screenshot:
      'https://github.com/trevordmiller/nova-git/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Install a Nova plugin for your terminal',
      'Use ANSI color variables in your ".gitconfig"',
      'For Nova color meanings, see the example ".gitconfig"',
    ],
    notes: [
      "You'll need a version of Git that supports the latest color options (git 2.10)",
    ],
    links: [
      {
        title: 'Example ".gitconfig"',
        url:
          'https://github.com/trevordmiller/nova-git/blob/master/assets/.gitconfig',
      },
    ],
  },

  {
    title: 'tmux',
    icon: 'tmux',
    screenshot:
      'https://github.com/trevordmiller/nova-tmux/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Install a Nova plugin for your terminal',
      'Use ANSI color variables in your ".tmux.conf"',
      'For Nova color meanings, see the example ".tmux.conf"',
    ],
    notes: [
      "You'll need a version of tmux that supports True Color (tmux 2.2+)",
    ],
    links: [
      {
        title: 'Example ".tmux.conf"',
        url:
          'https://github.com/trevordmiller/nova-tmux/blob/master/assets/.tmux.conf',
      },
    ],
  },

  {
    title: 'Vim',
    icon: 'vim',
    screenshot:
      'https://github.com/trevordmiller/nova-vim/blob/master/assets/screenshot.png?raw=true',
    steps: [
      'Install "trevordmiller/nova-vim" with your Vim plugin manager',
      'Add "colorscheme nova" to your ".vimrc" (after any other plugins or rules)',
      'Restart Vim',
    ],
    notes: [
      "You'll need True Color support (latest Vim, Neovim, or GUI Vim)",
      'For terminal Vim use, your terminal will also need True Color support',
      'Using the Nova Hyper or iTerm plugin is recommended',
      'If you use "vim-airline", it works automatically',
      'Install "pangloss/vim-javascript", for full JS colors',
      'Install "othree/html5.vim" for full HTML colors',
      'Install "hail2u/vim-css3-syntax" for full CSS colors',
      'Install "mxw/vim-jsx" for full React colors',
      'Install "HerringtonDarkholme/yats.vim" for full TypeScript colors',
    ],
    links: [
      {
        title: 'Example ".vimrc"',
        url:
          'https://github.com/trevordmiller/nova-vim/blob/master/assets/.vimrc',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/trevordmiller/nova-vim/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-vim',
      },
    ],
  },

  {
    title: 'iTerm',
    icon: 'iterm',
    screenshot:
      'https://github.com/trevordmiller/nova-iterm/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Download "nova.itermcolors"',
      'In iTerm, open your preferences',
      'Tap on "Profiles" > "Colors" > "Color Presets" > "Import"',
      'Select the "nova.itermcolors" you downloaded',
    ],
    links: [
      {
        title: 'nova.itermcolors',
        url:
          'https://raw.githubusercontent.com/trevordmiller/nova-iterm/master/build/nova.itermcolors',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/trevordmiller/nova-iterm/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-iterm',
      },
    ],
  },

  {
    title: 'Hyper',
    icon: 'hyper',
    screenshot:
      'https://github.com/trevordmiller/nova-hyperterm/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Add "nova-hyperterm" to the "plugins" array in your "~/.hyper.js"',
      'Restart Hyper',
    ],
    links: [
      {
        title: 'Example ".hyper.js"',
        url:
          'https://github.com/trevordmiller/nova-hyperterm/blob/master/assets/.hyperterm.js',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/trevordmiller/nova-hyperterm/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-hyperterm',
      },
    ],
  },

  {
    title: 'GNOME Terminal',
    icon: 'gnomeTerminal',
    screenshot:
      'https://github.com/agarrharr/nova-gnome-terminal/blob/master/assets/screenshot.png?raw=true',
    steps: ['Download the install.sh file', 'Run "install.sh Default"'],
    links: [
      {
        title: 'install.sh',
        url:
          'https://github.com/agarrharr/nova-gnome-terminal/blob/master/build/install.sh',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/agarrharr/nova-gnome-terminal/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/agarrharr/nova-gnome-terminal',
      },
    ],
  },

  {
    title: 'Atom',
    icon: 'atom',
    screenshot:
      'https://github.com/trevordmiller/nova-atom-syntax/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'In Atom, open your settings',
      'Tap on the "Install" pane',
      'Tap on "Themes"',
      'Search for "Nova"',
      'Tap the "Install" button for both "nova-atom-ui" and "nova-atom-syntax"',
      'Tap on the "Themes" pane',
      'Select "Nova Atom" for both the "UI Theme" and "Syntax Theme"',
    ],
    notes: [
      'Install "language-babel" for full JS colors',
      'Install "language-babel" for full JSX colors',
    ],
    links: [
      {
        title: 'Contributing instructions for the UI plugin',
        url:
          'https://github.com/trevordmiller/nova-atom-ui/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Contributing instructions for the syntax plugin',
        url:
          'https://github.com/trevordmiller/nova-atom-syntax/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code for the UI plugin',
        url: 'https://github.com/trevordmiller/nova-atom-ui',
      },
      {
        title: 'Source code for the syntax plugin',
        url: 'https://github.com/trevordmiller/nova-atom-syntax',
      },
    ],
  },

  {
    title: 'npm',
    icon: 'npm',
    steps: ['npm install -S nova-colors', "import {group} from 'nova-colors'"],
    notes: [
      'The package provides the Nova color values mapped by group type (syntax, UI, version control etc.)',
    ],
    links: [
      {
        title: 'API',
        url:
          'https://github.com/trevordmiller/nova-colors/blob/master/src/index.js',
      },
      {
        title: 'Example plugin using nova-colors directly',
        url: 'https://github.com/trevordmiller/nova-hyperterm',
      },
      {
        title: 'Example plugin using nova-colors with a build step',
        url: 'https://github.com/trevordmiller/nova-vim',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/trevordmiller/nova-colors/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-colors',
      },
    ],
  },
]

const faq = [
  {
    question: `Where is editor/plugin {x}?`,
    answer: `If you don't see it in the list, it doesn't exist yet! The Nova admins only maintain the Vim, Atom, Hyper, and iTerm plugins, but the community has built or is building others.`,
  },
  {
    question: `Is there an {x} version?`,
    answer: `Nope. The Nova admins only support one version. Feel free to fork, override, or use another theme if you don't like it.`,
  },
  {
    question: `Can you change {x}?`,
    answer: `If it is a bug or syntax not following the Nova color meanings, yes! Please submit an issue on the related GitHub repo. If it is personal preference, sorry we can't accomodate everyone. Feel free to fork, override, or use another theme.`,
  },
  {
    question: `Can I contribute?`,
    answer: `Yes! We would love to have your help. Just follow the "CONTRIBUTING.md" in the related repo.`,
  },
]

const tabBorder = `${borderSizes.medium}px solid ${uiGroups.backgroundShade}`

class Plugins extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
    }
  }

  handleTabClick(clickedTabIndex) {
    this.setState({
      activeTab: clickedTabIndex,
    })
  }

  render() {
    return (
      <Tabs>
        <TabList
          style={{
            margin: 0,
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            overflowX: 'scroll',
            borderTop: tabBorder,
            borderRight: tabBorder,
            borderLeft: tabBorder,
            borderTopRightRadius: borderRadii.medium,
            borderTopLeftRadius: borderRadii.medium,
          }}
        >
          {plugins.map((plugin, index) =>
            <Tab
              key={index}
              onClick={this.handleTabClick.bind(this, index)}
              style={{
                flex: '1',
                background:
                  index === this.state.activeTab
                    ? uiGroups.background
                    : uiGroups.backgroundShade,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: spacing.small,
                lineHeight: 1,
                cursor: 'pointer',
              }}
            >
              <div>
                <Icon
                  type={plugin.icon}
                  size={fontSizes.large}
                  fill={
                    index === this.state.activeTab
                      ? uiGroups.userCurrentState
                      : uiGroups.gray3
                  }
                />
              </div>

              <div
                style={{
                  fontSize: fontSizes.small,
                  marginTop: spacing.xxsmall,
                  textAlign: 'center',
                  color:
                    index === this.state.activeTab
                      ? uiGroups.userCurrentState
                      : uiGroups.gray3,
                }}
              >
                {plugin.title}
              </div>
            </Tab>
          )}
        </TabList>
        {plugins.map((plugin, index) =>
          <TabPanel
            key={index}
            style={
              index === this.state.activeTab
                ? {
                    borderRight: tabBorder,
                    borderBottom: tabBorder,
                    borderLeft: tabBorder,
                    borderBottomRightRadius: borderRadii.medium,
                    borderBottomLeftRadius: borderRadii.medium,
                    paddingTop: spacing.large,
                    paddingBottom: spacing.large,
                    paddingRight: spacing.medium,
                    paddingLeft: spacing.medium,
                  }
                : {}
            }
          >
            <Heading level={4}>
              {plugin.title}
            </Heading>
            <div
              style={{
                marginTop: spacing.large,
              }}
            >
              {plugin.screenshot
                ? <div
                    style={{
                      marginBottom: spacing.medium,
                    }}
                  >
                    <Image
                      src={plugin.screenshot}
                      description={`Screenshot of Nova plugin for ${plugin.title}`}
                      quiet={true}
                    />
                  </div>
                : null}
              {plugin.steps
                ? <div
                    style={{
                      marginBottom:
                        plugin.notes || plugin.links ? spacing.medium : 0,
                    }}
                  >
                    <Heading level={3}>Instructions</Heading>
                    <div
                      style={{
                        paddingBottom: spacing.medium,
                      }}
                    >
                      <List items={plugin.steps} type="number" />
                    </div>
                  </div>
                : null}
              {plugin.notes
                ? <div
                    style={{
                      marginBottom: plugin.links ? spacing.medium : 0,
                    }}
                  >
                    <Heading level={3}>Notes</Heading>
                    <div
                      style={{
                        paddingBottom: spacing.medium,
                      }}
                    >
                      <List items={plugin.notes} />
                    </div>
                  </div>
                : null}
              {plugin.links
                ? <div>
                    <Heading level={3}>Links</Heading>
                    <List
                      items={plugin.links.map(link =>
                        <Anchor href={link.url}>
                          {link.title}
                        </Anchor>
                      )}
                      type="link"
                    />
                  </div>
                : null}
            </div>
          </TabPanel>
        )}
      </Tabs>
    )
  }
}

export default () =>
  <Screen
    baseRouteTitle="projects"
    mainVisual={projects[key].mainVisual}
    pathname={`https://trevordmiller.com/projects/${key}`}
    title="Nova"
    description="A color scheme for modern web development"
    showDescription
    sections={[
      {
        component: (
          <div
            style={{
              textAlign: 'center',
              fontSize: fontSizes.small,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Built with
              <div
                style={{
                  marginLeft: spacing.xsmall,
                  marginRight: spacing.xsmall,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Icon
                  type="heart"
                  fill={colorValues.colors.red}
                  size={fontSizes.medium}
                />
              </div>
              by
            </div>
            <div
              style={{
                opacity: opacities.subtle,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {contributors.map((contributor, index) =>
                <span
                  key={index}
                  style={{
                    marginRight:
                      index + 1 < contributors.length ? spacing.medium : 0,
                  }}
                >
                  <Anchor href={contributor.url}>
                    {contributor.handle}
                  </Anchor>
                </span>
              )}
            </div>
          </div>
        ),
      },
      {
        component: (
          <div>
            {colorMeanings.map((group, index) =>
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                {group.map((color, index) =>
                  <div
                    key={index}
                    style={{
                      marginRight:
                        index + 1 < group.length ? spacing.medium : 0,
                      marginBottom:
                        index + 1 < group.length ? spacing.large : 0,
                      textAlign: 'center',
                      width: 72,
                    }}
                  >
                    <div
                      style={{
                        marginBottom: spacing.small,
                      }}
                    >
                      <div
                        style={{
                          background: color.value,
                          borderRadius: borderRadii.medium,
                          width: 72,
                          height: 72,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: fontSizes.small,
                      }}
                    >
                      {color.meaning}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ),
      },
      {
        component: (
          <Image
            src="/static/nova-example-code-screenshot.png"
            description={`Nova example code screenshot`}
            quiet
          />
        ),
      },
      {
        title: 'Characteristics',
        component: (
          <div>
            {characteristics.map((characteristic, index) =>
              <div
                key={index}
                style={{
                  marginBottom:
                    index + 1 < characteristics.length ? spacing.large : 0,
                }}
              >
                <Heading level={4}>
                  {characteristic.title}
                </Heading>
                <div>
                  {characteristic.description}
                </div>
              </div>
            )}
          </div>
        ),
      },
      {
        title: 'Plugins',
        component: <Plugins />,
      },
      {
        title: 'Frequently Asked Questions',
        component: (
          <div>
            {faq.map((item, index) =>
              <div
                key={index}
                style={{
                  marginBottom: index + 1 < faq.length ? spacing.large : 0,
                }}
              >
                <Heading level={4}>
                  {item.question}
                </Heading>
                <div>
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ),
      },
    ]}
  />
