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
      { id: 'contrast', type: 'boolean', description: '(Optional) Sets the busy indicator to contrst mode for display on darker backgrounds' },
      { id: 'label', type: 'string', description: '(Optional) Disaplys an additional text information below the indicator' },
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
        <div>{`<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>`}</div>
        <br />
        <div>{`  <BusyIndicator`}</div>
        <div>{`    size={BusyIndicatorSizes.LARGE}`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <BusyIndicator`}</div>
        <div>{`    size={BusyIndicatorSizes.MEDIUM}`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <BusyIndicator />`}</div>
        <br />
        <div>{`</div>>`}</div>
      </div>
    )
  }, {
    title: 'Contrast Mode',
    description: 'The busy indicator also comes in contrast mode and displays white dots against a dark background. To apply contrast mode, add contrast into the element i.e. fd-busy-indicator--m contrast.',
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: 'cadetblue', padding: '2rem' }}>
        <BusyIndicator
          contrast
          size={BusyIndicatorSizes.LARGE}
        />
        <BusyIndicator
          contrast
          size={BusyIndicatorSizes.MEDIUM}
        />
        <BusyIndicator
          contrast
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: 'cadetblue', padding: '2rem' }}>`}</div>
        <br />
        <div>{`  <BusyIndicator`}</div>
        <div>{`    contrast`}</div>
        <div>{`    size={BusyIndicatorSizes.LARGE}`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <BusyIndicator`}</div>
        <div>{`    contrast`}</div>
        <div>{`    size={BusyIndicatorSizes.MEDIUM}`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <BusyIndicator`}</div>
        <div>{`    contrast`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`</div>>`}</div>
      </div>
    )
  }, {
    title: 'Extended Busy Indicator',
    description: 'If more information needs to be displayed with the loading animation, it is replaced by the Extended Busy Indicator fd-busy-indicator-extended. The additional information is wrapped in an element with fd-busy-indicator-extended__label class.',
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <BusyIndicator
          label='Loading data...'
          size={BusyIndicatorSizes.LARGE}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>`}</div>
        <br />
        <div>{`  <BusyIndicator`}</div>
        <div>{`    label='Loading data...'`}</div>
        <div>{`    size={BusyIndicatorSizes.LARGE}`}</div>
        <div>{`  />`}</div>
        <br />
        <br />
        <div>{`</div>>`}</div>
      </div>
    )
  }, {
    title: 'Extended Busy Indicator Inside Message Toast',
    description: 'At the Page level the Busy Indicator should always be placed in a container. The simplest form of container will be centred on the page and inherit the color values from Message Toast.',
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <BusyIndicator
          toast
          label='Loading data...'
          size={BusyIndicatorSizes.LARGE}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>`}</div>
        <br />
        <div>{`  <BusyIndicator`}</div>
        <div>{`    toast`}</div>
        <div>{`    label='Loading data...'`}</div>
        <div>{`    size={BusyIndicatorSizes.LARGE}`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`</div>>`}</div>
      </div>
    )
  }]
}

export const BusyIndicatorDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}