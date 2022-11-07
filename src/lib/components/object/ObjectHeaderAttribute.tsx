import React from 'react'
import './ObjectHeaderAttribute.css'
export interface ObjectHeaderAttributesProperties {
  className?: string,
  label: string,
  text: string,
}
export const ObjectHeaderAttributes = ({
  className,
  label,
  text,
}: ObjectHeaderAttributesProperties) => {

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