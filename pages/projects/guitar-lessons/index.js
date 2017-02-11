import React, {Component} from 'react'
import {startCase} from 'lodash'
import {uiGroups, spacing, borderSizes} from '../../../components/utils/styleGuide'
import Screen from '../../../components/Screen'
import Heading from '../../../components/Heading'
import Button from '../../../components/Button'

const degrees = [1, 2, 3, 4, 5, 6, 7]

const types = [
  'singleNotes',
  'powerChords',
  'triadChords',
  'seventhChords',
  'quartalChords',
]

const noteSize = 20
const fretSize = 60

const GuitarPattern = ({strings, highlightedDegreesByString}) => (
  <div style={{
    marginTop: spacing.medium,
    overflow: 'scroll',
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

const octave = [1, 0, 2, 0, 3, 4, 0, 5, 0, 6, 0, 7]
const doubleOctave = octave.concat(octave)

const strings = [
  doubleOctave.slice(0, 12),
  doubleOctave.slice(7, 19),
  doubleOctave.slice(3, 15),
  doubleOctave.slice(10, 22),
  doubleOctave.slice(5, 17),
  doubleOctave.slice(0, 12),
]

class Selector extends Component {

  render() {
    const {title, onClick, selectedItem, items} = this.props

    return (
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
  }
}

class GuitarPatternsSelector extends Component {

  state = {
    selectedDegree: 1,
    selectedType: 'singleNotes',
    highlightedDegreesByString: {
      1: [1],
      2: [1],
      3: [1],
      4: [1],
      5: [1],
      6: [1],
    },
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
        triadChords: {
          2: [intervalToDegree(3)],
          3: [intervalToDegree(3), selectedDegree],
          4: [selectedDegree, intervalToDegree(5)],
          5: [intervalToDegree(5), selectedDegree],
          6: [selectedDegree],
        },
        seventhChords: {
          2: [intervalToDegree(3)],
          3: [intervalToDegree(3), intervalToDegree(7)],
          4: [intervalToDegree(7), intervalToDegree(5)],
          5: [intervalToDegree(5), selectedDegree],
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
    return (
      <div>

        <div style={{
          marginBottom: spacing.medium,
        }}>
          <GuitarPattern 
            strings={strings}
            highlightedDegreesByString={highlightedDegreesByString}
          />
          <div style={{
            textAlign: 'center',
            margin: spacing.small,
          }}>
            {'<-- Scroll horizontally -->'}
          </div>
        </div>

        <Selector
          title='Degree'
          onClick={this.handleDegreeChange}
          selectedItem={selectedDegree}
          items={degrees}
        />

        <Selector
          title='Type'
          onClick={this.handleTypeChange}
          selectedItem={selectedType}
          items={types}
        />

      </div>
    )
  }
}

export default () => (
  <Screen
    title='Guitar lessons'
    description='Diatonic (in-key) chord and scale diagrams to help you understand music better'
    sections={[
      {
        title: 'In-key guitar patterns',
        component: (
          <GuitarPatternsSelector />
        ),
      },
    ]}
  />
)
