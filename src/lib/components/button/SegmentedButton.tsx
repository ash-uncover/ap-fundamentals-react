import React, { ReactNode } from 'react'
// Componennts
import { FioriComponentProperties } from '../../components/FioriBase'

export interface SegmentedButtoInfo {
  ariaLabel?: string

  children: ReactNode
}
export interface SegmentedButtonProperties extends
  FioriComponentProperties,
  SegmentedButtoInfo {
}

export const SegmentedButton = ({
  className,
  style,

  ariaLabel,

  children,
}: SegmentedButtonProperties) => {

  // Rendering //

  const classes = ['fd-segmented-button']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
      aria-label={ariaLabel || 'Group label'}
      role='group'
    >
      {children}
    </div>
  )
}