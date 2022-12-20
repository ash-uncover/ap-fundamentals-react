import React, { ReactElement } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface TableRowInfo {
  activable?: boolean
  hoverable?: boolean

  onClick?: () => void

  children: ReactElement | ReactElement[]
}
export interface TableRowProperties extends
  FioriComponentProperties,
  TableRowInfo { }

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
  if (className) {
    classes.push(className)
  }
  if (activable) {
    classes.push(`fd-table__row--activable`)
  }
  if (hoverable) {
    classes.push(`fd-table__row--hoverable`)
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