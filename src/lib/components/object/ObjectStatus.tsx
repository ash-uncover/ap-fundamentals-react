import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface ObjectStatusInfo {
  icon?: string
  iconOnly?: boolean
  inverted?: boolean
  large?: boolean
  semantic?: string
  text: string
}
export interface ObjectStatusProperties extends
  FioriComponentProperties,
  ObjectStatusInfo { }

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
  if (className) {
    classes.push(className)
  }
  if (semantic) {
    classes.push(`fd-object-status--${semantic}`)
  }
  if (inverted) {
    classes.push('fd-object-status--inverted')
  }
  if (large) {
    classes.push('fd-object-status--large')
  }

  return (
    <span
      className={classes.join(' ')}
      style={style}
    >
      {icon ?
        <i
          className={`fd-object-status__icon sap-icon--${icon}`}
          aria-label={iconOnly ? text : undefined}
          role={iconOnly ? undefined : 'presentation'}
        ></i>
        : null}
      {!iconOnly ?
        <span className='fd-object-status__text'>
          {text}
        </span>
        : null}
    </span>
  )
}