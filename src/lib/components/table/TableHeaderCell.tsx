import React, { ReactElement } from 'react'
import { TableCellType } from './TableCell'

export interface TableHeaderCellProperties {
  type?: TableCellType
  children?: ReactElement | ReactElement[]
}

export const TableHeaderCell = ({
  children,
  type
}: TableHeaderCellProperties) => {

  // Rendering //

  const classes = ['fd-table__cell']
  if (type) {
    classes.push(`fd-table__cell--${type}`)
  }

  return (
    <th
      className={classes.join(' ')}
      scope='col'
    >
      {children}
    </th>
  )
}
