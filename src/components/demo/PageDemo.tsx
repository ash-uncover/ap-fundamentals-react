import React from 'react'

import {
  AccentColors,
  Breadcrumb,
  Button,
  ButtonDesigns,
  InfoLabel,
  Page,
  PageBody,
  PageHeader
} from 'lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Page',
  labels: [
    { text: 'version 0.0.7', accentColor: AccentColors.COLOR_8 },
    { text: 'in progress', accentColor: AccentColors.COLOR_5 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'Page...',
  types: [{
    id: 'Page',
    props: [
      { id: 'selectedTab', type: 'boolean', description: '' },
    ],
  }, {
    id: 'PageHeader',
    props: [
      { id: 'selectedTab', type: 'boolean', description: '' },
    ],
  }, {
    id: 'PageBody',
    props: [
      { id: 'selectedTab', type: 'boolean', description: '' },
    ],
  }, {
    id: 'PageFooter',
    props: [
      { id: 'selectedTab', type: 'boolean', description: '' },
    ],
  }],
  examples: [{
    title: 'Page Floorplan',
    description: '...',
    result: (
      <Page style={{ height: '300px' }}>
        <PageHeader
          breadcrumb={(
            <Breadcrumb
              ariaLabel='breadcrumb'
              items={[
                { text: 'Level 1' },
                { text: 'Level 2' },
                { text: 'Level 3' }
              ]}
            />
          )}
          // style={{ background: 'red' }}
          title='My Page'
          subtitle='Its a great page'
          actions={[
            <Button compact icon='cart' />,
            <Button compact icon='action' design={ButtonDesigns.TRANSPARENT} />
          ]}
          avatar={{
            icon: 'cart',
            accentColor: AccentColors.COLOR_9
          }}
        />
        <PageBody>
          <div>MY PAGE CONTENT</div>
        </PageBody>
      </Page>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<IconTabBar`}</div>
        <div>{`  selectedTab='tab1'`}</div>
        <div>{`  tabs={[`}</div>
        <div>{`    { id: 'tab1', title: 'Info' },`}</div>
        <div>{`    { id: 'tab2', title: 'Attachements (16)' },`}</div>
        <div>{`    { id: 'tab3', title: 'Approvals (42)' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }]
}

export const PageDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}