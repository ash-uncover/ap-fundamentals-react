import React from 'react'

import {
  AccentColors,
  Breadcrumb,
  Button,
  ButtonDesigns,
  Page,
  PageBody,
  PageHeader,
  PageHeaderAttribute,
  Semantics
} from 'lib'

import { demoCallback, DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Page',
  labels: [
    { label: 'Version', text: 'Version 0.0.7', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_5 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
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
            ariaLabel: '',
            initials: 'AV',
            accentColor: AccentColors.COLOR_9
          }}
          attributes={[
            {
              label: 'Marker 1',
              semantic: Semantics.POSITIVE,
              text: 'Positive Marker',
              type: 'status',
            }, {
              label: 'Marker 2',
              semantic: Semantics.NEGATIVE,
              text: '-2345.78€',
              type: 'status',
            }, {
              label: 'My property',
              text: 'Text Property are used for longer text such as description that can span a lot and require several lines to display.',
              type: 'text',
            }
          ]}
        />
        <PageBody>
          <div>MY PAGE CONTENT</div>
        </PageBody>
      </Page>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'Expanded Controlled',
    description: '...',
    result: (
      <Page style={{ height: '400px' }}>
        <PageHeader
          expanded={false}
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
          onExpand={(value: boolean) => { demoCallback(`Page Header: ${value}`) }}
          // style={{ background: 'red' }}
          title='My Page'
          subtitle='Its a great page'
          actions={[
            <Button compact icon='cart' />,
            <Button compact icon='action' design={ButtonDesigns.TRANSPARENT} />
          ]}
          avatar={{
            ariaLabel: '',
            initials: 'AV',
            accentColor: AccentColors.COLOR_9
          }}
          attributes={[
            {
              label: 'Marker 1',
              semantic: Semantics.POSITIVE,
              text: 'Positive Marker',
              type: 'status',
            }, {
              label: 'Marker 2',
              semantic: Semantics.NEGATIVE,
              text: '-2345.78€',
              type: 'status',
            }, {
              label: 'My property',
              text: 'Text Property are used for longer text such as description that can span a lot and require several lines to display.',
              type: 'text',
            }
          ]}
        />
        <PageBody>
          <div>MY PAGE CONTENT</div>
        </PageBody>
      </Page>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }]
}

export const PageDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}