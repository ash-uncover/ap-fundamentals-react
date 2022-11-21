import React from 'react'
// Components
import { FioriComponentProperties } from 'components/FioriBase'

export interface MenuItemInfo {
  active?: boolean
  disabled?: boolean
  hover?: boolean
  iconBefore?: string
  iconAfter?: string
  id?: string
  selected?: boolean
  shortcut?: string
  text: string

  onItemSelected?: () => void
}
export interface MenuItemProperties extends
  FioriComponentProperties,
  MenuItemInfo {
  onItemSelected: () => void
}

export const MenuItem = ({
  className,
  style,

  active,
  disabled,
  hover,
  iconAfter,
  iconBefore,
  selected,
  shortcut,
  text,

  onItemSelected,
}: MenuItemProperties) => {

  // Hooks //

  // Events //

  const onItemClicked = () => {
    if (onItemSelected) {
      onItemSelected()
    }
    return false
  }

  // Rendering //

  const classes = ['fd-menu__item']
  if (className) {
    classes.push(className)
  }
  const classesLink = ['fd-menu__link']
  if (active) {
    classesLink.push('is-active')
  }
  if (hover) {
    classesLink.push('is-hover')
  }
  if (selected) {
    classesLink.push('is-selected')
  }
  if (disabled) {
    classesLink.push('is-disabled')
  }

  return (
    <li
      className={classes.join(' ')}
      role='presentation'
      style={style}
    >
      <a
        className={classesLink.join(' ')}
        role='menuitem'
        onClick={() => onItemClicked()}
      >
        {iconBefore ?
          <span className='fd-menu__addon-before'>
            <i className={`sap-icon--${iconBefore}`} role='presentation'></i>
          </span>
          : null}
        <span className='fd-menu__title'>
          {text}
        </span>
        {shortcut ?
          <span className='fd-menu__shortcut'>
            {shortcut}
          </span>
          : null}
        {iconAfter ?
          <span className='fd-menu__addon-after'>
            <i className={`sap-icon--${iconAfter}`} role='presentation'></i>
          </span>
          : null}
      </a>
    </li>
  )
}