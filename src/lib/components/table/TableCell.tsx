import React, { ReactElement } from 'react'

export type TableCellType = 'status-indicator' | 'checkbox'
export type TableCellIndicator = 'valid' | 'warning' | 'error' | 'information'

export interface TableCellProperties {
  type?: TableCellType
  indicator?: TableCellIndicator
  activable?: boolean
  hoverable?: boolean
  children?: ReactElement | ReactElement[]
}

export const TableCell = ({
  type,
  indicator,
  activable,
  hoverable,
  children,
}: TableCellProperties) => {

  // Rendering //

  const classes = ['fd-table__cell']
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
    <td className={classes.join(' ')}>
      {children}
    </td>
  )
}
