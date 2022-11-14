import React, { ReactElement } from 'react'

import { TableCell, TableCellIndicator, TableCellType } from './TableCell'
import { TableHeaderCell } from './TableHeaderCell'
import { TableRow } from './TableRow'

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
export interface TableProperties {
  borderedHorizontal?: boolean
  borderedVertical?: boolean
  compact?: boolean
  indicator?: boolean
  columns: TableColumn[]
  rows?: TableRow[]
  children?: ReactElement | ReactElement[]
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

export const Table = ({
  borderedHorizontal,
  borderedVertical,
  compact,
  indicator,
  columns,
  rows,
  children,
}: TableProperties) => {

  // Rendering //

  const classes = ['fd-table']
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
    <table className={classes.join(' ')}>
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
      <tbody className='fd-table__body'>
        {rows?.map((row, index) => (
          <TableRow
            key={row.data.id}
            activable={row.activable}
            hoverable={row.hoverable}
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