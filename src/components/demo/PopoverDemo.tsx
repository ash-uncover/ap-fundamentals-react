import React from 'react'

import { AccentColors, Popover } from '../../lib'
import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Popover',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { text: 'on going', accentColor: AccentColors.COLOR_5 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'The popover displays additional information for an object in a compact way without leaving the page. The component contains two essential elements: the control (trigger) and body (content). It can also be paired with a Menu, whereas the menu button would trigger a dropdown (body).',
  types: [{
    id: 'Popover',
    props: [
      { id: 'icon', type: 'string', description: '(Optional) If provided, an icon will be displayed as the first element of the Info Label' },
    ]
  }],
  examples: [{
    title: '',
    description: '',
    result: (
      <div>
      </div>
    ),
    code: (
      <div>
      </div>
    )
  }],
}

export const PopoverDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}