import React from 'react'

import { AccentColors, Table } from '../../lib'
import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Table',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { text: 'on going', accentColor: AccentColors.COLOR_5 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'A table contains a set of line items and usually comprises rows (with each row showing one line item) and columns. Line items can contain data of any kind, but also interactive elements, for example, for editing the data, navigating, or triggering actions relating to the line item.',
  props: [],
  examples: [{
    title: 'Primary',
    description: 'The primary table contains columns with headers, and rows with links. In the first column, links are displayed. To display links within a table, add the fd-link class within the table data.',
    result: (
      <div>
        <Table
          borderedHorizontal={true}
          borderedVertical={true}
          columns={[{
            key: 'email',
            name: 'Email',
            render: user => <a href='#'>{user.email}</a>
          }, {
            key: 'text',
            name: 'Text'
          }, {
            key: 'name',
            name: 'Middle Name'
          }, {
            key: 'lastName',
            name: 'Last Name'
          }, {
            key: 'date',
            name: 'Date',
            formatter: user => user.date.toLocaleString()
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
        <div>{`  columns={[{`}</div>
        <div>{`    key: 'email',`}</div>
        <div>{`    name: 'Email',`}</div>
        <div>{`    render: user => <a href='#'>{user.email}</a>`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'text',`}</div>
        <div>{`    name: 'Text'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'name',`}</div>
        <div>{`    name: 'Middle Name'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'lastName',`}</div>
        <div>{`    name: 'Last Name'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'date',`}</div>
        <div>{`    name: 'Date',`}</div>
        <div>{`    formatter: user => user.date.toLocaleString()`}</div>
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
    title: 'Borderless',
    description: 'Table can be displayed without borders that separate the columns, column headers, and rows. To display a borderless table, add the fd-table--no-horizontal-borders and fd-table--no-vertical-borders modifier classes to the main element.',
    result: (
      <div>
        <Table
          columns={[{
            key: 'email',
            name: 'Email',
            render: user => <a href='#'>{user.email}</a>
          }, {
            key: 'text',
            name: 'Text'
          }, {
            key: 'name',
            name: 'Middle Name'
          }, {
            key: 'lastName',
            name: 'Last Name'
          }, {
            key: 'date',
            name: 'Date',
            formatter: user => user.date.toLocaleString()
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
        <div>{`  columns={[{`}</div>
        <div>{`    key: 'email',`}</div>
        <div>{`    name: 'Email',`}</div>
        <div>{`    render: user => <a href='#'>{user.email}</a>`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'text',`}</div>
        <div>{`    name: 'Text'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'name',`}</div>
        <div>{`    name: 'Middle Name'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'lastName',`}</div>
        <div>{`    name: 'Last Name'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'date',`}</div>
        <div>{`    name: 'Date',`}</div>
        <div>{`    formatter: user => user.date.toLocaleString()`}</div>
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
    title: 'Interactive',
    description: 'The table component can be interactive with hoverable and activable cells and rows.',
    result: (
      <div>
        <Table
          borderedHorizontal={true}
          borderedVertical={true}
          columns={[{
            key: 'email',
            name: 'Email',
            render: user => <a href='#'>{user.email}</a>
          }, {
            key: 'text',
            name: 'Text'
          }, {
            key: 'name',
            name: 'Middle Name'
          }, {
            key: 'lastName',
            name: 'Last Name'
          }, {
            key: 'date',
            name: 'Date',
            formatter: user => user.date.toLocaleString()
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
        <div>{`<Table`}</div>
        <div>{`  borderedHorizontal={true}`}</div>
        <div>{`  borderedVertical={true}`}</div>
        <div>{`  columns={[{`}</div>
        <div>{`    key: 'email',`}</div>
        <div>{`    name: 'Email',`}</div>
        <div>{`    render: user => <a href='#'>{user.email}</a>`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'text',`}</div>
        <div>{`    name: 'Text'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'name',`}</div>
        <div>{`    name: 'Middle Name'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'lastName',`}</div>
        <div>{`    name: 'Last Name'`}</div>
        <div>{`  }, {`}</div>
        <div>{`    key: 'date',`}</div>
        <div>{`    name: 'Date',`}</div>
        <div>{`    formatter: user => user.date.toLocaleString()`}</div>
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
  }]
}
export const TableDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}