import React from 'react'
import { spacing } from '../../utils/styleGuide'

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
        transform: 'scale(1.5)',
        marginRight: spacing.medium,
      }}
    />
    <label htmlFor={id}>
      {label}
    </label>
  </div>

export default Checkbox
