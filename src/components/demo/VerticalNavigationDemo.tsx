import React from 'react'

import {
  AccentColors,
  Popover,
  VerticalNavigation,
  VerticalNavigationItem,
} from '../../lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Vertical Navigation',
  labels: [
    { label: 'Since', text: 'Version 0.0.6', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_5 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: '',
  types: [{
    id: 'VerticalNavigation',
    props: [
      { id: '', type: '', description: '' },
    ],
  }],
  examples: [{
    title: 'Test',
    description: 'TMP',
    result: (
      <VerticalNavigation
        className='app-side-navigation'
        condensed
        label='Menu'
        itemsLabel='Menu'
      >
        <VerticalNavigationItem
          key='overview'
          id='overview'
          condensed
          icon='menu2'
          text={'Overview'}
        />
        <Popover
          control={(
            <VerticalNavigationItem
              key='create'
              id='create'
              condensed
              icon='add'
              text={'Create'}
            />
          )}
        >
          <div>POPO</div>
        </Popover>
      </VerticalNavigation>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'Default',
    description: 'The default vertical navigation is comprised of several navigation list items.',
    result: (
      <VerticalNavigation
        label='Main Menu'
        itemsLabel='Main Menu List'
        items={[{
          id: 'overview',
          text: 'Overview',
          icon: 'home',
        }, {
          id: 'calendar',
          text: 'Calendar Calendar Calendar Calendar Calendar Calendar ',
          icon: 'calendar',
          expanded: true,
          items: [{
            id: 'calendar-item-1',
            text: 'Second level item 1 ',
          }, {
            id: 'calendar-item-2',
            text: 'Second level item 2 ',
          }]
        }, {
          id: 'customers',
          text: 'Customers',
          icon: 'customer',
          expanded: true,
          items: [{
            id: 'customers-item-1',
            text: 'Second level item 1 ',
          }, {
            id: 'customers-item-2',
            text: 'Second level item 2 ',
          }]
        }, {
          id: 'deliveries',
          text: 'Deliveries',
          icon: 'shipping-status',
        }]}
      />
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<VerticalNavigation`}</div>
        <div>{`  label='Main Menu'`}</div>
        <div>{`  itemsLabel='Main Menu List'`}</div>
        <div>{`  items={[{`}</div>
        <div>{`    id: 'overview',`}</div>
        <div>{`    text: 'Overview',`}</div>
        <div>{`    icon: 'home',`}</div>
        <div>{`  }, {`}</div>
        <div>{`    id: 'calendar',`}</div>
        <div>{`    text: 'Calendar Calendar Calendar Calendar Calendar Calendar ',`}</div>
        <div>{`    icon: 'calendar',`}</div>
        <div>{`    expanded: true,`}</div>
        <div>{`    items: [{`}</div>
        <div>{`      id: 'calendar-item-1',`}</div>
        <div>{`      text: 'Second level item 1 ',`}</div>
        <div>{`    }, {`}</div>
        <div>{`      id: 'calendar-item-2',`}</div>
        <div>{`      text: 'Second level item 2 ',`}</div>
        <div>{`    }]`}</div>
        <div>{`  }, {`}</div>
        <div>{`    id: 'customers',`}</div>
        <div>{`    text: 'Customers',`}</div>
        <div>{`    icon: 'customer',`}</div>
        <div>{`    expanded: true,`}</div>
        <div>{`    items: [{`}</div>
        <div>{`      id: 'customers-item-1',`}</div>
        <div>{`      text: 'Second level item 1 ',`}</div>
        <div>{`    }, {`}</div>
        <div>{`      id: 'customers-item-2',`}</div>
        <div>{`      text: 'Second level item 2 ',`}</div>
        <div>{`    }]`}</div>
        <div>{`  }, {`}</div>
        <div>{`    id: 'deliveries',`}</div>
        <div>{`    text: 'Deliveries',`}</div>
        <div>{`    icon: 'shipping-status',`}</div>
        <div>{`  }]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Condensed',
    description: 'In condensed mode, only icons are shown unless some navigation items have second levels and the second level is expanded.',
    result: (
      <VerticalNavigation
        label='Main Menu'
        itemsLabel='Main Menu List'
        condensed={true}
        items={[{
          id: 'overview',
          text: 'Overview',
          icon: 'home',
        }, {
          id: 'calendar',
          text: 'Calendar Calendar Calendar Calendar Calendar Calendar ',
          icon: 'calendar',
          expanded: false,
        }, {
          id: 'customers',
          text: 'Customers',
          icon: 'customer',
          expanded: false,
        }, {
          id: 'deliveries',
          text: 'Deliveries',
          icon: 'shipping-status',
        }]}
      />
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<VerticalNavigation`}</div>
        <div>{`  label='Main Menu'`}</div>
        <div>{`  itemsLabel='Main Menu List'`}</div>
        <div>{`  condensed={true}`}</div>
        <div>{`  items={[{`}</div>
        <div>{`    id: 'overview',`}</div>
        <div>{`    text: 'Overview',`}</div>
        <div>{`    icon: 'home',`}</div>
        <div>{`  }, {`}</div>
        <div>{`    id: 'calendar',`}</div>
        <div>{`    text: 'Calendar Calendar Calendar Calendar Calendar Calendar ',`}</div>
        <div>{`    icon: 'calendar',`}</div>
        <div>{`    expanded: false,`}</div>
        <div>{`  }, {`}</div>
        <div>{`    id: 'customers',`}</div>
        <div>{`    text: 'Customers',`}</div>
        <div>{`    icon: 'customer',`}</div>
        <div>{`    expanded: false,`}</div>
        <div>{`  }, {`}</div>
        <div>{`    id: 'deliveries',`}</div>
        <div>{`    text: 'Deliveries',`}</div>
        <div>{`    icon: 'shipping-status',`}</div>
        <div>{`  }]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }]
}

export const VerticalNavigationDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}