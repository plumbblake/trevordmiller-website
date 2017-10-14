import React from 'react'
import { spacing } from '../../utils/theme'

const Checkbox = ({ label, value, name, id, defaultChecked, required }) =>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <input
      type="checkbox"
      value={value}
      name={name}
      id={id}
      defaultChecked={defaultChecked}
      required={required}
      style={{
        marginRight: spacing.xsmall,
      }}
    />
    <label htmlFor={id}>
      {label}
    </label>
  </div>

export default Checkbox
