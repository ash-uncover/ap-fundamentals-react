import React, { MouseEvent } from 'react'
// Libs
import { renderIcon } from '../../helpers/RenderHelper'
// Constants
import { ButtonDesign } from '../../constants/ButtonDesign'
import { ButtonType, ButtonTypes } from '../../constants/ButtonType'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { Icon, IconInfo } from '../../components/icon/Icon'

export interface ButtonInfo {
  ariaLabel?: string
  ariaControls?: string
  ariaExpanded?: boolean
  ariaHaspopup?: boolean

  badge?: string
  compact?: boolean
  design?: ButtonDesign
  disabled?: boolean
  icon?: string | IconInfo
  iconAfter?: boolean
  menu?: boolean
  selected?: boolean
  tabIndex?: number
  text?: string | number
  toggled?: boolean
  type?: ButtonType

  onClick?: () => void
}
export interface ButtonProperties extends
  FioriComponentProperties,
  ButtonInfo {
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
  toggled,
  type = ButtonTypes.BUTTON,

  onClick,
}: ButtonProperties) => {

  // Events //

  const onClicked = (event: MouseEvent) => {
    event.stopPropagation()
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
  if (toggled) {
    classes.push('fd-button--toggled')
  }

  return (
    <button
      className={classes.join(' ')}
      style={style}
      aria-controls={ariaControls}
      aria-disabled={disabled ? true : false}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      aria-label={ariaLabel}
      disabled={disabled}
      tabIndex={tabIndex ? tabIndex : 0}
      title={!text ? ariaLabel : ''}
      type={type}
      onClick={onClicked}
    >
      {icon && !iconAfter ? renderIcon(icon) : null}

      {text ?
        <span className='fd-button__text'>
          {text}
        </span>
        : null}

      {icon &&  iconAfter ? renderIcon(icon) : null}

      {menu ? <Icon icon='slim-arrow-down' /> : null}

      {badge ?
        <span className='fd-button__badge'>
          {badge}
        </span>
        : null}

    </button>
  )
}