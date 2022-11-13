import React from 'react'

export interface ObjectMarkerProperties {
  className?: string
  style?: React.CSSProperties

  icon?: string
  iconOnly?: boolean
  text: string
}

export const ObjectMarker = ({
  className,
  style,

  icon,
  iconOnly,
  text,
}: ObjectMarkerProperties) => {

  // Rendering //

  const classes = ['fd-object-marker']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
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