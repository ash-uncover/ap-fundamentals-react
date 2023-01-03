import React, { ReactNode } from 'react'
// Constants
import { TableCellType } from '../../constants/TableCellType'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface TableHeaderCellInfo {
  type?: TableCellType

  children?: ReactNode
}

export interface TableHeaderCellProperties extends
  FioriComponentProperties,
  TableHeaderCellInfo { }

export const TableHeaderCell = ({
  className,
  style,

  type,

  children,
}: TableHeaderCellProperties) => {

  // Rendering //

  const classes = ['fd-table__cell']
  if (className) {
    classes.push(className)
  }
  if (type) {
    classes.push(`fd-table__cell--${type}`)
  }

  return (
    <th
      className={classes.join(' ')}
      scope='col'
      style={style}
    >
      {children}
    </th>
  )
}
