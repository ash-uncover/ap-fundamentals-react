import React from 'react'

import { FioriComponentProperties } from '../FioriBase'

import { AccentColor } from '../../constants/AccentColor'
import { Size, Sizes } from '../../constants/Size'

import { Icon } from '../icon/Icon'
import { AvatarDesign } from 'constants/AvatarDesign'

export interface AvatarProperties extends FioriComponentProperties {
  ariaLabel: string
  ariaLabelZoom?: string
  ariaControls?: string
  ariaExpanded?: boolean
  ariaHaspopup?: boolean

  accentColor?: AccentColor
  bordered?: boolean
  circle?: boolean
  design?: AvatarDesign
  icon?: string
  iconZoom?: string
  initials?: string
  size?: Size

  onClick?: () => void
}

export const Avatar = ({
  className,
  style,

  ariaLabel,
  ariaLabelZoom,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,

  accentColor,
  bordered,
  circle,
  design,
  icon,
  iconZoom,
  initials,
  size = Sizes.MEDIUM,

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
  if (bordered) {
    classes.push('fd-avatar--border')
  }
  if (design) {
    classes.push(`fd-avatar--${design}`)
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
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
    >
      {icon ?
        <Icon
          className='fd-avatar__icon'
          icon={icon}
        />
        : initials}
      {onClick && iconZoom ?
        <Icon
          className='fd-avatar__zoom-icon'
          icon={iconZoom}
          ariaLabel={ariaLabelZoom ? ariaLabelZoom : 'Edit'}
        />
        : null}
    </span>
  )
}