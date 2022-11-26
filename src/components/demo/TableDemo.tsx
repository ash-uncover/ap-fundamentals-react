import React from 'react'

import { StringUtils } from '@uncover/js-utils'

import {
  AccentColors,
  Avatar,
  Button,
  ButtonDesigns,
  Sizes,
  Table
} from '../../lib'

import { demoCallback, DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Table',
  labels: [
    { labe: 'Since', text: 'Version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { labe: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_5 },
    { labe: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
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
          onRowClick={(id) => demoCallback(`row clicked ${id}`)}
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
                onClick={() => demoCallback('actions clicked')}
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
        <div>{`<Table`}</div>
        <div>{`  borderedHorizontal={true}`}</div>
        <div>{`  borderedVertical={true}`}</div>
        <div>{'  onRowClick={(id) => demoCallback(`row clicked ${id}`)}'}</div>
        <div>{`  columns={[{`}</div>
        <div>{`    key: 'avatar',`}</div>
        <div>{`    name: 'User',`}</div>
        <div>{`    render: (row) => (`}</div>
        <div>{`      <Avatar`}</div>
        <div>{'        ariaLabel={`${row.name} ${row.lastName}`}'}</div>
        <div>{'        initials={`${StringUtils.capitalizeFirst(row.name)}${StringUtils.capitalizeFirst(row.lastName)}`}'}</div>
        <div>{`        size={Sizes.X_SMALL}`}</div>
        <div>{`      />`}</div>
        <div>{`    )`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'email',`}</div>
        <div>{`    name: 'Email',`}</div>
        <div>{`    render: user => <a href='#'>{user.email}</a>`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'text',`}</div>
        <div>{`    name: 'Text'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'date',`}</div>
        <div>{`    name: 'Date',`}</div>
        <div>{`    formatter: user => user.date.toLocaleString()`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'actions',`}</div>
        <div>{`    name: '',`}</div>
        <div>{`    render: () => (`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='overflow'`}</div>
        <div>{`        design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`        compact`}</div>
        <div>{`        onClick={() => demoCallback('actions clicked')}`}</div>
        <div>{`      />`}</div>
        <div>{`    )`}</div>
        <div>{`  }]}`}</div>
        <div>{`  rows={[{`}</div>
        <div>{`    data: {`}</div>
        <div>{`      id: 'user1',`}</div>
        <div>{`      text: 'I am User One',`}</div>
        <div>{`      email: 'user1@email.com',`}</div>
        <div>{`      name: 'User',`}</div>
        <div>{`      lastName: 'One',`}</div>
        <div>{`      date: new Date(2010, 1, 5)`}</div>
        <div>{`    }`}</div>
        <div>{`  }, {`}</div>
        <div>{`    data: {`}</div>
        <div>{`      id: 'user2',`}</div>
        <div>{`      text: 'I am User Two',`}</div>
        <div>{`      email: 'user2@email.com',`}</div>
        <div>{`      name: 'User',`}</div>
        <div>{`      lastName: 'Two',`}</div>
        <div>{`      date: new Date(2011, 1, 5)`}</div>
        <div>{`    }`}</div>
        <div>{`  }, {`}</div>
        <div>{`    data: {`}</div>
        <div>{`      id: 'user3',`}</div>
        <div>{`      text: 'I am User Three',`}</div>
        <div>{`      email: 'user3@email.com',`}</div>
        <div>{`      name: 'User',`}</div>
        <div>{`      lastName: 'Three',`}</div>
        <div>{`      date: new Date(2012, 1, 5)`}</div>
        <div>{`    }`}</div>
        <div>{`  }]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Without header',
    description: 'Table header can be ommited by adding the "showHeader={false} property.',
    result: (
      <div>
        <Table
          borderedHorizontal={true}
          borderedVertical={true}
          showHeaders={false}
          onRowClick={(id) => demoCallback(`row clicked ${id}`)}
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
                onClick={() => demoCallback('actions clicked')}
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