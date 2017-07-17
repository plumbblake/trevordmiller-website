import { uiGroups, syntaxGroups } from 'nova-colors'

export default {

  // --------------------------------
  // UI GROUPS
  // --------------------------------

  "hljs": {
    "display": "block",
    "overflowX": "auto",
    "padding": "0.5em",
    "background": uiGroups.background,
    "color": uiGroups.foreground,
  },


  // --------------------------------
  // SYNTAX GROUPS
  // --------------------------------
  
  // CONSTANT
  
  "hljs-literal": {
    "color": syntaxGroups.constant,
  },

  "hljs-string": {
    "color": syntaxGroups.constant,
  },

  "hljs-number": {
    "color": syntaxGroups.constant,
  },

  "hljs-regexp": {
    "color": syntaxGroups.constant,
  },

  // IDENTIFIER

  "hljs-variable": {
    "color": syntaxGroups.identifier,
  },

  "hljs-params": {
    "color": syntaxGroups.identifier,
  },

  "hljs-class": {
    "color": syntaxGroups.identifier,
  },

  "hljs-attr": {
    "color": syntaxGroups.identifier,
  },

  "hljs-title": {
    "color": syntaxGroups.identifier,
  },

  // STATEMENT
  
  "hljs-tag": {
    "color": syntaxGroups.statement,
  },

  "hljs-subst": {
    "color": syntaxGroups.statement,
  },

  // TYPE
  
  "hljs-type": {
    "color": syntaxGroups.type,
  },
  
  // GLOBAL

  "hljs-keyword": {
    "color": syntaxGroups.global,
  },

  "hljs-built_in": {
    "color": syntaxGroups.global,
  },
  
  // EMPHASIS
  
  // SPECIAL
  
  "hljs-function": {
    "color": syntaxGroups.special,
  },

  // TRIVIAL
  
  "hljs-comment": {
    "color": syntaxGroups.trivial,
  },
}
