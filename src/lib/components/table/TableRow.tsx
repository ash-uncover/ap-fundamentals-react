import React, { ReactElement } from 'react'

export interface TableRowProperties {
  children: ReactElement | ReactElement[]
}

export const TableRow = ({
  children
}: TableRowProperties) => {

  // Rendering //

  return (
    <tr className='fd-table__row'>
      {children}
    </tr>
  )
}