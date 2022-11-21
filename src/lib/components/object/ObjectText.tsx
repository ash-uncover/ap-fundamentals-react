import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface ObjectTextInfo {
  text: string
}
export interface ObjectTextProperties extends
  FioriComponentProperties,
  ObjectTextInfo { }

export const ObjectText = ({
  className,
  style,

  text,
}: ObjectTextProperties) => {

  // Rendering //

  const classes = ['fd-object-text']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      {text}
    </div>
  )
}