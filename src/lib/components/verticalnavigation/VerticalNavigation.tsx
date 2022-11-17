import React, { ReactElement } from 'react'

import {
  VerticalNavigationItem,
  VerticalNavigationItemProperties
} from './VerticalNavigationItem'

export interface VerticalNavigationProperties {
  className?: string
  style?: React.CSSProperties

  condensed?: boolean
  label: string
  items?: VerticalNavigationItemProperties[],
  itemsLabel: string

  onItemSelect?: (id: string) => void

  children?: ReactElement | ReactElement[]
}

export const VerticalNavigation = ({
  className,
  style,

  condensed,
  label,
  items,
  itemsLabel,

  onItemSelect,

  children,
}: VerticalNavigationProperties) => {

  // Rendering //

  const classes = ['fd-vertical-nav']
  if (className) {
    classes.push(className)
  }
  if (condensed) {
    classes.push('fd-vertical-nav--condensed')
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <nav
        className='fd-vertical-nav__main-navigation'
        aria-label={label}
      >
        <ul
          className='fd-list'
          aria-label={itemsLabel}
        >
          {items?.map(item => {
            return (
              <VerticalNavigationItem
                key={item.id}
                className={item.className}
                id={item.id}
                condensed={condensed || item.condensed}
                expanded={item.expanded}
                items={item.items}
                icon={item.icon}
                text={item.text}
                selected={item.selected}
                onItemSelect={item.onItemSelect || onItemSelect}
              />
            )
          })}
          {children}
        </ul>
      </nav>
    </div>
  )
}
