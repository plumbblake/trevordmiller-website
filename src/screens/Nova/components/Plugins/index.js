import React from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs'
Tabs.setUseDefaultStyles(false)
import {
  uiGroups,
  spacing,
  borderSizes,
  borderRadii,
} from '../../../../utils/styleGuide'
import Heading from '../../../../components/Heading'
import Icon from '../../../../components/Icon'
import List from '../../../../components/List'
import Anchor from '../../../../components/Anchor'
import Screenshot from '../../../../components/Screenshot'

const tabBorder = `${borderSizes.medium}px solid ${uiGroups.backgroundShade}`;

const plugins = [
  {
    title: 'Vim',
    icon: 'vim',
    screenshot: 'https://github.com/trevordmiller/nova-vim/blob/master/assets/screenshot.png?raw=true',
    steps: [
      'Install "trevordmiller/nova-vim" with your Vim plugin manager',
      'Add "colorscheme nova" to your ".vimrc" (after any other plugins or rules)',
      'Restart Vim',
    ],
    notes: [
      'You\'ll need True Color support (latest Vim, Neovim, or GUI Vim)',
      'For terminal Vim use, your terminal will also need True Color support',
      'Using the Nova Hyper or iTerm plugin is recommended',
      'Install "pangloss/vim-javascript", for full JS colors',
      'Install "othree/html5.vim" for full HTML colors',
      'Install "hail2u/vim-css3-syntax" for full CSS colors',
      'Install "mxw/vim-jsx" for full React colors',
      'If you use "vim-airline", it works automatically',
    ],
    links: [
      {
        title: 'Example ".vimrc"',
        url: 'https://github.com/trevordmiller/nova-vim/blob/master/assets/.vimrc',
      },
      {
        title: 'Contributing instructions',
        url: 'https://github.com/trevordmiller/nova-vim/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-vim',
      },
    ],
  },
  {
    title: 'Atom',
    icon: 'atom',
    screenshot: 'https://github.com/trevordmiller/nova-atom-syntax/raw/master/assets/screenshot.png?raw=true',
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
        url: 'https://github.com/trevordmiller/nova-atom-ui/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Contributing instructions for the syntax plugin',
        url: 'https://github.com/trevordmiller/nova-atom-syntax/blob/master/CONTRIBUTING.md',
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
    title: 'Hyper',
    icon: 'hyper',
    screenshot: 'https://github.com/trevordmiller/nova-hyperterm/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Add "nova-hyperterm" to the "plugins" array in your "~/.hyper.js"',
      'Restart Hyper',
    ],
    links: [
      {
        title: 'Example ".hyper.js"',
        url: 'https://github.com/trevordmiller/nova-hyperterm/blob/master/assets/.hyperterm.js',
      },
      {
        title: 'Contributing instructions',
        url: 'https://github.com/trevordmiller/nova-hyperterm/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-hyperterm',
      },
    ],
  },
  {
    title: 'iTerm',
    icon: 'iterm',
    screenshot: 'https://github.com/trevordmiller/nova-iterm/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Download "nova.itermcolors"',
      'In iTerm, open your preferences',
      'Tap on "Profiles" > "Colors" > "Color Presets" > "Import"',
      'Select the "nova.itermcolors" you downloaded',
    ],
    links: [
      {
        title: 'nova.itermcolors',
        url: 'https://raw.githubusercontent.com/trevordmiller/nova-iterm/master/build/nova.itermcolors',
      },
      {
        title: 'Contributing instructions',
        url: 'https://github.com/trevordmiller/nova-iterm/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-iterm',
      },
    ],
  },
  {
    title: 'Git',
    icon: 'git',
    screenshot: 'https://github.com/trevordmiller/nova-git/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Install a Nova plugin for your terminal',
      'Use ANSI color variables in your ".gitconfig"',
      'For Nova color meanings, see the example ".gitconfig"',
    ],
    notes: [
      'You\'ll need a version of Git that supports the latest color options (git 2.10)',
    ],
    links: [
      {
        title: 'Example ".gitconfig"',
        url: 'https://github.com/trevordmiller/nova-git/blob/master/assets/.gitconfig',
      },
    ],
  },
  {
    title: 'tmux',
    icon: 'tmux',
    screenshot: 'https://github.com/trevordmiller/nova-tmux/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Install a Nova plugin for your terminal',
      'Use ANSI color variables in your ".tmux.conf"',
      'For Nova color meanings, see the example ".tmux.conf"',
    ],
    notes: [
      'You\'ll need a version of tmux that supports True Color (tmux 2.2+)',
    ],
    links: [
      {
        title: 'Example ".tmux.conf"',
        url: 'https://github.com/trevordmiller/nova-tmux/blob/master/assets/.tmux.conf',
      },
    ],
  },
  {
    title: 'npm',
    icon: 'npm',
    steps: [
      'npm install -S nova-colors',
      'import {group} from \'nova-colors\''
    ],
    notes: [
      'The package provides the Nova color values mapped by group type (syntax, UI, version control etc.)',
    ],
    links: [
      {
        title: 'API',
        url: 'https://github.com/trevordmiller/nova-colors/blob/master/src/index.js',
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
        url: 'https://github.com/trevordmiller/nova-colors/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-colors',
      },
    ],
  },
]

