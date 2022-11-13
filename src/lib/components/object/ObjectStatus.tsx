import React from 'react'

import { FioriComponentProperties } from '../FioriBase'

export interface ObjectStatusProperties extends FioriComponentProperties {
  icon?: string
  iconOnly?: boolean
  inverted?: boolean
  large?: boolean
  semantic?: string
  text: string
}

export const ObjectStatus = ({
  className,
  style,

  icon,
  iconOnly,
  inverted,
  large,
  semantic,
  text,
}: ObjectStatusProperties) => {

  // Rendering //

  const classes = ['fd-object-status']
  if (semantic) {
    classes.push(`fd-object-status--${semantic}`)
  }
  if (inverted) {
    classes.push('fd-object-status--inverted')
  }
  if (large) {
    classes.push('fd-object-status--large')
  }
  if (className) {
    classes.push(className)
  }

  return (
    <span
      className={classes.join(' ')}
      style={style}
    >
      <i
        className={`fd-object-status__icon sap-icon--${icon}`}
        aria-label={iconOnly ? text : undefined}
        role={iconOnly ? undefined : 'presentation'}
      ></i>
      {!iconOnly ?
        <span className='fd-object-status__text'>
          {text}
        </span>
        : null}
    </span>
  )
}