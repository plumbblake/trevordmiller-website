import { uiGroups } from '../../../utils/theme'

export default `
  body {
    margin: 0;
    background-color: ${uiGroups.background};
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
    color: ${uiGroups.background};
  }

  input::placeholder {
    color: ${uiGroups.backgroundShade};
  }

  button {
    padding: 0;
    margin: 0;
  }

  a, button, input[type='submit'] {
    transition: opacity 0.2s;
  }

  a:hover, button:hover, input[type='submit']:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  pre {
    overflow: auto;
  }

  @media print {
    @page {
      margin: 0;
    }

    section {
      page-break-inside: avoid;
    }
  }
`
