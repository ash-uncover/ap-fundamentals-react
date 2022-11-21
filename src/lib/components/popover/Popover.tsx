import React, { ReactElement, useState } from 'react'
// Utils
import { UUID } from '@uncover/js-utils'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface PopoverInfo {
  alignRight?: boolean
  control: ReactElement
  dropdown?: boolean
  noArrow?: boolean
}
export interface PopoverProperties extends
  FioriComponentProperties,
  PopoverInfo {
  children: ReactElement | ReactElement[]
}

export const Popover = ({
  className,
  style,

  alignRight,
  control,
  dropdown,
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
  if (dropdown) {
    classesBody.push('fd-popover__body--dropdown')
  }

  const renderControl = () => {
    if (React.isValidElement(control)) {
      const injection: any = {
        onClick: onTogglePopover
      }
      if (typeof control.type === 'string') {
        injection['aria-controls'] = id
        injection['aria-expanded'] = open
        injection['aria-haspopup'] = true
        injection.role = 'button'
      } else {
        injection.ariaControls = id
        injection.ariaExpanded = open
        injection.ariaHaspopup = true
      }
      return React.cloneElement(control, injection)
    }
    return control
  }

  return (
    <div className={classes.join(' ')} style={style}>
      <div className='fd-popover__control'>
        {renderControl()}
      </div>
      <div
        className={classesBody.join(' ')}
        aria-hidden={!open}
        id={id}
      >
        {children}
      </div>
    </div>
  )
}