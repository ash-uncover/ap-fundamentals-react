import React, { ReactNode } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { VerticalNavigationItem, VerticalNavigationItemProperties} from '../../components/verticalnavigation/VerticalNavigationItem'

export interface VerticalNavigationInfo {
  condensed?: boolean
  items?: VerticalNavigationItemProperties[],
  itemsLabel: string
  label: string

  onItemSelect?: (id: string) => void

  children?: ReactNode
}

export interface VerticalNavigationProperties extends
  FioriComponentProperties,
  VerticalNavigationInfo { }

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
                onClick={item.onClick || onItemSelect}
              />
            )
          })}
          {children}
        </ul>
      </nav>
    </div>
  )
}
