import React from 'react'

import { FioriComponentProperties } from '../../components/FioriBase'
import { ListType, ListTypes } from '../../constants/ListType'

export interface ListItemInfo {
  iconLeft?: string
  iconRight?: string
  interactive?: boolean
  selected?: boolean
  text: string
  type?: ListType
  unread?: boolean

  onItemSelected?: () => void
}
export interface ListItemProperties extends
  FioriComponentProperties,
  ListItemInfo {
  onItemSelected: () => void
}

export const ListItem = ({
  id,
  className,
  style,

  iconLeft,
  iconRight,
  interactive,
  selected,
  text,
  type,
  unread,

  onItemSelected,
}: ListItemProperties) => {

  // Events //

  const onItemClicked = () => {
    if (onItemSelected) {
      onItemSelected()
    }
    return false
  }

  // Rendering //

  const renderContent = () => {
    switch (type) {
      case ListTypes.NAVIGATION: {
        return (
          <a
            className='fd-list__link'
            tabIndex={0}
          >
            {renderContentBase()}
          </a>
        )
      }
      default: {
        return renderContentBase()
      }
    }
  }

  const renderContentBase = () => {
    return (
      <>
        {iconLeft ?
          <i
            className={`fd-list__icon sap-icon--${iconLeft}`}
            role='presentation'
          />
          : null}
        <span className='fd-list__title'>
          {text}
        </span>
        {iconRight ?
          <i
            className={`fd-list__icon sap-icon--${iconRight}`}
            role='presentation'
          />
          : null}
      </>
    )
  }

  const classes = ['fd-list__item']
  if (className) {
    classes.push(className)
  }
  if (interactive) {
    classes.push('fd-list__item--interractive')
  }
  if (type === ListTypes.NAVIGATION) {
    classes.push('fd-list__item--link')
  }
  if (selected) {
    classes.push('is-selected')
  }
  if (unread) {
    classes.push('fd-list__item--unread')
  }

  return (
    <li
      id={id ? id : undefined}
      className={classes.join(' ')}
      role={type === ListTypes.DROPDOWN ? 'option' : 'listitem'}
      tabIndex={type === ListTypes.NAVIGATION ? -1 : 0}
      style={style}
      onClick={onItemClicked}
    >
      {renderContent()}
    </li>
  )
}