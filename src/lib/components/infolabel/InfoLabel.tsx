import React from 'react'

import { AccentColor } from '../../constants/AccentColor'

import { FioriComponentProperties } from '../../components/FioriBase'

export interface InfoLabelInfo {
  accentColor?: AccentColor,
  display?: boolean
  icon?: string,
  numeric?: boolean
  text?: string,
}
export interface InfoLabelProperties extends
  FioriComponentProperties,
  InfoLabelInfo {
}

export const InfoLabel = ({
  className,
  style,

  accentColor,
  display,
  icon,
  numeric,
  text,
}: InfoLabelProperties) => {

  // Rendering //

  const classes = ['fd-info-label']
  if (className) {
    classes.push(className)
  }
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
    <span
      className={classes.join(' ')}
      style={style}
    >
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