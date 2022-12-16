import { FioriComponentProperties } from 'components/FioriBase'
import React, { KeyboardEvent, MouseEvent, useState } from 'react'

export interface VerticalNavigationItemInfo {
  condensed?: boolean
  expanded?: boolean
  icon?: string
  items?: VerticalNavigationItemProperties[]
  selected?: boolean
  text: string

  onClick?: (id: string) => void

  children?: any | any[]
}

export interface VerticalNavigationItemProperties extends
  FioriComponentProperties,
  VerticalNavigationItemInfo { }

export const VerticalNavigationItem = ({
  className,
  style,

  id,
  condensed,
  expanded,
  icon,
  items,
  selected,
  text,

  onClick,

  children,
}: VerticalNavigationItemProperties) => {


  // Hooks //

  const [isExpanded, setExpanded] = useState(expanded)
  const expandable = Boolean(items?.length) || Boolean(children)

  // Events //

  const handleClick = (event: MouseEvent) => {
    if (onClick && id) {
      event.stopPropagation()
      onClick(id)
    }
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'Enter':
      case 'Space': {
        if (onClick && id) {
          event.stopPropagation()
          onClick(id)
        }
      }
      default: {
        break;
      }
    }
  }

  // Rendering //

  const classes = ['fd-list__navigation-item']
  if (className) {
    classes.push(className)
  }
  if (condensed) {
    classes.push('fd-list__navigation-item--condensed')
  }
  if (expandable) {
    classes.push('fd-list__navigation-item--expandable')
  }
  if (isExpanded) {
    classes.push('is-expanded')
  }
  if (selected) {
    classes.push('fd-list__navigation-item--indicated')
  }

  const classesArrow = ['fd-list__navigation-item-arrow']
  if (isExpanded) {
    classesArrow.push('is-expanded')
    classesArrow.push('sap-icon--navigation-down-arrow')
  } else {
    classesArrow.push('sap-icon--navigation-right-arrow')
  }

  return (
    <li
      className={classes.join(' ')}
      style={style}
      tabIndex={0}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
    >
      {icon ?
        <i
          className={`fd-list__navigation-item-icon sap-icon--${icon}`}
          role='presentation'
        ></i>
        : null}
      <span className='fd-list__navigation-item-text'>
        {text}
      </span>
      {expandable ?
        <button
          className={classesArrow.join(' ')}
          aria-label='Expand second submenu'
          onClick={() => setExpanded(!isExpanded)}
        ></button>
        : null}
      {expandable && isExpanded ?
        <ul className='fd-list'>
          {items?.map(item => {
            return (
              <VerticalNavigationItem
                key={item.id}
                className={item.className}
                style={style ? style : item.style}
                id={item.id}
                condensed={condensed || item.condensed}
                expanded={item.expanded}
                icon={item.icon}
                items={item.items}
                selected={item.selected}
                text={item.text}
                onClick={onClick}
              />
            )
          })}
          {children}
        </ul>
        : null}

    </li>
  )
}
