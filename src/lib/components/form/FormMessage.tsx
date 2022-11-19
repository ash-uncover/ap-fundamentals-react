import React from 'react'

import { FioriComponentProperties } from 'components/FioriBase'
import { InputState } from 'constants/InputState'

export interface FormMessageinfo {
  text: string
  state: InputState
}

export interface FormMessageProperties extends
  FioriComponentProperties,
  FormMessageinfo {
}

export const FormMessage = ({
  className,
  style,

  state,
  text,
}: FormMessageProperties) => {

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