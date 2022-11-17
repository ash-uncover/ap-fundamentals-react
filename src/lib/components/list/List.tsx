import React, { useState } from 'react'
import { UUID } from '@uncover/js-utils'

import { InputState } from '../../constants/InputState'
import { ListType } from '../../constants/ListType'

import { FioriComponentProperties } from '../../components/FioriBase'

import { ListItem, ListItemInfo } from '../../components/list/ListItem'

export interface ListInfo {
  compact?: boolean
  items: ListItemInfo[]
  state?: InputState
  stateMessage?: string
  type?: ListType

  onItemSelected?: (item: ListItemInfo) => void
}
export interface ListProperties extends
  FioriComponentProperties,
  ListInfo { }

export const List = ({
  className,
  style,

  compact,
  items,
  stateMessage,
  state,
  type,

  onItemSelected,
}: ListProperties) => {

  // Hooks //

  const [idState] = useState(`list-state-${UUID.next()}`)

  // Events //

  const onItemClicked = (item: ListItemInfo) => {
    if (item.onItemSelected) {
      item.onItemSelected()
    } else if (onItemSelected) {
      onItemSelected(item)
    }
    return false
  }

  // Rendering //

  const classes = ['fd-list']
  if (className) {
    classes.push(className)
  }
  if (compact) {
    classes.push('fd-list--compact')
  }
  if (type) {
    classes.push(`fd-list--${type}`)
  }
  if (stateMessage) {
    classes.push('fd-list--has-message')
  }

  const classesMessage = ['fd-list__message']
  if (state) {
    classesMessage.push(`fd-list__message--${state}`)
  }

  return (
    <>
      {stateMessage ?
        <div
          className={classesMessage.join(' ')}
          aria-live='assertive'
          role='alert'
        >
          {stateMessage}
        </div>
        : null}
      <ul
        className={classes.join(' ')}
        aria-activedescendant={idState}
        role='list'
        style={style}
      >
        {items.map((item, index) => {
          return (
            <ListItem
              id={index === 0 ? idState : undefined}
              key={`item-${index}`}
              {...item}
              onItemSelected={() => onItemClicked(item)}
              type={type}
            />
          )
        })}
      </ul>
    </>
  )
}