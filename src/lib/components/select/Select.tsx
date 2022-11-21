import React from 'react'
// Constants
import { InputState } from '../../constants/InputState'
import { ListTypes } from '../../constants/ListType'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { List } from '../../components/list/List'
import { ListItemInfo } from '../../components/list/ListItem'
import { Popover } from '../../components/popover/Popover'

export interface SelectInfo {
  alignRight?: boolean
  compact?: boolean
  items: ListItemInfo[]
  placeholder: string
  state?: InputState
  stateMessage?: string
  value?: string

  onChange: (item: ListItemInfo) => void
}
export interface SelectProperties extends
  FioriComponentProperties,
  SelectInfo { }

export const Select = ({
  className,
  style,

  alignRight,
  compact,
  items,
  placeholder,
  state,
  stateMessage,
  value,

  onChange,
}: SelectProperties) => {

  // Events //

  const handleItemSelected = (event: ListItemInfo) => {
    onChange(event)
  }

  // Rendering //

  const classes = ['fd-select']
  if (className) {
    classes.push(className)
  }
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
      style={style}
      control={renderSelectControl()}
      alignRight={alignRight}
      dropdown
      noArrow
    >
      <List
        compact={compact}
        items={items}
        state={state}
        stateMessage={stateMessage}
        type={ListTypes.DROPDOWN}
        onItemSelected={handleItemSelected}
      />
    </Popover>
  )
}