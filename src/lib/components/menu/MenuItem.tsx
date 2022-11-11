import React from 'react'

export interface MenuItemProperties {
  text: string
  shortcut?: string
  active?: boolean
  hover?: boolean
  selected?: boolean
  disabled?: boolean
  iconBefore?: string
  iconAfter?: string
  onItemSelected: () => void
}

export const MenuItem = ({
  text,
  shortcut,
  active,
  hover,
  selected,
  disabled,
  iconBefore,
  iconAfter,
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