import { uiGroups } from '../../../utils/styleGuide'

export default `
  body {
    margin: 0;
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

  a, button, input[type='submit'] {
    transition: opacity 0.2s;
  }

  a:hover, button:hover, input[type='submit']:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`
