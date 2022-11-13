import React from 'react'

import { FioriComponentProperties } from '../FioriBase'

export interface ObjectTextProperties extends FioriComponentProperties {
  text: string
}

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