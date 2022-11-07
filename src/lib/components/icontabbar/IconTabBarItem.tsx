import React, { KeyboardEvent } from 'react'

import { Semantic } from '../../constants/Semantic'

export interface IconTabBarItemProperties {
  id: string
  badge?: boolean
  selected?: boolean
  semantic?: Semantic
  title: string
  onTabSelect?: (id: string) => void
}

export const IconTabBarItem = ({
  id,
  badge,
  selected,
  semantic,
  title,
  onTabSelect,
}: IconTabBarItemProperties) => {

  // Events //

  const onClick = () => {
    if (onTabSelect) {
      onTabSelect(id)
    }
  }

  const onKeyUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'Enter':
      case 'Space': {
        event.stopPropagation()
        if (onTabSelect) {
          onTabSelect(id)
        }
      }
      default: {
        break;
      }
    }
  }

  // Rendering //

  const classes = ['fd-icon-tab-bar__item']
  if (semantic) {
    classes.push(`fd-icon-tab-bar__item--${semantic}`)
  }

  return (
    <li
      className={classes.join(' ')}
      role='presentation'
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <span
        id={id}
        className='fd-icon-tab-bar__tab'
        aria-selected={!!selected}
        role='tab'
        tabIndex={0}
      >
        <span className='fd-icon-tab-bar__tag'>
          {title}
        </span>
        {badge ?
          <span className='fd-icon-tab-bar__badge' />
          : null}
      </span>
    </li>
  )
}