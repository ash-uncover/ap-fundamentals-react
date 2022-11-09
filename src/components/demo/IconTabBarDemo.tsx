import { AccentColors, IconTabBar } from 'lib'
import React from 'react'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Icon Tab Bar',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 }
  ],
  description: 'Info Label is a small non-interactive numeric or text-based label. Its primary use is to add user-defined characteristic to an object.',
  props: [
    { id: 'selectedTab', type: 'boolean', description: 'The identifier of the currently selected tab' },
    { id: 'tabs', type: 'IconTabBarItemProperties[]', description: 'List of tabs to display' },
    { id: 'onTabSelect', type: 'Callback (string) => void', description: 'Event called when a tab is selected' },
  ],
  examples: [{
    title: 'Text Only (Inline mode)',
    description: 'The text-only variant is one of the most common types. It allows longer labels, and can also display counters next to the text to indicate the number of items on the tab page. The labels of the tabs do not get truncated. The full text is always shown. As a result, you need to ensure that your labels do not become too long. They should still be easy to read on smaller screens. The control has the same look and feel in Cozy and Compact mode.',
    result: (
      <IconTabBar
        selectedTab='tab1'
        tabs={[
          { id: 'tab1', title: 'Info' },
          { id: 'tab2', title: 'Attachements (16)' },
          { id: 'tab3', title: 'Approvals (42)' },
        ]}
      />
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

export const IconTabBarDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}