import React from 'react'

import {
  AccentColors,
  Breadcrumb,
  Button,
  ButtonDesigns,
  InfoLabel,
  ObjectMarker,
  ObjectNumber,
  ObjectStatus,
  Page,
  PageBody,
  PageHeader,
  PageHeaderAttribute,
  Semantics
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
      <Page style={{ height: '400px' }}>
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
            initials: 'AV',
            accentColor: AccentColors.COLOR_9
          }}
          attributes={[
            <PageHeaderAttribute
              label='Marker 1'
              semantic={Semantics.POSITIVE}
              text='Positive Maker'
              type='status'
            />,
            <PageHeaderAttribute
              label='Marker 2'
              semantic={Semantics.NEGATIVE}
              text='-2345.78€'
              type='status'
            />,
            <PageHeaderAttribute
              label='My property'
              text='Text Property are used for longer text such as description that can span a lot and require several lines to display.'
              type='text'
            />,
          ]}
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