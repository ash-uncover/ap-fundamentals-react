import React from 'react'

export interface ObjectMarkerProperties {
  icon?: string
  iconOnly?: boolean
  text: string
  className?: string
}

export const ObjectMarker = ({
  icon,
  iconOnly,
  text,
  className,
}: ObjectMarkerProperties) => {

  // Rendering //

  const classes = ['fd-object-marker']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      {icon ?
        <i
          className={`fd-object-marker__icon sap-icon--${icon}`}
          aria-label={iconOnly ? text : undefined}
          role={iconOnly ? undefined : 'presentation'}
        ></i>
        : null}
      {!iconOnly && text ?
        <span className='fd-object-marker__text'>
          {text}
        </span>
        : null}
    </div>
  )
}