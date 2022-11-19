import React from 'react'

import { FioriComponentProperties } from '../../components/FioriBase'

export interface CheckBoxInfo {
  text: string
  htmlFor: string
}

export interface CheckBoxProperties extends
  FioriComponentProperties,
  CheckBoxInfo {
}

export const CheckBox = ({
  className,
  style,

  htmlFor,
  text,
}: CheckBoxProperties) => {

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