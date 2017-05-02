import {uiGroups, fontFamilies, fontSizes, fontWeights, lineHeights} from '../../../utils/styleGuide'

export default `
  body {
    margin: 0;
    color: ${uiGroups.gray4};
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizes.medium};
    font-weight: ${fontWeights.normal};
    line-height: ${lineHeights.medium};
    background: ${uiGroups.background};
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  *:focus {
    box-shadow: none;
    border-color: transparent;
    outline: 1px solid ${uiGroups.userCurrentState};
    z-index: 1;
  }

  ::selection {
    background: ${uiGroups.userCurrentState};
    color: ${uiGroups.backgroundShade};
  }

  input::placeholder {
    color: ${uiGroups.backgroundShade};
  }

  a, input {
    transition: opacity 0.2s;
  }

  a:hover, input:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`
