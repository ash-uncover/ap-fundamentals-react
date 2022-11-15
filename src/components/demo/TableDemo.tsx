import { StringUtils } from '@uncover/js-utils'
import React from 'react'

import { AccentColors, Avatar, Button, ButtonDesigns, Sizes, Table } from '../../lib'
import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Table',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { text: 'on going', accentColor: AccentColors.COLOR_5 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'A table contains a set of line items and usually comprises rows (with each row showing one line item) and columns. Line items can contain data of any kind, but also interactive elements, for example, for editing the data, navigating, or triggering actions relating to the line item.',
  types: [],
  examples: [{
    title: 'Primary',
    description: 'The primary table contains columns with headers, and rows with links. In the first column, links are displayed. To display links within a table, add the fd-link class within the table data.',
    result: (
      <div>
        <Table
          borderedHorizontal={true}
          borderedVertical={true}
          columns={[{
            key: 'avatar',
            name: 'User',
            render: (row) => (
              <Avatar
                ariaLabel={`${row.name} ${row.lastName}`}
                initials={`${StringUtils.capitalizeFirst(row.name)}${StringUtils.capitalizeFirst(row.lastName)}`}
                size={Sizes.X_SMALL}
              />
            )
          }, {
            key: 'email',
            name: 'Email',
            render: user => <a href='#'>{user.email}</a>
          }, {
            key: 'text',
            name: 'Text'
          }, {
            key: 'date',
            name: 'Date',
            formatter: user => user.date.toLocaleString()
          }, {
            key: 'actions',
            name: '',
            render: () => (
              <Button
                icon='overflow'
                design={ButtonDesigns.TRANSPARENT}
                compact
              />
            )
          }]}
          rows={[{
            data: {
              id: 'user1',
              text: 'I am User One',
              email: 'user1@email.com',
              name: 'User',
              lastName: 'One',
              date: new Date(2010, 1, 5)
            }
          }, {
            data: {
              id: 'user2',
              text: 'I am User Two',
              email: 'user2@email.com',
              name: 'User',
              lastName: 'Two',
              date: new Date(2011, 1, 5)
            }
          }, {
            data: {
              id: 'user3',
              text: 'I am User Three',
              email: 'user3@email.com',
              name: 'User',
              lastName: 'Three',
              date: new Date(2012, 1, 5)
            }
          }]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Borderless',
    description: 'Table can be displayed without borders that separate the columns, column headers, and rows. To display a borderless table, add the fd-table--no-horizontal-borders and fd-table--no-vertical-borders modifier classes to the main element.',
    result: (
      <div>
        <Table
          columns={[{
            key: 'avatar',
            name: 'User',
            render: (row) => (
              <Avatar
                ariaLabel={`${row.name} ${row.lastName}`}
                initials={`${StringUtils.capitalizeFirst(row.name)}${StringUtils.capitalizeFirst(row.lastName)}`}
                size={Sizes.X_SMALL}
              />
            )
          }, {
            key: 'email',
            name: 'Email',
            render: user => <a href='#'>{user.email}</a>
          }, {
            key: 'text',
            name: 'Text'
          }, {
            key: 'date',
            name: 'Date',
            formatter: user => user.date.toLocaleString()
          }, {
            key: 'actions',
            name: '',
            render: () => (
              <Button
                icon='overflow'
                design={ButtonDesigns.TRANSPARENT}
                compact
              />
            )
          }]}
          rows={[{
            data: {
              id: 'user1',
              text: 'I am User One',
              email: 'user1@email.com',
              name: 'User',
              lastName: 'One',
              date: new Date(2010, 1, 5)
            }
          }, {
            data: {
              id: 'user2',
              text: 'I am User Two',
              email: 'user2@email.com',
              name: 'User',
              lastName: 'Two',
              date: new Date(2011, 1, 5)
            }
          }, {
            data: {
              id: 'user3',
              text: 'I am User Three',
              email: 'user3@email.com',
              name: 'User',
              lastName: 'Three',
              date: new Date(2012, 1, 5)
            }
          }]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

      </div>
    )
  }, {
    title: 'Interactive',
    description: 'The table component can be interactive with hoverable and activable cells and rows.',
    result: (
      <div>
        <Table
          borderedHorizontal={true}
          borderedVertical={true}
          columns={[{
            key: 'avatar',
            name: 'User',
            render: (row) => (
              <Avatar
                ariaLabel={`${row.name} ${row.lastName}`}
                initials={`${StringUtils.capitalizeFirst(row.name)}${StringUtils.capitalizeFirst(row.lastName)}`}
                size={Sizes.X_SMALL}
              />
            )
          }, {
            key: 'email',
            name: 'Email',
            render: user => <a href='#'>{user.email}</a>
          }, {
            key: 'text',
            name: 'Text'
          }, {
            key: 'date',
            name: 'Date',
            formatter: user => user.date.toLocaleString()
          }, {
            key: 'actions',
            name: '',
            render: () => (
              <Button
                icon='overflow'
                design={ButtonDesigns.TRANSPARENT}
                compact
              />
            )
          }]}
          rows={[{
            hoverable: true,
            data: {
              id: 'user1',
              text: 'I am User One',
              email: 'user1@email.com',
              name: 'User',
              lastName: 'One',
              date: new Date(2010, 1, 5)
            }
          }, {
            activable: true,
            hoverable: true,
            data: {
              id: 'user2',
              text: 'I am User Two',
              email: 'user2@email.com',
              name: 'User',
              lastName: 'Two',
              date: new Date(2011, 1, 5)
            }
          }, {
            activable: true,
            data: {
              id: 'user3',
              text: 'I am User Three',
              email: 'user3@email.com',
              name: 'User',
              lastName: 'Three',
              date: new Date(2012, 1, 5)
            }
          }]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Click Events',
    description: '',
    result: (
      <div>
        <Table
          borderedHorizontal={true}
          borderedVertical={true}
          onRowClick={(id) => window.alert(`[Table] Row clicked ${id}`)}
          columns={[{
            key: 'avatar',
            name: 'User',
            render: (row) => (
              <Avatar
                ariaLabel={`${row.name} ${row.lastName}`}
                initials={`${StringUtils.capitalizeFirst(row.name)}${StringUtils.capitalizeFirst(row.lastName)}`}
                size={Sizes.X_SMALL}
              />
            )
          }, {
            key: 'email',
            name: 'Email',
            render: user => <a href='#'>{user.email}</a>
          }, {
            key: 'text',
            name: 'Text'
          }, {
            key: 'date',
            name: 'Date',
            formatter: user => user.date.toLocaleString()
          }, {
            key: 'actions',
            name: '',
            render: () => (
              <Button
                icon='overflow'
                design={ButtonDesigns.TRANSPARENT}
                compact
              />
            )
          }]}
          rows={[{
            activable: true,
            hoverable: true,
            data: {
              id: 'user1',
              text: 'I am User One',
              email: 'user1@email.com',
              name: 'User',
              lastName: 'One',
              date: new Date(2010, 1, 5),
            }
          }, {
            activable: true,
            hoverable: true,
            data: {
              id: 'user2',
              text: 'I am User Two',
              email: 'user2@email.com',
              name: 'User',
              lastName: 'Two',
              date: new Date(2011, 1, 5)
            }
          }, {
            activable: true,
            hoverable: true,
            data: {
              id: 'user3',
              text: 'I am User Three',
              email: 'user3@email.com',
              name: 'User',
              lastName: 'Three',
              date: new Date(2012, 1, 5)
            }
          }]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Table`}</div>
        <div>{`  borderedHorizontal={true}`}</div>
        <div>{`  borderedVertical={true}`}</div>
        <div>{`  onRowClick={(id) => window.alert(\`[Table] Row clicked \${id}\`)}`}</div>
        <div>{`  columns={[...]}`}</div>
        <div>{`  rows={[...]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }]
}
export const TableDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}