import React from 'react'

import { ButtonDesigns } from '../../constants/ButtonDesign'
import { InputState } from '../../constants/InputState'
import { PopoverModes } from '../../constants/PopoverMode'

import { FioriComponentProperties } from '../../components/FioriBase'

import { Button } from '../../components/button/Button'
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

  // Hooks //

  // Events //

  // Rendering //

  const classes = ['fd-select']
  if (compact) {
    classes.push('fd-select--compact')
  }
  const classesControl = ['fd-select__control']
  if (state) {
    classesControl.push(`is-${state}`)
  }

  return (
    <Popover
      className={className}
      style={style}
      dropdown
      items={items}
      mode={PopoverModes.LIST}
      noArrow
      stateMessage={stateMessage}
      state={state}
    >
      <div className={classes.join(' ')}>
        <button
          className={classesControl.join(' ')}
          tabIndex={0}
          value={value || placeholder}
        >
          <span
            is='cozySelectValue'
            className='fd-select__text-content'
          >
            {value || placeholder}
          </span>
          <span className='fd-button fd-select__button fd-button--transparent'>
            <i className='sap-icon--slim-arrow-down' />
          </span>
        </button>
      </div>
    </Popover>
  )
}