import React from 'react'

import { ButtonStyle } from '../../constants/ButtonStyle'
import { ButtonType, ButtonTypes } from '../../constants/ButtonType'

export interface ButtonProperties {
  className?: string
  ariaLabel?: string
  style?: ButtonStyle
  icon?: string
  iconAfter?: boolean
  text?: string | number
  badge?: string
  selected?: boolean
  menu?: boolean
  disabled?: boolean
  compact?: boolean
  tabIndex?: number
  type?: ButtonType
  onClick?: () => void
}

export const Button = ({
  className,
  ariaLabel,
  style,
  icon,
  iconAfter,
  text,
  badge,
  selected,
  menu,
  disabled,
  compact,
  tabIndex,
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
  if (style) {
    classes.push(`fd-button--${style}`)
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
      aria-label={ariaLabel}
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