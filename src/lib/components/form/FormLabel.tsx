import React from 'react'

import { FioriComponentProperties } from 'components/FioriBase'

export interface FormLabelinfo {
  htmlFor: string
  required?: boolean
  text: string
}

export interface FormLabelProperties extends
  FioriComponentProperties,
  FormLabelinfo {
}

export const FormLabel = ({
  className,
  style,

  htmlFor,
  required,
  text,
}: FormLabelProperties) => {

  // Rendering //

  const classes = ['fd-form-label']
  if (className) {
    classes.push(className)
  }
  if (required) {
    classes.push('fd-form-label--required')
  }

  return (
    <label
      className={classes.join(' ')}
      htmlFor={htmlFor}
      style={style}
    >
      {text}
    </label>
  )
}