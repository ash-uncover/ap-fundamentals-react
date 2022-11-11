import React from 'react'

export interface IconProperties {
  className?: string
  style?: any

  ariaLabel?: string
  ariaControls?: string
  ariaExpanded?: boolean
  ariaHaspopup?: boolean

  icon: string
  preferSpan?: boolean

  onClick?: () => void
}

export const Icon = ({
  className,
  style,

  ariaLabel,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,

  icon,
  preferSpan,

  onClick,
}: IconProperties) => {

  // Rendering //

  const classes = [`sap-icon--${icon}`]
  if (className) {
    classes.push(className)
  }
  if (preferSpan) {
    classes.push('sap-icon')
  }

  if (preferSpan) {
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