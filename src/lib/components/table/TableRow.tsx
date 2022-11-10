import React, { ReactElement } from 'react'

export interface TableRowProperties {
  activable?: boolean
  hoverable?: boolean
  children: ReactElement | ReactElement[]
}

export const TableRow = ({
  activable,
  hoverable,
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

  return (
    <tr className={classes.join(' ')}>
      {children}
    </tr>
  )
}