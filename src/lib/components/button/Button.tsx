import React from 'react'

import {
  ButtonDesign,
  ButtonType,
  ButtonTypes,
} from '../../../lib'

export interface ButtonProperties {
  className?: string
  style?: React.CSSProperties

  ariaLabel?: string
  ariaControls?: string
  ariaExpanded?: boolean
  ariaHaspopup?: boolean

  badge?: string
  compact?: boolean
  design?: ButtonDesign
  disabled?: boolean
  icon?: string
  iconAfter?: boolean
  menu?: boolean
  selected?: boolean
  tabIndex?: number
  text?: string | number
  type?: ButtonType

  onClick?: () => void
}

export const Button = ({
  className,
  style,

  ariaLabel,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,

  badge,
  compact,
  design,
  disabled,
  icon,
  iconAfter,
  menu,
  selected,
  tabIndex,
  text,
  type = ButtonTypes.BUTTON,

  onClick,
}: ButtonProperties) => {

  // Events //

  const onClicked = () => {
    if (onClick) {
      onClick()
    }
  }

  // Rendering //

  const classes = ['fd-button']
  if (className) {
    classes.push(className)
  }
  if (design) {
    classes.push(`fd-button--${design}`)
  }
  if (selected) {
    classes.push('is-selected')
  }
  if (compact) {
    classes.push('fd-button--compact')
  }
  if (menu) {
    classes.push('fd-button--menu')
  }

  return (
    <button
      className={classes.join(' ')}
      style={style}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      onClick={onClicked}
      tabIndex={tabIndex ? tabIndex : 0}
      type={type}
      aria-disabled={disabled ? true : false}
      disabled={disabled}
    >
      {icon && !iconAfter ?
        <i className={`sap-icon--${icon}`} role='presentation'></i>
        : null}

      {text ?
        <span className='fd-button__text'>
          {text}
        </span>
        : null}

      {icon && iconAfter ?
        <i className={`sap-icon--${icon}`} role='presentation'></i>
        : null}

      {menu ?
        <i className={`sap-icon--slim-arrow-down`}></i>
        : null}

      {badge ?
        <span className='fd-button__badge'>
          {badge}
        </span>
        : null}

    </button>
  )
}