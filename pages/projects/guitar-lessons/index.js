import React, {Component} from 'react'
import {startCase} from 'lodash'
import {uiGroups, spacing, borderSizes} from '../../../components/utils/styleGuide'
import Screen from '../../../components/Screen'
import Heading from '../../../components/Heading'
import Button from '../../../components/Button'

const GuitarPattern = ({
  strings,
  highlightedDegreesByString,
  noteSize = 20,
  fretSize = 60,
}) => (
  <div style={{
    marginTop: spacing.medium,
    overflowX: 'scroll',
  }}>
    <div style={{
      background: uiGroups.backgroundShade,
      display: 'inline-block',
    }}>
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
                paddingTop: spacing.xxsmall + (noteSize / 3),
                paddingBottom: spacing.xxsmall + (noteSize / 3),
                borderLeft: `${borderSizes.small}px solid ${uiGroups.background}`,
                borderRight: (noteIndex === string.length - 1)
                  ? `${borderSizes.small}px solid ${uiGroups.background}`
                  : '0',
              }}
            >
              <div style={{
                height: stringIndex + 1,
                width: fretSize,
                background: uiGroups.background,
                position: 'absolute',
              }} />
              <div style={{
                borderRadius: '100%',
                background: degree 
                  ? (highlightedDegreesByString[stringIndex + 1]) && (highlightedDegreesByString[stringIndex + 1].includes(degree))
                    ? uiGroups.userCurrentState
                    : uiGroups.background
                  : 'transparent',
                width: noteSize,
                height: noteSize,
                zIndex: '1',
              }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

const Selector = ({title, onClick, selectedItem, items}) => (
  <div>
    <Heading level={4}>
      {title}
    </Heading>

    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: spacing.large,
    }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            marginRight: spacing.small,
            marginTop: spacing.small,
          }}
        >
          <Button
            type={selectedItem === item ? 'primary' : 'secondary'}
            onClick={onClick.bind(this, item)}
          >
            {startCase(item)}
          </Button>
        </div>
      ))}
    </div>
  </div>
)

class GuitarPatternsSelector extends Component {

  state = {
    selectedDegree: 'None',
    selectedType: 'singleNotes',
    highlightedDegreesByString: false,
  }

  handleDegreeChange = (selectedDegree) => {
    this.setState({selectedDegree}, this.handleOptionsChange)
  }

  handleTypeChange = (selectedType) => {
    this.setState({selectedType}, this.handleOptionsChange)
  }

  handleOptionsChange = () => {
    const {selectedType, selectedDegree} = this.state

    const intervalToDegree = interval => {
      const remainder = (selectedDegree + (interval - 1)) % 7
      return remainder === 0
        ? 7
        : remainder
    }

    this.setState({
      highlightedDegreesByString: {
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
      }[selectedType],
    })
  }

  render() {
    const {selectedDegree, selectedType, highlightedDegreesByString} = this.state
    const octave = [1, 0, 2, 0, 3, 4, 0, 5, 0, 6, 0, 7]
    const doubleOctave = octave.concat(octave)
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

        <div style={{
          marginBottom: spacing.medium,
        }}>
          We can apply the in-key pattern to the guitar. Each dot on the fretboard below is a note that is "in-key". This entire pattern repeats up and down so the ends "connect". The pattern is not specific to any note or fret number - it can be shifted up or down depending on the "key" you are in. Scroll horizontally to view the entire pattern. Tap a "Degree" and "Type" to highlight specific notes or chords inside the pattern. The most common chord progressions in typical songs use primarily the 1, 4, 5, and 6 degree chords. Most common songs will resolve back to the 1 (Major) or 6 (Minor) degree chord. Once you find the "root" of a song, you can play any of the notes in the entire in-key pattern and it is likely to sound good.
        </div>

        <div style={{
          marginBottom: spacing.medium,
        }}>
          <GuitarPattern 
            strings={strings}
            highlightedDegreesByString={highlightedDegreesByString}
          />
        </div>

        <Selector
          title='Degree'
          onClick={this.handleDegreeChange}
          selectedItem={selectedDegree}
          items={['None', 1, 2, 3, 4, 5, 6, 7]}
        />

        <Selector
          title='Type'
          onClick={this.handleTypeChange}
          selectedItem={selectedType}
          items={[
            'singleNotes',
            'powerChords',
            'basicChords',
            'seventhChords',
            'ninthChords',
            'eleventhChords',
            'quartalChords',
          ]}
        />

      </div>
    )
  }
}

export default () => (
  <Screen
    title='Guitar lessons'
    description='Diatonic (in-key) chord and scale diagrams to help you go beyond tabs and memorizing songs'
    sections={[
      {
        title: 'The in-key pattern',
        component: (
          <div>

            <div style={{
              marginBottom: spacing.medium,
            }}>
              In common music, most notes used are "in-key". Then, chords (multiple notes played at a time) are built from these in-key notes. There are only twelve notes in music, but they repeat in "octaves". Only seven of these notes are in-key. Below is what the pattern of in-key notes looks like. Scroll horizontally to view the entire pattern. This pattern repeats infinitely up and down so the ends "connect".
            </div>

            <GuitarPattern 
              strings={[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]}
              highlightedDegreesByString={{
                1: [1, 3, 5, 6, 8, 10, 12],
              }}
            />

          </div>
        ),
      },
      {
        title: 'The in-key guitar pattern',
        component: (
          <GuitarPatternsSelector />
        ),
      },
    ]}
  />
)
