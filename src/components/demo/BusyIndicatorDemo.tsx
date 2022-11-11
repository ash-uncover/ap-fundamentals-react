import React from 'react'

import { AccentColors, BusyIndicator, BusyIndicatorSizes } from 'lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Busy Indicator',
  labels: [
    { text: 'version 0.0.6', accentColor: AccentColors.COLOR_8 },
    { text: 'in progress', accentColor: AccentColors.COLOR_5 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: (
    <>
      <p>The busy indicator component informs the user about an ongoing operation. Only one busy indicator should be shown at a time.</p>
      <p><strong>Use the busy indicator if:</strong></p>
      <p>The ongoing operation only covers part of a screen that has multiple controls, and:</p>
      <ul>
        <li>You need to display additional information, or</li>
        <li>The user needs to be able to cancel the operation.</li>
      </ul>
      <p><strong>Do not use the busy indicator if:</strong></p>
      <ul>
        <li>The operation takes less than one second.</li>
        <li>You need to block the screen because the user is not supposed to start another operation. In this case, use the Busy Dialog component.</li>
      </ul>
    </>
  ),
  types: [{
    id: 'BusyIndicator',
    props: [
      { id: 'ariaLabel', type: 'string', description: '(Optional) The aria label provided for this busy indicator (defaults to "Loading")' },
      { id: 'size', type: 'BusyIndicatorSize', description: '(Optional) The size of the busy indicator (defaults to SMALL)' },
    ],
  }],
  examples: [{
    title: 'Standard',
    description: 'The standard busy indicator animates a sequence of cascading dots expanding and shrinking in a loop. The component comes in three sizes detailed above. To display the busy indicator, use the fd-busy-indicator class. If you want to display a certain size, add the modifier class of the desired size i.e. --m to the element.',
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <BusyIndicator
          size={BusyIndicatorSizes.LARGE}
        />
        <BusyIndicator
          size={BusyIndicatorSizes.MEDIUM}
        />
        <BusyIndicator />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<BusyIndicator`}</div>
        <div>{`  size={BusyIndicatorSizes.LARGE}`}</div>
        <div>{`/>`}</div>
        <br/>
        <div>{`<BusyIndicator`}</div>
        <div>{`  size={BusyIndicatorSizes.MEDIUM}`}</div>
        <div>{`/>`}</div>
        <br/>
        <div>{`<BusyIndicator />`}</div>
      </div>
    )
  }]
}

export const BusyIndicatorDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}