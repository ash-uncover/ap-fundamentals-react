import React, { ReactNode } from 'react'

import { FioriComponentProperties } from '../FioriBase'

export interface BarElementInfo {
  children: ReactNode
}
export interface BarElementProperties extends
  FioriComponentProperties,
  BarElementInfo {
}

export const BarElement = ({
  className,
  style,

  children
}: BarElementProperties) => {

  // Rendering //

  const classes = ['fd-bar__element']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      {children}
    </div>
  )
}