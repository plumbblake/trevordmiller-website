import React, { Component } from 'react'
import Link from 'next/link'
import { uiGroups, spacing, borderSizes } from '../../../utils/theme'
import ScreenWithProject from '../../../components/ScreenWithProject'
import Heading from '../../../components/Heading'
import Button from '../../../components/Button'

const octave = [1, 0, 2, 0, 3, 4, 0, 5, 0, 6, 0, 7]
const doubleOctave = octave.concat(octave)
const createUrl = (degree, type) =>
  `/projects/guitar-lessons?degree=${degree}&type=${type}`
const degreeOptions = ['None', 1, 2, 3, 4, 5, 6, 7]
const typeOptions = [
  'singleNotes',
  'powerChords',
  'basicChords',
  'seventhChords',
  'ninthChords',
  'eleventhChords',
  'quartalChords',
]

const getHighlightedDegreesByString = (selectedDegree, selectedType) => {
  const intervalToDegree = interval => {
    const remainder = (selectedDegree + (interval - 1)) % 7
    return remainder === 0 ? 7 : remainder
  }

  return {
    singleNotes: {
      1: [selectedDegree],
      2: [selectedDegree],
      3: [selectedDegree],
      4: [selectedDegree],
      5: [selectedDegree],
      6: [selectedDegree],
    },
    powerChords: {
      3: [selectedDegree],
      4: [selectedDegree, intervalToDegree(5)],
      5: [selectedDegree, intervalToDegree(5)],
      6: [selectedDegree],
    },
    basicChords: {
      2: [intervalToDegree(3)],
      3: [intervalToDegree(3), selectedDegree],
      4: [selectedDegree, intervalToDegree(5)],
      5: [intervalToDegree(5), selectedDegree],
      6: [selectedDegree],
    },
    seventhChords: {
      2: [intervalToDegree(3)],
      3: [intervalToDegree(3), intervalToDegree(7)],
      4: [intervalToDegree(7), intervalToDegree(3)],
      5: [intervalToDegree(3), selectedDegree],
      6: [selectedDegree],
    },
    ninthChords: {
      2: [intervalToDegree(2)],
      3: [intervalToDegree(2), intervalToDegree(7)],
      4: [intervalToDegree(7), intervalToDegree(3)],
      5: [intervalToDegree(3), selectedDegree],
      6: [selectedDegree],
    },
    eleventhChords: {
      2: [intervalToDegree(4)],
      3: [intervalToDegree(4), intervalToDegree(7)],
      4: [intervalToDegree(7), intervalToDegree(3)],
      5: [intervalToDegree(3), selectedDegree],
      6: [selectedDegree],
    },
    quartalChords: {
      2: [intervalToDegree(3)],
      3: [intervalToDegree(3), intervalToDegree(7)],
      4: [intervalToDegree(7), intervalToDegree(4)],
      5: [intervalToDegree(4), selectedDegree],
      6: [selectedDegree],
    },
  }[selectedType]
}

