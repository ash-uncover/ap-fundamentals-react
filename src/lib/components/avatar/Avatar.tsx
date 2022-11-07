import React from 'react'

import { AccentColor } from '../../constants/AccentColor'
import { Size, Sizes } from '../../constants/Size'

export interface AvatarProperties {
  label: string
  icon?: string
  initials?: string
  size?: Size
  accentColor?: AccentColor
  shell?: boolean
  bordered?: boolean
  transparent?: boolean
  circle?: boolean
}

export const Avatar = ({
  label,
  icon,
  initials,
  size = Sizes.MEDIUM,
  accentColor,
  shell,
  bordered,
  transparent,
  circle,
}: AvatarProperties) => {

  // Check

  // Rendering //

  const classes = ['fd-avatar']
  if (size) {
    classes.push(`fd-avatar--${size}`)
  }
  if (accentColor) {
    classes.push(`fd-avatar--${accentColor}`)
  }
  if (shell) {
    classes.push('fd-avatar--shell')
  }
  if (bordered) {
    classes.push('fd-avatar--border')
  }
  if (transparent) {
    classes.push('fd-avatar--transparent')
  }
  if (circle) {
    classes.push('fd-avatar--circle')
  }

  return (
    <span
      className={classes.join(' ')}
      aria-label={label}
    >
      {icon ?
        <i
          className={`fd-avatar__icon sap-icon--${icon}`}
          role='presentation'
        ></i>
        : null}
      {icon ? null : initials}
    </span>
  )
}