export default class Platforms extends React.Component {

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
        <TabList style={{
          margin: 0,
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          borderTop: tabBorder,
          borderRight: tabBorder,
          borderLeft: tabBorder,
          borderTopRightRadius: borderRadii.large,
          borderTopLeftRadius: borderRadii.large,
        }}>
          {plugins.map((plugin, index) => (
            <Tab
              key={index}
              onClick={this.handleTabClick.bind(this, index)}
              style={{
                background: index === this.state.activeTab
                  ? uiGroups.background
                  : uiGroups.backgroundShade,
                flex: 1,
                maxWidth: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: spacing.large,
                lineHeight: 0,
                cursor: 'pointer',
              }}
            >
              <Icon
                type={plugin.icon}
                fill={
                  index === this.state.activeTab
                    ? uiGroups.userCurrentState
                    : uiGroups.gray3
                }
              />
              <div style={{
                marginTop: spacing.small,
                color: index === this.state.activeTab
                  ? uiGroups.userCurrentState
                  : uiGroups.gray3,
              }}>
                {plugin.title}
              </div>
            </Tab>
          ))}
        </TabList>
        {plugins.map((plugin, index) => (
          <TabPanel
            key={index}
            style={{
              borderRight: tabBorder,
              borderBottom: tabBorder,
              borderLeft: tabBorder,
              borderBottomRightRadius: borderRadii.large,
              borderBottomLeftRadius: borderRadii.large,
              paddingTop: spacing.large,
              paddingRight: spacing.medium,
              paddingBottom: spacing.medium,
              paddingLeft: spacing.medium,
            }}
          >
            <Heading level={4}>
              {plugin.title}
            </Heading>
            <div style={{
              marginTop: spacing.large,
            }}>
              {plugin.screenshot
                ? <div style={{
                    marginBottom: spacing.medium,
                  }}>
                    <Screenshot
                      src={plugin.screenshot}
                      quiet={true}
                    />
                  </div>
                : null
              }
              {plugin.steps
                ? <div style={{
                    marginBottom: (plugin.notes || plugin.links)
                      ? spacing.medium
                      : 0,
                  }}>
                    <Heading level={3}>
                      Instructions
                    </Heading>
                    <List
                      items={plugin.steps}
                      type='number'
                    />
                  </div>
                : null
              }
              {plugin.notes
                ? <div style={{
                    marginBottom: (plugin.links)
                      ? spacing.medium
                      : 0,
                  }}>
                    <Heading level={3}>
                      Notes
                    </Heading>
                    <List items={plugin.notes} />
                  </div>
                : null
              }
              {plugin.links
                ? <div>
                    <Heading level={3}>
                      Links
                    </Heading>
                    <List
                      items={plugin.links.map(link => (
                        <Anchor
                          href={link.url}
                          inline={true}
                        >
                          {link.title}
                        </Anchor>
                      ))}
                      type='link'
                    />
                  </div>
                : null
              }
            </div>
          </TabPanel>
        ))}
      </Tabs>
    )
  }
}
