import React, { ReactElement } from 'react'

import { FioriComponentProperties } from '../FioriBase'

import { ButtonProperties } from './Button'

export interface SegmentedButtonProperties extends FioriComponentProperties {
  ariaLabel?: string

  children: ReactElement<ButtonProperties> | ReactElement<ButtonProperties>[]
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