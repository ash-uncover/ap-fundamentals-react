import React from 'react'

import {
  AccentColors,
  ShellBar,
  InputStates,
} from '../../lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Shell Bar',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { text: 'on going', accentColor: AccentColors.COLOR_6 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: (
    <>
      <p>The shellbar offers consistent, responsive navigation across all products and applications. It also includes support for branding, product navigation, search, notifications, and user settings. This is a composite component comprised of mandatory and optional elements. Shellbar should always be placed inside the shell layout container. As mentioned earlier, it is completely responsive by default with margins and padding already built in.</p>
      <p><strong>Shellbar has two primary container groups:</strong></p>
      <ul>
        <li>Product: for branding and product elements.</li>
        <li>Actions: for search, product links, and user settings.</li>
      </ul>
      <p><strong>Note</strong>: There is a third container group for SAP CoPilot, which is a chatbot feature leveraged internally at SAP. The SAP CoPilot icon is displayed in the product switch example, and can act as a placeholder for third-party chatbot applications.</p>
    </>
  ),
  types: [{
    id: 'ShellBar',
    props: [
      { id: '', type: '', description: '' },
    ],
  }],
  examples: [{
    title: 'Primary',
    description: (
      <>
        <p>The primary shellbar displays a logo, title, and an avatar where the user settings are found. If the avatar does not contain a thumbnail, then the initials of the user will be displayed.</p>
      </>
    ),
    result: (
      <div>
        <ShellBar
          logo='/images/sap-logo.png'
          logoAlt='SAP'
          title='Corporate Portal'
          profile={{
            name: `User Name`,
            initials: `WW`,
            menu: [
              {
                id: 'settings',
                text: 'Settings',
                iconBefore: 'action-settings',
                onItemSelected: () => { alert('Settings')},
              },
              {
                id: 'logout',
                text: 'Signout',
                iconBefore: 'log',
                onItemSelected: () => { alert('Signout')},
              },
            ]
          }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }]
}

export const ShellBarDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}