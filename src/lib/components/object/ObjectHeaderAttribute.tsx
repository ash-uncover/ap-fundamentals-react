import React from 'react'
import './ObjectHeaderAttribute.css'

export interface ObjectHeaderAttributeProperties {
  className?: string,
  label: string,
  text: string,
}

export interface ObjectAttributeIdentifier {

}

export interface ObjectAttributeMarker {

}

export interface ObjectAttributeNumber {

}

export interface ObjectAttributeStatus {

}

export const ObjectHeaderAttribute = ({
  className,
  label,
  text,
}: ObjectHeaderAttributeProperties) => {

  // Rendering //

  const classes = ['fd-object-header-attribute']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      <label className='fd-object-header-attribute__label'>
        {label}
      </label>
      <div className='fd-object-header-attribute__text'>
        {text}
      </div>
    </div>
  )
}