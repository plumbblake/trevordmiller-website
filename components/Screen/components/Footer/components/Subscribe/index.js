import React from 'react'
import {spacing, borderRadii, fontSizes, uiGroups, fontFamilies} from '../../../../../utils/styleGuide'

const inputResetStyles = {
  fontFamily: fontFamilies.primary,
  fontSize: fontSizes.medium,
  border: 0,
}

export default () => (
  <aside>
    <form
      action='//trevordmiller.us3.list-manage.com/subscribe/post?u=70b7070413b98c77c71e28694&amp;id=97d3f6b0ec'
      method='post'
      id='mc-embedded-subscribe-form'
      name='mc-embedded-subscribe-form'
      target='_blank'
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <input
        type='email'
        defaultValue=''
        name='EMAIL'
        id='mce-EMAIL'
        placeholder='Email'
        required
        style={{
          ...inputResetStyles,
          width: '100%',
          marginTop: spacing.medium,
          padding: spacing.small,
          background: uiGroups.gray2,
          color: uiGroups.gray6,
          borderRadius: `${borderRadii.medium}px 0 0 ${borderRadii.medium}px`,
        }}
      />
      <input
        type='submit'
        defaultValue='Subscribe'
        name='subscribe'
        id='mc-embedded-subscribe'
        style={{
          ...inputResetStyles,
          marginTop: spacing.medium,
          padding: spacing.small,
          background: uiGroups.userCurrentState,
          color: uiGroups.backgroundShade,
          borderRadius: `0 ${borderRadii.medium}px ${borderRadii.medium}px 0`,
        }}
      />
    </form>
  </aside>
)
