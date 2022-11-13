import React, { ReactElement, useState } from 'react'

import { UUID } from '@uncover/js-utils'

import { FioriComponentProperties } from '../FioriBase'

import { Menu, type MenuItem } from '../menu/Menu'

export interface PopoverProperties extends FioriComponentProperties {
  alignRight?: boolean
  items: MenuItem[]
  noArrow?: boolean

  children: ReactElement
}

export const Popover = ({
  className,
  style,

  alignRight,
  items,
  noArrow,

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
        <Menu
          noShadow={true}
          items={items}
        />
      </div>
    </div>
  )
}