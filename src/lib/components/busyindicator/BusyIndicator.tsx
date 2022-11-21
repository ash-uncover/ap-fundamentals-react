import React from 'react'
// Constants
import { BusyIndicatorSize } from '../../constants/BusyIndicatorSize'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface BusyIndicatorInfo {
  ariaLabel?: string

  contrast?: boolean
  label?: string
  size?: BusyIndicatorSize
  toast?: boolean
}
export interface BusyIndicatorProperties extends
  FioriComponentProperties,
  BusyIndicatorInfo {
}

export const BusyIndicator = ({
  className,
  style,

  ariaLabel,

  contrast,
  label,
  size,
  toast,
}: BusyIndicatorProperties) => {

  // Rendering //

  const extended = label || toast

  const classes = ['fd-busy-indicator']
  if (size) {
    classes.push(`fd-busy-indicator--${size}`)
  }
  if (className) {
    classes.push(className)
  }
  if (contrast) {
    classes.push('fd-busy-indicator--contrast')
  }

  const JSX = (
    <div
      className={classes.join(' ')}
      style={style}
      aria-hidden='false'
      aria-label={ariaLabel ? ariaLabel : 'Loading'}
    >
      <div className='fd-busy-indicator__circle' />
      <div className='fd-busy-indicator__circle' />
      <div className='fd-busy-indicator__circle' />
    </div>
  )

  if (extended) {
    const classesExtended = ['fd-busy-indicator-extended']
    if (toast) {
      classesExtended.push('fd-message-toast')
      if (label) {
        classesExtended.push('fd-busy-indicator-extended--message-toast')
      }
    }
    return (
      <div className={classesExtended.join(' ')}>
        {JSX}
        {label ?
          <div className='fd-busy-indicator-extended__label'>
            {label}
          </div>
          : null}
      </div>
    )
  }

  return JSX
}