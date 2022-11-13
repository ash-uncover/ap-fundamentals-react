import React from 'react'

import { FioriComponentProperties } from '../FioriBase'

import { AccentColor } from '../../constants/AccentColor'

export interface BadgeProperties extends FioriComponentProperties {
  accentColor?: AccentColor,
  text: string,
}

export const Badge = ({
  className,
  style,

  accentColor,
  text,
}: BadgeProperties) => {

  // Rendering //

  const classes = ['fd-badge']
  if (className) {
    classes.push(className)
  }
  if (accentColor) {
    classes.push(`fd-info-label--${accentColor}`)
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