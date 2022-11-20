import React from 'react'

import {
  AccentColors,
  Button,
  ButtonDesigns,
  SegmentedButton
} from 'lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Button',
  labels: [
    { label: '', text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { label: '', text: 'in progress', accentColor: AccentColors.COLOR_5 },
    { label: '', text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'The button component is used to trigger an action. All buttons are characterized by the fd-button class and an additional modifier class to specify each button type.',
  types: [{
    id: 'Button',
    props: [
      { id: 'selectedTab', type: 'boolean', description: 'The identifier of the currently selected tab' },
    ],
  }],
  examples: [{
    title: 'Primary',
    result: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button
          text='Create'
        />
        <Button
          ariaLabel='Add to cart'
          icon='cart'
        />
        <Button
          design={ButtonDesigns.EMPHASIZED}
          text='Save'
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem' }}>`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    text='Create'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    ariaLabel='Add to cart'`}</div>
        <div>{`    icon='cart'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    design={ButtonDesigns.EMPHASIZED}`}</div>
        <div>{`    text='Save'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Button styles',
    description: (
      <ul>
        <li><strong>Default button</strong> is used for neutral or informative (secondary) actions.</li>
        <li><strong>Emphasized button</strong> is used to indicate the primary action on the screen.</li>
        <li><strong>Ghost button</strong> is used to trigger secondary actions. If a page already has a primary action, but you also need to highlight the most important action in a content toolbar, use the ghost style.</li>
        <li><strong>Positive button</strong> is used to trigger positive semantic actions, such as Accept and should always be accompanied by text.</li>
        <li><strong>Negative button</strong> is used to trigger negative semantic actions, such as Reject and should always be accompanied by text.</li>
        <li><strong>Attention button</strong> is used to trigger a semantic action that needs attention and should always be accompanied by text.</li>
        <li><strong>Transparent button</strong> is used to trigger a negative path action within a header or footer bar, and secondary actions in toolbars.</li>
      </ul>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button
          text='Default Button'
        />
        <Button
          design={ButtonDesigns.EMPHASIZED}
          text='Emphasized Button'
        />
        <Button
          design={ButtonDesigns.GHOST}
          text='Ghost Button'
        />
        <Button
          design={ButtonDesigns.POSITIVE}
          text='Positive Button'
        />
        <Button
          design={ButtonDesigns.NEGATIVE}
          text='Negative Button'
        />
        <Button
          design={ButtonDesigns.ATTENTION}
          text='Attention Button'
        />
        <Button
          design={ButtonDesigns.TRANSPARENT}
          text='Transparent Button'
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    text='Default Button'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    design={ButtonDesigns.EMPHASIZED}`}</div>
        <div>{`    text='Emphasized Button'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    design={ButtonDesigns.GHOST}`}</div>
        <div>{`    text='Ghost Button'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    design={ButtonDesigns.POSITIVE}`}</div>
        <div>{`    text='Positive Button'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    design={ButtonDesigns.NEGATIVE}`}</div>
        <div>{`    text='Negative Button'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    design={ButtonDesigns.ATTENTION}`}</div>
        <div>{`    text='Attention Button'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`  <Button`}</div>
        <div>{`    design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`    text='Transparent Button'`}</div>
        <div>{`  />`}</div>
        <br />
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Segmented button',
    description: (
      <>
        <p>The segmented button displays a group of options. Only one option can be active at a time by selecting it, while the others remain or become inactive when the initial option is selected. This button type was previously known as "button group" and is comparable to a radio button group.</p>
        <p>It can be displayed by using the fd-segmented-button class with role="group" and the aria-label="Group label" attribute.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <SegmentedButton ariaLabel='Group label'>
          <Button icon='survey' />
          <Button icon='pie-chart' selected />
          <Button icon='pool' />
        </SegmentedButton>
        <SegmentedButton ariaLabel='Group label'>
          <Button text='Left' compact />
          <Button text='Middle 1' compact />
          <Button text='Middle 2' compact selected />
          <Button text='Right' compact />
        </SegmentedButton>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>`}</div>
        <br />
        <div>{`  <SegmentedButton ariaLabel='Group label'>`}</div>
        <div>{`    <Button icon='survey' />`}</div>
        <div>{`    <Button icon='pie-chart' selected />`}</div>
        <div>{`    <Button icon='pool' />`}</div>
        <div>{`  </SegmentedButton>`}</div>
        <br />
        <div>{`  <SegmentedButton ariaLabel='Group label'>`}</div>
        <div>{`    <Button text='Left' compact />`}</div>
        <div>{`    <Button text='Middle 1' compact />`}</div>
        <div>{`    <Button text='Middle 2' compact selected />`}</div>
        <div>{`    <Button text='Right' compact />`}</div>
        <div>{`  </SegmentedButton>`}</div>
        <br />
        <div>{`</div>`}</div>
      </div>
    )
  }]
}

export const ButtonDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}