const GuitarPattern = ({
  strings,
  highlightedDegreesByString,
  noteSize = 20,
  fretSize = 60,
}) => (
  <div
    style={{
      marginTop: spacing.medium,
      overflowX: 'scroll',
    }}
  >
    <div
      style={{
        background: uiGroups.backgroundShade,
        display: 'inline-block',
      }}
    >
      {strings.map((string, stringIndex) => (
        <div
          key={stringIndex}
          style={{
            display: 'flex',
          }}
        >
          {string.map((degree, noteIndex) => (
            <div
              key={noteIndex}
              style={{
                width: fretSize,
                display: 'flex',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: spacing.xxsmall + noteSize / 3,
                paddingBottom: spacing.xxsmall + noteSize / 3,
                borderLeft: `${borderSizes.small}px solid ${
                  uiGroups.background
                }`,
                borderRight:
                  noteIndex === string.length - 1
                    ? `${borderSizes.small}px solid ${uiGroups.background}`
                    : '0',
              }}
            >
              <div
                style={{
                  height: stringIndex + 1,
                  width: fretSize,
                  background: uiGroups.background,
                  position: 'absolute',
                }}
              />
              <div
                style={{
                  borderRadius: '100%',
                  background: degree
                    ? highlightedDegreesByString[stringIndex + 1] &&
                      highlightedDegreesByString[stringIndex + 1].includes(
                        degree
                      )
                      ? uiGroups.userCurrentState
                      : uiGroups.background
                    : 'transparent',
                  width: noteSize,
                  height: noteSize,
                  zIndex: '1',
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

const SelectorItem = ({ children }) => (
  <div
    style={{
      marginRight: spacing.small,
      marginTop: spacing.small,
    }}
  >
    {children}
  </div>
)

const Selector = ({ title, children }) => (
  <div>
    <Heading level={4}>{title}</Heading>

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: spacing.large,
      }}
    >
      {children}
    </div>
  </div>
)

class GuitarPatternsSelector extends Component {
  static defaultProps = {
    selectedDegree: degreeOptions[0],
    selectedType: typeOptions[0],
  }

  render() {
    const { selectedDegree, selectedType } = this.props

    const highlightedDegreesByString = getHighlightedDegreesByString(
      selectedDegree,
      selectedType
    )

    const strings = [
      doubleOctave.slice(0, 13),
      doubleOctave.slice(7, 20),
      doubleOctave.slice(3, 16),
      doubleOctave.slice(10, 23),
      doubleOctave.slice(5, 18),
      doubleOctave.slice(0, 13),
    ]

    return (
      <div>
        <div
          style={{
            marginBottom: spacing.medium,
          }}
        >
          We can apply the in-key pattern to the guitar. Each dot on the
          fretboard below is a note that is 'in-key'. This entire pattern
          repeats up and down so the ends 'connect'. The pattern is not specific
          to any note or fret number - it can be shifted up or down depending on
          the 'key' you are in. Scroll horizontally to view the entire pattern.
          Tap a 'Degree' and 'Type' to highlight specific notes or chords inside
          the pattern. The most common chord progressions in typical songs use
          primarily the 1, 4, 5, and 6 degree chords. Most common songs will
          resolve back to the 1 (Major) or 6 (Minor) degree chord. Once you find
          the 'root' of a song, you can play any of the notes in the entire
          in-key pattern and it is likely to sound good.
        </div>

        <div
          style={{
            marginBottom: spacing.medium,
          }}
        >
          <GuitarPattern
            strings={strings}
            highlightedDegreesByString={highlightedDegreesByString}
          />
        </div>

        <Selector title="Degree">
          {degreeOptions.map(degree => (
            <SelectorItem key={degree}>
              <Link href={createUrl(degree, selectedType)} scroll={false}>
                <Button
                  type={selectedDegree === degree ? 'primary' : 'secondary'}
                >
                  {degree}
                </Button>
              </Link>
            </SelectorItem>
          ))}
        </Selector>

        <Selector title="Type">
          {typeOptions.map(type => (
            <SelectorItem key={type}>
              <Link href={createUrl(selectedDegree, type)} scroll={false}>
                <Button type={selectedType === type ? 'primary' : 'secondary'}>
                  {`${type.charAt(0).toUpperCase()}${type
                    .replace(/([A-Z])/g, ' $1')
                    .slice(1)}`}
                </Button>
              </Link>
            </SelectorItem>
          ))}
        </Selector>
      </div>
    )
  }
}

export default class extends React.Component {
  static async getInitialProps({ query: { degree, type } }) {
    return {
      selectedDegree: degree,
      selectedType: type,
    }
  }

  render() {
    const { selectedDegree, selectedType } = this.props

    return (
      <ScreenWithProject
        id="guitar-lessons"
        sections={[
          {
            title: 'The in-key pattern',
            component: (
              <div>
                <div
                  style={{
                    marginBottom: spacing.medium,
                  }}
                >
                  In common music, most notes used are 'in-key'. Then, chords
                  (multiple notes played at a time) are built from these in-key
                  notes. There are only twelve notes in music, but they repeat
                  in 'octaves'. Only seven of these notes are in-key. Below is
                  what the pattern of in-key notes looks like. Scroll
                  horizontally to view the entire pattern. This pattern repeats
                  infinitely up and down so the ends 'connect'.
                </div>

                <GuitarPattern
                  strings={[doubleOctave.slice(0, 13)]}
                  highlightedDegreesByString={{
                    1: [degreeOptions[0]],
                  }}
                />
              </div>
            ),
          },
          {
            title: 'The in-key guitar pattern',
            component: (
              <GuitarPatternsSelector
                selectedDegree={
                  isNaN(selectedDegree)
                    ? selectedDegree
                    : parseInt(selectedDegree)
                }
                selectedType={selectedType}
              />
            ),
          },
        ]}
      />
    )
  }
}
