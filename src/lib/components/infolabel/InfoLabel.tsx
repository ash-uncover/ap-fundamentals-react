import React from 'react'

import { AccentColor } from '../../constants/AccentColor'

export interface InfoLabelProperties {
  icon?: string,
  text?: string,
  display?: boolean
  numeric?: boolean
  accentColor?: AccentColor,
}

export const InfoLabel = ({
  icon,
  text,
  display,
  numeric,
  accentColor,
}: InfoLabelProperties) => {

  // Rendering //

  const classes = ['fd-info-label']
  if (accentColor) {
    classes.push(`fd-info-label--${accentColor}`)
  }
  if (numeric) {
    classes.push('fd-info-label--numeric')
  }
  if (display) {
    classes.push('fd-info-label--display')
  }

  return (
    <span className={classes.join(' ')}>
      {icon ?
        <i
          className={`fd-info-label__icon sap-icon--${icon}`}
          role='presentation'
        ></i>
        : null}
      {text ?
        <span className='fd-info-label__text'>
          {text}
        </span>
        : null}
    </span>
  )
}