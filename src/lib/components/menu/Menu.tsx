import React from 'react'
import { MenuItem } from './MenuItem'

export interface MenuProperties {
  items: MenuItem[]
  compact?: boolean
  noShadow?: boolean
  onItemSelected?: (id: string) => void
}

export interface MenuItem {
  id: string
  text: string
  shortcut?: string
  active?: boolean
  hover?: boolean
  selected?: boolean
  disabled?: boolean
  iconBefore?: string
  iconAfter?: string
  onItemSelected?: () => void
}

export const Menu = ({
  items,
  compact,
  noShadow,
  onItemSelected,
}: MenuProperties) => {

  // Hooks //

  // Events //

  const onItemClicked = (id: string) => {
    if (onItemSelected) {
      onItemSelected(id)
    }
    return false
  }

  // Rendering //

  const classes = ['fd-menu']
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
    >
      <ul
        className={classesList.join(' ')}
        role='menu'
      >
        {items.map((item) => {
          return (
            <MenuItem
              {...item}
              key={item.id}
              onItemSelected={() => item.onItemSelected ? item.onItemSelected() : onItemClicked(item.id)}
            />
          )
        })}
      </ul>
    </nav>
  )
}