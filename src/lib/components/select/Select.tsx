import React from 'react'

import { InputState } from '../../constants/InputState'
import { ListTypes } from '../../constants/ListType'

import { FioriComponentProperties } from '../../components/FioriBase'

import { List } from '../../components/list/List'
import { ListItemInfo } from '../../components/list/ListItem'
import { Popover } from '../../components/popover/Popover'

export interface SelectInfo {
  compact?: boolean
  items: ListItemInfo[]
  placeholder: string
  state?: InputState
  stateMessage?: string
  value?: string

  onItemSelected?: (item: ListItemInfo) => void
}
export interface SelectProperties extends
  FioriComponentProperties,
  SelectInfo {
}

export const Select = ({
  className,
  style,

  compact,
  items,
  placeholder,
  state,
  stateMessage,
  value,

  onItemSelected,
}: SelectProperties) => {

  // Rendering //

  const classes = ['fd-select']
  if (compact) {
    classes.push('fd-select--compact')
  }
  const classesControl = ['fd-select__control']
  if (state) {
    classesControl.push(`is-${state}`)
  }

  const renderSelectControl = () => {
    return (
      <div className={classes.join(' ')}>
        <button
          className={classesControl.join(' ')}
          tabIndex={0}
          value={value || placeholder}
        >
          <span className='fd-select__text-content'>
            {value || placeholder}
          </span>
          <span className='fd-button fd-select__button fd-button--transparent'>
            <i className='sap-icon--slim-arrow-down' />
          </span>
        </button>
      </div>
    )
  }

  return (
    <Popover
      className={className}
      style={style}
      control={renderSelectControl()}
      dropdown
      noArrow
    >
      <List
        compact={compact}
        items={items}
        state={state}
        stateMessage={stateMessage}
        type={ListTypes.DROPDOWN}
        onItemSelected={onItemSelected}
      />
    </Popover>
  )
}