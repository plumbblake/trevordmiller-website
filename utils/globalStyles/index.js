import {
  uiGroups,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  syntaxGroups,
  versionControlGroups
} from "utils/theme";

const globalStyles = `
  body {
    margin: 0;
    background-color: ${uiGroups.background};
    color: ${uiGroups.gray5};
    font-family: ${fontFamilies.sansSerif};
    font-size: ${fontSizes.medium}px;
    font-weight: ${fontWeights.normal};
    line-height: ${lineHeights.medium};
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

  a,
  button,
  input[type="submit"] {
    transition: opacity 0.2s;
  }

  a:hover,
  button:hover,
  input[type="submit"]:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  pre {
    margin: 0;
  }

  .hljs-tag {
    color: ${uiGroups.foreground};
  }

  .hljs-literal,
  .hljs-number,
  .hljs-string,
  .hljs-meta-string {
    color: ${syntaxGroups.constant};
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-title,
  .hljs-class,
  .hljs-selector-class,
  .hljs-template-variable {
    color: ${syntaxGroups.identifier};
  }

  .hljs-name,
  .hljs-subst,
  .hljs-regexp,
  .hljs-variable,
  .hljs-bullet,
  .hljs-code,
  .hljs-formula,
  .hljs-selector-attr,
  .hljs-template-tag {
    color: ${syntaxGroups.statement};
  }

  .hljs-type {
    color: ${syntaxGroups.type};
  }

  .hljs-keyword,
  .hljs-built_in,
  .hljs-meta-keyword,
  .hljs-builtin-name,
  .hljs-selector-tag,
  .hljs-selector-id,
  .hljs-selector-pseudo {
    color: ${syntaxGroups.global};
  }

  .hljs-quote,
  .hljs-symbol,
  .hljs-meta,
  .hljs-emphasis {
    color: ${syntaxGroups.emphasis};
  }

  .hljs-function,
  .hljs-params,
  .hljs-section,
  .hljs-link {
    color: ${syntaxGroups.special};
  }

  .hljs-addition {
    color: ${versionControlGroups.added};
  }

  .hljs-deletion {
    color: ${versionControlGroups.removed};
  }

  .hljs-comment,
  .hljs-doctag {
    color: ${syntaxGroups.trivial};
  }

  .hljs-strong {
    font-weight: bold;
  }

  @media print {
    @page {
      margin: 0;
    }

    section {
      page-break-inside: avoid;
    }
  }
`;

export default globalStyles;
