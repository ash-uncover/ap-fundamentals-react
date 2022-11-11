import React from 'react'

import { AccentColors, Breadcrumb } from 'lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Breadcrumb',
  labels: [
    { text: 'version 0.0.6', accentColor: AccentColors.COLOR_8 },
    { text: 'in progress', accentColor: AccentColors.COLOR_5 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'The breadcrumb component is a type of navigation that indicates the position of a page within the application’s page hierarchy. Users can navigate backward by selecting the previous pages in the navigation path.',
  types: [{
    id: 'Breadcrumb',
    props: [
      { id: 'ariaLabel', type: 'string', description: 'Event called when a tab is selected' },
      { id: 'items', type: 'BreadcrumbItem[]', description: 'Event called when a tab is selected' },
      { id: 'onItemSelected', type: '(string) => void', description: 'Event called when a tab is selected' },
    ],
  }, {
    id: 'BreadcrumbItem',
    props: [
      { id: 'text', type: 'string', description: 'Event called when a tab is selected' },
      { id: 'current', type: 'boolean', description: 'Event called when a tab is selected' },
      { id: 'onItemSelected', type: '() => void', description: 'Event called when a tab is selected' },
    ],
  }],
  examples: [{
    title: 'Standard',
    description: 'The standard breadcrumb component displays several pages in text format separated by dividers, indicating a navigation path. Each page can be specifically selected to navigate to its corresponding page. It can be displayed by using the fd-breadcrumb class.',
    result: (
      <Breadcrumb
        ariaLabel='Product Breadcrumb'
        items={[
          { text: 'Product' },
          { text: 'Suppliers' },
          { text: 'Titanium' },
          { text: 'Ultra Portable' },
          { text: '12 inch' },
          { text: 'Super portable deluxe' },
          { text: 'Laptop' },
        ]}
        onItemSelected={() => { }}
      />
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Breadcrumb`}</div>
        <div>{`  ariaLabel='Product Breadcrumb'`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { text: 'Product' },`}</div>
        <div>{`    { text: 'Suppliers' },`}</div>
        <div>{`    { text: 'Titanium' },`}</div>
        <div>{`    { text: 'Ultra Portable' },`}</div>
        <div>{`    { text: '12 inch' },`}</div>
        <div>{`    { text: 'Super portable deluxe' },`}</div>
        <div>{`    { text: 'Laptop' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`  onItemSelected={() => {}}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }]
}

export const BreadcrumbDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}