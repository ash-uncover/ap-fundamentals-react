import React from 'react'

import { UUID } from '@uncover/js-utils'

export interface FormInputProperties {
  className?: string
  label?: string
  placeholder?: string
  type?: string
}

export const FormInput = ({
  className,
  label,
  placeholder,
  type = 'text',
}: FormInputProperties) => {

  // Rendering //

  const id = UUID.next()

  const classes = ['fd-form-item']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      <label
        className='fd-form-label'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className='fd-input'
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}