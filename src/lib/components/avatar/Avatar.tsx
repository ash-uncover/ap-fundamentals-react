import React from 'react'

import { FioriComponentProperties } from '../FioriBase'

import { AccentColor } from '../../constants/AccentColor'
import { Size, Sizes } from '../../constants/Size'

import { Icon } from '../icon/Icon'

export interface AvatarProperties extends FioriComponentProperties {
  ariaLabel: string
  ariaControls?: string
  ariaExpanded?: boolean
  ariaHaspopup?: boolean

  icon?: string
  initials?: string
  size?: Size
  accentColor?: AccentColor
  shell?: boolean
  bordered?: boolean
  transparent?: boolean
  circle?: boolean

  onClick?: () => void
}

export const Avatar = ({
  className,
  style,

  ariaLabel,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,

  accentColor,
  bordered,
  circle,
  icon,
  initials,
  shell,
  size = Sizes.MEDIUM,
  transparent,

  onClick,
}: AvatarProperties) => {

  // Check

  // Rendering //

  const classes = ['fd-avatar']
  if (className) {
    classes.push(className)
  }
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
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      style={style}
      role={onClick ? 'button' : undefined}
      onClick={onClick}
    >
      {icon ? <Icon className='fd-avatar__icon' icon={icon} /> : initials}
    </span>
  )
}