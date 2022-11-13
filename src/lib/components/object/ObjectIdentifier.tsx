import React from 'react'

export interface ObjectIdentifierProperties {
  className?: string
  style?: React.CSSProperties

  bold?: boolean
  medium?: boolean
  text?: string
  title: string
}

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
  if (medium) {
    classes.push('fd-object-identifier--medium')
  }
  if (className) {
    classes.push(className)
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