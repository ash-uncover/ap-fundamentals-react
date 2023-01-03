import React, { ReactNode } from 'react'
// Components
import { FioriComponentProperties } from '../FioriBase'

export interface BarLeftInfo {
  children: ReactNode
}
export interface BarLeftProperties extends
  FioriComponentProperties,
  BarLeftInfo {
}

export const BarLeft = ({
  className,
  style,

  children
}: BarLeftProperties) => {

  // Rendering //

  const classes = ['fd-bar__left']
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