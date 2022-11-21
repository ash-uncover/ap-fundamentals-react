import React from 'react'
// Components
import { FioriComponentProperties } from 'components/FioriBase'

export interface ObjectIdentifierInfo {
  bold?: boolean
  medium?: boolean
  text?: string
  title: string
}
export interface ObjectIdentifierProperties extends
  FioriComponentProperties,
  ObjectIdentifierInfo { }

export const ObjectIdentifier = ({
  className,
  style,

  bold,
  medium,
  text,
  title,
}: ObjectIdentifierProperties) => {

  // Rendering //

  const classes = ['fd-object-identifier']
  if (className) {
    classes.push(className)
  }
  if (medium) {
    classes.push('fd-object-identifier--medium')
  }

  const classesTitle = ['fd-object-identifier__title']
  if (bold) {
    classesTitle.push('fd-object-identifier__title--bold')
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <p className={classesTitle.join(' ')}>
        {title}
      </p>
      {text ?
        <p className='fd-object-identifier__text'>
          {text}
        </p>
        : null}
    </div>
  )
}