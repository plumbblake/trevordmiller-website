import {uiGroups} from '../../../utils/styleGuide'

export default `
  body {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  *:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    outline: 1px solid ${uiGroups.userCurrentState};
  }

  ::selection {
    background: ${uiGroups.userCurrentState};
    color: ${uiGroups.backgroundShade};
  }
`
