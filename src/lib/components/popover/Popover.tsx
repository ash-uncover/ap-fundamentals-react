import React, { ReactNode, useState, useId } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { PopoverPlacement, PopoverPlacements } from '../../constants/PopoverPlacement'

export interface PopoverInfo {
  control: ReactNode
  dropdown?: boolean
  noArrow?: boolean
  placement?: PopoverPlacement
  preventOpen?: boolean
}
export interface PopoverProperties extends
  FioriComponentProperties,
  PopoverInfo {
  children: ReactNode
}

export const Popover = ({
  className,
  style,

  control,
  dropdown,
  noArrow,
  placement,
  preventOpen = false,

  children,
}: PopoverProperties) => {

  // Hooks //

  const id = useId()
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
    } else if (!preventOpen) {
      openPopover()
    }
  }

  // Rendering //

  const classes = ['fd-popover']
  if (className) {
    classes.push(className)
  }

  const classesBody = ['fd-popover__body']
  if (placement) {
    if (placement.bodyPlacement) {
      classesBody.push(`fd-popover__body--${placement.bodyPlacement}`)
    }
    if (placement.bodyPosition) {
      classesBody.push(`fd-popover__body--${placement.bodyPosition}`)
    }
    if (placement.arrowPosition) {
      classesBody.push(`fd-popover__body--${placement.arrowPosition}`)
    }
    if (placement.arrowPlacement) {
      classesBody.push(`fd-popover__body--${placement.arrowPlacement}`)
    }
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