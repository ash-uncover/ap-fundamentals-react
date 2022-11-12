import React from 'react'

import {
  AccentColors,
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
      <Page>
        <PageHeader
          style={{ background: 'red' }}
          title='My Page'
          subtitle='Its a great page'
          content={<InfoLabel text='Best Page' accentColor={AccentColors.COLOR_6} />}
          actions={[
            <Button icon='cart' />,
            <Button icon='action' design={ButtonDesigns.TRANSPARENT} />
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