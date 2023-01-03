import React, { ReactNode } from 'react'
// Constants
import { TableCellIndicator } from '../../constants/TableCellIndicator'
import { TableCellType } from '../../constants/TableCellType'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface TableCellInfo {
  type?: TableCellType
  indicator?: TableCellIndicator
  activable?: boolean
  hoverable?: boolean

  children?: ReactNode
}

export interface TableCellProperties extends
  FioriComponentProperties,
  TableCellInfo { }

export const TableCell = ({
  className,
  style,

  type,
  indicator,
  activable,
  hoverable,

  children,
}: TableCellProperties) => {

  // Rendering //

  const classes = ['fd-table__cell']
  if (className) {
    classes.push(className)
  }
  if (type) {
    classes.push(`fd-table__cell--${type}`)
  }
  if (type === 'status-indicator' && indicator) {
    classes.push(`fd-table__cell--status-indicator--${indicator}`)
  }
  if (activable) {
    classes.push(`fd-table__cell--activable`)
  }
  if (hoverable) {
    classes.push(`fd-table__cell--hoverable`)
  }

  return (
    <td
      className={classes.join(' ')}
      style={style}
    >
      {children}
    </td>
  )
}
