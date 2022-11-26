import React from 'react'
// Constants
import { IconDesign, IconDesigns } from '../../constants/IconDesign'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface IconInfo {
  ariaLabel?: string
  ariaControls?: string
  ariaExpanded?: boolean
  ariaHaspopup?: boolean

  color?: IconDesign
  icon: string
  preferSpan?: boolean

  onClick?: () => void
}

export interface IconProperties extends
  FioriComponentProperties,
  IconInfo { }

export const Icon = ({
  className,
  style,

  ariaLabel,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,

  color,
  icon,
  preferSpan,

  onClick,
}: IconProperties) => {

  // Rendering //

  const classes = [`sap-icon--${icon}`]
  if (className) {
    classes.push(className)
  }
  if (color) {
    classes.push(`sap-icon--color-${color}`)
  }
  if (color === IconDesigns.CONTRAST) {
    classes.push(`sap-icon--background-${color}`)
  }
  if (preferSpan) {
    classes.push('sap-icon')
  }

  if (preferSpan) {
    return (
      <span
        className={classes.join(' ')}
        style={style}
        aria-label={ariaLabel}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-haspopup={ariaHaspopup}
        role={onClick ? 'button' : 'presentation'}
        onClick={onClick}
      />
    )
  }
  return (
    <i
      className={classes.join(' ')}
      style={style}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      role={onClick ? 'button' : 'presentation'}
      onClick={onClick}
    />
  )
}