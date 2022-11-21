import React from 'react'

import {
  AccentColors,
} from 'lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Icon',
  labels: [
    { label: 'Since', text: 'Version 0.0.10', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'In Progress', accentColor: AccentColors.COLOR_5 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: '',
  types: [{
    id: 'Icon',
    props: [
      { id: '', type: '', description: '' },
    ],
  }],
  examples: [{
    title: '',
    result: (
      <div>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }]
}

export const IconDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}