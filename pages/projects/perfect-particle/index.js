import React from 'react'
import { spacing } from '../../../utils/styleGuide'
import Screen from '../../../components/Screen'
import Image from '../../../components/Image'
import List from '../../../components/List'
import Anchor from '../../../components/Anchor'
import Audio from '../../../components/Audio'
import { projects } from '../'

const key = 'perfect-particle'

const releases = [
  {
    title: 'Spectrum',
    artworkPath: '/static/spectrum-artwork.jpg',
    sampleAudioPath: '/static/spectrum-sample.mp3',
    stores: [
      {
        title: 'iTunes',
        href: 'https://itunes.apple.com/us/album/spectrum/id380387007',
      },
      {
        title: 'Google Play',
        href:
          'https://play.google.com/store/music/album/Perfect_Particle_Spectrum?id=Bwg3wyliewntt747irfkl2zti4a',
      },
      {
        title: 'Amazon MP3',
        href: 'http://www.amazon.com/Spectrum/dp/B003UJHBV4',
      },
    ],
  },
]

const maxPlayerSize = 250

export default () =>
  <Screen
    baseRouteTitle="projects"
    mainVisual={projects[key].mainVisual}
    pathname={`https://trevordmiller.com/projects/${key}`}
    title="Perfect Particle"
    description="An instrumental blend of math rock, modern jazz, ambient, and electronic music"
    showDescription
    sections={releases.map(release => ({
      title: release.title,
      component: (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              marginRight: spacing.medium,
              marginBottom: spacing.small,
              maxWidth: maxPlayerSize,
            }}
          >
            <div
              style={{
                marginBottom: spacing.small,
                maxWidth: maxPlayerSize,
              }}
            >
              <Image
                src={release.artworkPath}
                description={`Album artwork for ${release.title}`}
                quiet
              />
            </div>
            <Audio src={release.sampleAudioPath} />
          </div>

          <div
            style={{
              maxWidth: maxPlayerSize,
            }}
          >
            <div
              style={{
                marginBottom: spacing.small,
              }}
            >
              You can buy it through most digital music stores.
            </div>
            <List
              items={release.stores.map(store =>
                <Anchor href={store.href}>
                  {store.title}
                </Anchor>
              )}
              type="link"
            />
          </div>
        </div>
      ),
    }))}
  />
