import React from 'react'
import { spacing } from '../../../utils/theme'
import PageWithProject from '../../../components/PageWithProject'
import Image from '../../../components/Image'
import Anchor from '../../../components/Anchor'
import Button from '../../../components/Button'
import Audio from '../../../components/Audio'

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

const PerfectParticle = () => (
  <PageWithProject
    id="perfect-particle"
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
              You can get it through most digital music stores.
            </div>

            {release.stores.map((store, index) => (
              <div
                key={store.title}
                style={{
                  marginBottom:
                    index + 1 < release.stores.length ? spacing.small : 0,
                }}
              >
                <Anchor href={store.href}>
                  <Button size="small">{store.title}</Button>
                </Anchor>
              </div>
            ))}
          </div>
        </div>
      ),
    }))}
  />
)

export default PerfectParticle
