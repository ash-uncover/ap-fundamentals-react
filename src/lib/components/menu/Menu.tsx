import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { MenuItem, MenuItemInfo } from '../../components/menu/MenuItem'

export interface MenuInfo {
  compact?: boolean
  items: MenuItemInfo[]
  noShadow?: boolean

  onItemSelected?: (item: MenuItemInfo) => void
}
export interface MenuProperties extends
  FioriComponentProperties,
  MenuInfo { }

export const Menu = ({
  className,
  style,

  compact,
  items,
  noShadow,

  onItemSelected,
}: MenuProperties) => {

  // Hooks //

  // Events //

  const onItemClicked = (item: MenuItemInfo) => {
    if (onItemSelected) {
      onItemSelected(item)
    }
    return false
  }

  // Rendering //

  const classes = ['fd-menu']
  if (className) {
    classes.push(className)
  }
  if (compact) {
    classes.push('fd-menu--compact')
  }
  const classesList = ['fd-menu__list']
  if (noShadow) {
    classesList.push('fd-menu__list--no-shadow')
  }

  return (
    <nav
      className={classes.join(' ')}
      aria-label='options'
      role='navigation'
      style={style}
    >
      <ul
        className={classesList.join(' ')}
        role='menu'
      >
        {items.map((item, index) => {
          return (
            <MenuItem
              {...item}
              key={`menu-item-${index}`}
              onItemSelected={() => item.onItemSelected ? item.onItemSelected() : onItemClicked(item)}
            />
          )
        })}
      </ul>
    </nav>
  )
}