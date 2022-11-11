import React from 'react'

import { BusyIndicatorSize } from '../../index'

export interface BusyIndicatorProperties {
  className?: string
  style?: any

  ariaLabel?: string

  size?: BusyIndicatorSize
}

export const BusyIndicator = ({
  className,
  style,

  ariaLabel,

  size,
}: BusyIndicatorProperties) => {

  // Rendering //

  const classes = ['fd-busy-indicator']
  if (size) {
    classes.push(`fd-busy-indicator--${size}`)
  }
  if (className) {
    classes.push(className)
  }

  return (
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
}