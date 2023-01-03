import React, { ReactNode } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { ObjectListItem, ObjectListItemProperties } from '../../components/object/ObjectListItem'

export interface ObjectListInfo {
  ariaLabeledBy: string
  items?: ObjectListItemProperties[]
  children?: ReactNode
  bordered?: boolean
}

export interface ObjectListProperties extends
  FioriComponentProperties,
  ObjectListInfo { }

export const ObjectList = ({
  className,
  style,

  ariaLabeledBy,
  items,
  children,
  bordered,
}: ObjectListProperties) => {

  // Rendering //

  const classes = ['fd-list fd-object-list']
  if (className) {
    classes.push(className)
  }
  if (!bordered) {
    classes.push('fd-list--no-border')
  }

  return (
    <ul
      className={classes.join(' ')}
      role='list'
      aria-labelledby={ariaLabeledBy}
      style={style}
    >
      {items?.map((item, index) => {
        return (
          <ObjectListItem key={`item-${index}`} {...item} />
        )
      })}
      {children}
    </ul>
  )
}