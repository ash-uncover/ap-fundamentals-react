import React, { ReactElement, useState } from 'react'

import { UUID } from '@uncover/js-utils'

import { InputState } from '../../constants/InputState'
import { PopoverMode, PopoverModes } from '../../constants/PopoverMode'

import { FioriComponentProperties } from '../../components/FioriBase'

import { List } from '../../components/list/List'
import { ListItemInfo } from '../../components/list/ListItem'
import { Menu } from '../../components/menu/Menu'
import { MenuItemInfo } from '../../components/menu/MenuItem'

export interface PopoverInfo {
  alignRight?: boolean
  compact?: boolean
  dropdown?: boolean
  items: MenuItemInfo[] | ListItemInfo[]
  mode?: PopoverMode
  noArrow?: boolean
  state?: InputState
  stateMessage?: string
}
export interface PopoverProperties extends
  FioriComponentProperties,
  PopoverInfo {
  children: ReactElement
}

export const Popover = ({
  className,
  style,

  alignRight,
  compact,
  dropdown,
  items,
  mode,
  noArrow,
  state,
  stateMessage,

  children,
}: PopoverProperties) => {

  // Hooks //

  const [id] = useState<string>(UUID.next())
  const [open, setOpen] = useState<boolean>(false)

  // Events //

  const closePopover = () => {
    setOpen(false)
    window.removeEventListener('click', closePopover)
    window.removeEventListener('scroll', closePopover, true)
    window.removeEventListener('resize', closePopover, true)
    window.removeEventListener('keyup', closePopover, true)
  }

  const openPopover = () => {
    setOpen(true)
    setTimeout(() => {
      window.addEventListener('click', closePopover)
      window.addEventListener('scroll', closePopover, true)
      window.addEventListener('resize', closePopover, true)
      window.addEventListener('keyup', closePopover, true)
    }, 0)
  }

  const onTogglePopover = () => {
    if (open) {
      closePopover()
    } else {
      openPopover()
    }
  }

  // Rendering //

  const classes = ['fd-popover']
  if (className) {
    classes.push(className)
  }
  if (alignRight) {
    classes.push('fd-popover--right')
  }
  const classesBody = ['fd-popover__body']
  if (alignRight) {
    classesBody.push('fd-popover__body--right')
  }
  if (noArrow) {
    classesBody.push('fd-popover__body--no-arrow')
  }
  if (dropdown) {
    classesBody.push('fd-popover__body--dropdown')
  }

  const renderChild = () => {
    if (React.isValidElement(children)) {
      const injection: any = {
        onClick: onTogglePopover
      }
      if (typeof children.type === 'string') {
        injection['aria-controls'] = id
        injection['aria-expanded'] = open
        injection['aria-haspopup'] = true
        injection.role = 'button'
      } else {
        injection.ariaControls = id
        injection.ariaExpanded = open
        injection.ariaHaspopup = true
      }
      return React.cloneElement(children, injection)
    }
    return children
  }

  return (
    <div className={classes.join(' ')} style={style}>
      <div className='fd-popover__control'>
        {renderChild()}
      </div>
      <div
        className={classesBody.join(' ')}
        aria-hidden={!open}
        id={id}
      >
        {mode === PopoverModes.LIST ?
          <List
            compact={compact}
            items={items}
            state={state}
            stateMessage={stateMessage}
          />
          :
          <Menu
            compact={compact}
            items={items}
            noShadow={true}
          />
        }
      </div>
    </div>
  )
}