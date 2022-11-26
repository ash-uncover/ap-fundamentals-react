import React, { ReactElement } from 'react'
// Constants
import { TableCellIndicator } from '../../constants/TableCellIndicator'
import { TableCellType } from '../../constants/TableCellType'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { TableCell } from '../../components/table/TableCell'
import { TableHeaderCell } from '../../components/table/TableHeaderCell'
import { TableRow } from '../../components/table/TableRow'

import './Table.css'

/*
  <Table
    columns={[
      { key: 'firstName', name: 'First Name', render: v => <strong>{v}</strong> },
      { key: 'lastName', name: 'Last Name' },
      { key: 'email', name: 'Email' },
      { key: 'date', name: 'Join Date' },
    ]}
    rows={[
      { data: { id: 'user1', firstName: 'Titi', lastName: 'Fifi' } },
      { data: { firstName: 'Toto', lastName: 'Fofo' } },
      { data: { firstName: 'Tata' } },
    ]}
  />
 */

export interface TableInfo {
  borderedHorizontal?: boolean
  borderedVertical?: boolean
  compact?: boolean
  indicator?: boolean
  columns: TableColumn[]
  rows?: TableRow[]
  showHeaders?: boolean
  children?: ReactElement | ReactElement[]
  onRowClick?: (id: string) => void
}
export type TableColumn = {
  key: string
  name?: string
  type?: TableCellType
  indicator?: TableCellIndicator
  render?: (value: any) => ReactElement
  formatter?: (value: any) => string | ReactElement
}
export type TableRow = {
  className?: string
  indicator?: TableCellIndicator
  activable?: boolean
  hoverable?: boolean
  data: TableRowData
  onClick?: () => void
}
export type TableRowData = {
  id: string
  [key: string]: any
}

export const TableCellIndicators: { [key: string]: TableCellIndicator } = {
  VALID: 'valid',
  WARNING: 'warning',
  ERROR: 'error',
  INFORMATION: 'information'
}

export interface TableProperties extends
  FioriComponentProperties,
  TableInfo { }

export const Table = ({
  className,
  style,

  borderedHorizontal,
  borderedVertical,
  compact,
  indicator,
  columns,
  rows,
  showHeaders = true,

  onRowClick,

  children,
}: TableProperties) => {

  // Events //

  const onRowClicked = (id: string) => {
    if (onRowClick) {
      onRowClick(id)
    }
  }

  // Rendering //

  const classes = ['fd-table']
  if (className) {
    classes.push(className)
  }
  if (!borderedVertical) {
    classes.push('fd-table--no-vertical-borders')
  }
  if (!borderedHorizontal) {
    classes.push('fd-table--no-horizontal-borders')
  }
  if (compact) {
    classes.push('fd-table--compact')
  }

  return (
    <table
      className={classes.join(' ')}
      style={style}
    >
      {showHeaders ?
        <thead className='fd-table__header'>
          <TableRow>
            <>
              {indicator ?
                <TableCell
                  type='status-indicator'
                />
                : null}
              {columns.map(column => (
                <TableHeaderCell
                  key={column.key}
                  type={column.type}
                >
                  <span>{column.name}</span>
                </TableHeaderCell>
              ))}
            </>
          </TableRow>
        </thead>
        : null}
      <tbody className='fd-table__body'>
        {rows?.map((row, index) => (
          <TableRow
            key={row.data.id}
            activable={row.activable}
            hoverable={row.hoverable}
            onClick={() => onRowClicked(row.data.id)}
          >
            <>
              {indicator
                ? (
                  <TableCell
                    type='status-indicator'
                    indicator={row.indicator}
                  />
                )
                : null}
              {columns.map((column) => {
                const rendered = column.render || ((data) => (<span className='fd-table__cell__label'>{column.formatter ? column.formatter(data) : data[column.key]}</span>))
                return (
                  <TableCell
                    key={column.key}
                  >
                    {rendered(row.data)}
                  </TableCell>
                )
              })}
            </>
          </TableRow>
        ))}
        {children}
      </tbody>
    </table>
  )
}