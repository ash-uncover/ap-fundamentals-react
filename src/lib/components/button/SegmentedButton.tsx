import React, { ReactElement } from 'react'
// Componennts
import { FioriComponentProperties } from '../../components/FioriBase'
import { ButtonProperties } from '../../components/button/Button'

export interface SegmentedButtoInfo {
  ariaLabel?: string

  children: ReactElement<ButtonProperties> | ReactElement<ButtonProperties>[]
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