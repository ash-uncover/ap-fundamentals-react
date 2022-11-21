import React from 'react'

import {
  AccentColors,
  List,
} from 'lib'

import { DemoPage } from '../common/DemoPage'
import { ListTypes } from '../../lib'

const DEMO_DATA = {
  title: 'List',
  labels: [
    { label: 'Version', text: 'Version 0.0.7', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_5 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'In SAP Fiori, we distinguish between tables and lists. Both usually contain homogeneous data, but lists generally have rather basic data, while the data in tables tend to be more complex. Lists are mostly used in the master list for a master-detail scenario using the flexible column layout, as well as in Popovers or Dialogs.',
  types: [{
    id: 'List',
    props: [{
      id: 'selectedTab',
      type: 'boolean',
      description: 'The identifier of the currently selected tab',
    },
    {
      id: 'tabs',
      type: 'IconTabBarItemProperties[]',
      description: 'List of tabs to display',
    },
    {
      id: 'onTabSelect',
      type: 'Callback (string) => void',
      description: 'Event called when a tab is selected'
    }],
  }, {
    id: 'ListItem',
    props: [{
      id: 'selectedTab',
      type: 'boolean',
      description: 'The identifier of the currently selected tab',
    },
    {
      id: 'tabs',
      type: 'IconTabBarItemProperties[]',
      description: 'List of tabs to display',
    },
    {
      id: 'onTabSelect',
      type: 'Callback (string) => void',
      description: 'Event called when a tab is selected'
    }],
  }],
  examples: [{
    title: 'Default',
    description: 'The default standard list dislays list items in the standard size, which is ideal for mobile.',
    result: (
      <>
        <List
          items={[
            { text: 'List Item 1' },
            { text: 'List Item 2' },
            { text: 'List Item 3' },
            { text: 'List Item 4' },
          ]}
        />
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'Compact',
    description: 'To display the standard list in compact mode (for desktop), add the fd-list--compact modifier class to the main element.',
    result: (
      <>
        <List
          compact
          items={[
            { text: 'List Item 1' },
            { text: 'List Item 2' },
            { text: 'List Item 3' },
            { text: 'List Item 4' },
          ]}
        />
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<List`}</div>
        <div>{`  compact`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { text: 'List Item 1' },`}</div>
        <div>{`    { text: 'List Item 2' },`}</div>
        <div>{`    { text: 'List Item 3' },`}</div>
        <div>{`    { text: 'List Item 4' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Unread',
    description: 'The fd-list__item--unread modifier will change the font weight to bold for easier legibility.',
    result: (
      <>
        <List
          items={[
            { text: 'List Item 1 Unread', unread: true },
            { text: 'List Item 2 Unread', unread: true },
            { text: 'List Item 3' },
            { text: 'List Item 4' },
          ]}
        />
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<List`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { text: 'List Item 1 Unread', unread: true },`}</div>
        <div>{`    { text: 'List Item 2 Unread', unread: true },`}</div>
        <div>{`    { text: 'List Item 3' },`}</div>
        <div>{`    { text: 'List Item 4' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Interactive',
    description: 'The fd-list__item--interractive will force list item to handle hover and active states. Usage of this modifier is not needed on Selection, Navigation and Action modes.',
    result: (
      <>
        <List
          items={[
            { text: 'List Item 1', interactive: true },
            { text: 'List Item 2', interactive: true },
            { text: 'List Item 3', interactive: true },
            { text: 'List Item 4', interactive: true },
            { text: 'List Item 5 Selected', interactive: true, selected: true },
          ]}
        />
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<List`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { text: 'List Item 1', interactive: true },`}</div>
        <div>{`    { text: 'List Item 2', interactive: true },`}</div>
        <div>{`    { text: 'List Item 3', interactive: true },`}</div>
        <div>{`    { text: 'List Item 4', interactive: true },`}</div>
        <div>{`    { text: 'List Item 5 Selected', interactive: true, selected: true },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Navigation',
    description: 'Standard list items can contain navigation links. To add navigation, add the fd-list—navigation modifier class to the list and the fd-list__item--link modifier class to the list elements that contain links. All items should be navigable.',
    result: (
      <>
        <List
          type={ListTypes.NAVIGATION}
          items={[
            { text: 'List Item 1' },
            { text: 'List Item 2' },
            { text: 'List Item 3' },
          ]}
        />
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<List`}</div>
        <div>{`  navigation`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { text: 'List Item 1' },`}</div>
        <div>{`    { text: 'List Item 2' },`}</div>
        <div>{`    { text: 'List Item 3' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Icon',
    description: 'To display an icon inside standard list items, add the fd-list__icon class along with the icon within the list elements. For example, fd-list__icon sap-icon—lightbulb.',
    result: (
      <>
        <List
          items={[
            { text: 'List Item 1', iconLeft: 'cart' },
            { text: 'List Item 2', iconLeft: 'wrench' },
            { text: 'List Item 3', iconRight: 'lightbulb' },
            { text: 'List Item 3', iconRight: 'history' },
          ]}
        />
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<List`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { text: 'List Item 1', iconLeft: 'cart' },`}</div>
        <div>{`    { text: 'List Item 2', iconLeft: 'wrench' },`}</div>
        <div>{`    { text: 'List Item 3', iconRight: 'lightbulb' },`}</div>
        <div>{`    { text: 'List Item 3', iconRight: 'history' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }]
}

export const ListDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}