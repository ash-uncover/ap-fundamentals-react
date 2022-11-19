import React from 'react'

import { FioriComponentProperties } from 'components/FioriBase'

export interface FormLabelinfo {
  text: string
  htmlFor: string
}

export interface FormLabelProperties extends
  FioriComponentProperties,
  FormLabelinfo {
}

export const FormLabel = ({
  className,
  style,

  htmlFor,
  text,
}: FormLabelProperties) => {

  // Rendering //

  const classes = ['fd-label']
  if (className) {
    classes.push(className)
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