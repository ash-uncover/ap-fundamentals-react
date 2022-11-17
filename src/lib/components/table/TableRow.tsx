import { FioriComponentProperties } from 'components/FioriBase'
import React, { ReactElement } from 'react'

export interface TableRowProperties extends FioriComponentProperties {
  activable?: boolean
  hoverable?: boolean

  onClick?: () => void

  children: ReactElement | ReactElement[]
}

export const TableRow = ({
  className,
  style,

  activable,
  hoverable,

  onClick,
  
  children
}: TableRowProperties) => {

  // Rendering //

  const classes = ['fd-table__row']
  if (activable) {
    classes.push(`fd-table__row--activable`)
  }
  if (hoverable) {
    classes.push(`fd-table__row--hoverable`)
  }
  if (className) {
    classes.push(className)
  }

  return (
    <tr
      className={classes.join(' ')}
      style={style}
      onClick={onClick}
    >
      {children}
    </tr>
  )
}