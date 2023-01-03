import React from 'react'

import {
  AccentColors,
  Button,
  ButtonDesigns,
  SegmentedButton
} from '../../lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Button',
  labels: [
    { label: 'Since', text: 'Version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'In Progress', accentColor: AccentColors.COLOR_5 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: (
    <>
      <p>The button component is used to trigger an action. All buttons are characterized by the fd-button class and an additional modifier class to specify each button type.</p>
      <p><strong>Use the button types as follows:</strong></p>
      <ul>
        <li>Use simple buttons for specific actions, such as:</li>
        <ul>
          <li>Create, Edit, Save</li>
          <li>Approve, Reject</li>
          <li>Accept, Decline</li>
          <li>OK, Cancel</li>
        </ul>
        <li>If you want the user to select one option from a small group, use a segmented button. For example: Small, Medium, Large</li>
        <li>Use the menu button if you need a menu that provides more than one option.</li>
      </ul>
      <p><strong>Do not use buttons if:</strong></p>
      <ul>
        <li>You want to link to a different page or object. Instead, use the Link component.</li>
      </ul>
    </>
  ),
  types: [{
    id: 'Button',
    props: [{
      id: 'badge',
      type: 'boolean',
      description: ''
    }, {
      id: 'compact',
      type: 'boolean',
      description: ''
    }, {
      id: 'design',
      type: 'ButtonDesign',
      description: ''
    }, {
      id: 'disabled',
      type: 'boolean',
      description: ''
    }, {
      id: 'icon',
      type: 'string | IconInfo',
      description: ''
    }, {
      id: 'iconAfter',
      type: 'boolean',
      description: ''
    }, {
      id: 'menu',
      type: 'boolean',
      description: ''
    }, {
      id: 'selected',
      type: 'boolean',
      description: ''
    }, {
      id: 'tabIndex',
      type: 'number',
      description: ''
    }, {
      id: 'text',
      type: 'string | number',
      description: ''
    }, {
      id: 'toggled',
      type: 'boolean',
      description: ''
    }, {
      id: 'type',
      type: 'ButtonType',
      description: ''
    }],
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
        <div>{`<Button`}</div>
        <div>{`  text='Create'`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Button`}</div>
        <div>{`  ariaLabel='Add to cart'`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Button`}</div>
        <div>{`  design={ButtonDesigns.EMPHASIZED}`}</div>
        <div>{`  text='Save'`}</div>
        <div>{`/>`}</div>
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
        <div>{`<Button`}</div>
        <div>{`  text='Default Button'`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Button`}</div>
        <div>{`  design={ButtonDesigns.EMPHASIZED}`}</div>
        <div>{`  text='Emphasized Button'`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Button`}</div>
        <div>{`  design={ButtonDesigns.GHOST}`}</div>
        <div>{`  text='Ghost Button'`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Button`}</div>
        <div>{`  design={ButtonDesigns.POSITIVE}`}</div>
        <div>{`  text='Positive Button'`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Button`}</div>
        <div>{`  design={ButtonDesigns.NEGATIVE}`}</div>
        <div>{`  text='Negative Button'`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Button`}</div>
        <div>{`  design={ButtonDesigns.ATTENTION}`}</div>
        <div>{`  text='Attention Button'`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Button`}</div>
        <div>{`  design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`  text='Transparent Button'`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Toggle button',
    description: (
      <>
        <p>A toggle button switches between two actions. One of the actions is always active, one is inactive. Use the toggle button for secondary actions. Apply the <strong>toggled</strong> property to set the action to active.</p>
      </>
    ),
    result: (
      <>
        <p><strong>Inactive state of toggle button</strong></p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Button text='Default Toggle' />
          <Button text='Emphasized Toggle' design={ButtonDesigns.EMPHASIZED} />
          <Button text='Ghost Toggle' design={ButtonDesigns.GHOST} />
          <Button text='Positive Toggle' design={ButtonDesigns.POSITIVE} />
          <Button text='Negative Toggle' design={ButtonDesigns.NEGATIVE} />
          <Button text='Attention Toggle' design={ButtonDesigns.ATTENTION} />
          <Button text='Transparent Toggle' design={ButtonDesigns.TRANSPARENT} />
          <Button text='Action Toggle' menu />
          <Button icon='cart' menu />
          <Button icon='accept' design={ButtonDesigns.POSITIVE} />
        </div>
        <p><strong>Active (toggled) state of toggle button</strong></p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Button toggled text='Default Toggle' />
          <Button toggled text='Emphasized Toggle' design={ButtonDesigns.EMPHASIZED} />
          <Button toggled text='Ghost Toggle' design={ButtonDesigns.GHOST} />
          <Button toggled text='Positive Toggle' design={ButtonDesigns.POSITIVE} />
          <Button toggled text='Negative Toggle' design={ButtonDesigns.NEGATIVE} />
          <Button toggled text='Attention Toggle' design={ButtonDesigns.ATTENTION} />
          <Button toggled text='Transparent Toggle' design={ButtonDesigns.TRANSPARENT} />
          <Button toggled text='Action Toggle' menu />
          <Button toggled icon='cart' menu />
          <Button toggled icon='accept' design={ButtonDesigns.POSITIVE} />
        </div>
        <p><strong>Disabled Toggle button in active state</strong></p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Button toggled disabled text='Default Toggle' />
          <Button toggled disabled text='Emphasized Toggle' design={ButtonDesigns.EMPHASIZED} />
          <Button toggled disabled text='Ghost Toggle' design={ButtonDesigns.GHOST} />
          <Button toggled disabled text='Positive Toggle' design={ButtonDesigns.POSITIVE} />
          <Button toggled disabled text='Negative Toggle' design={ButtonDesigns.NEGATIVE} />
          <Button toggled disabled text='Attention Toggle' design={ButtonDesigns.ATTENTION} />
          <Button toggled disabled text='Transparent Toggle' design={ButtonDesigns.TRANSPARENT} />
          <Button toggled disabled text='Action Toggle' menu />
          <Button toggled disabled icon='cart' menu />
          <Button toggled disabled icon='accept' design={ButtonDesigns.POSITIVE} />
        </div>
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Button text='Default Toggle' />`}</div>
        <div>{`<Button text='Emphasized Toggle' design={ButtonDesigns.EMPHASIZED} />`}</div>
        <div>{`<Button text='Ghost Toggle' design={ButtonDesigns.GHOST} />`}</div>
        <div>{`<Button text='Positive Toggle' design={ButtonDesigns.POSITIVE} />`}</div>
        <div>{`<Button text='Negative Toggle' design={ButtonDesigns.NEGATIVE} />`}</div>
        <div>{`<Button text='Attention Toggle' design={ButtonDesigns.ATTENTION} />`}</div>
        <div>{`<Button text='Transparent Toggle' design={ButtonDesigns.TRANSPARENT} />`}</div>
        <div>{`<Button text='Action Toggle' menu />`}</div>
        <div>{`<Button icon='cart' menu />`}</div>
        <div>{`<Button icon='accept' design={ButtonDesigns.POSITIVE} />`}</div>
        <br />
        <div>{`<Button toggled text='Default Toggle' />`}</div>
        <div>{`<Button toggled text='Emphasized Toggle' design={ButtonDesigns.EMPHASIZED} />`}</div>
        <div>{`<Button toggled text='Ghost Toggle' design={ButtonDesigns.GHOST} />`}</div>
        <div>{`<Button toggled text='Positive Toggle' design={ButtonDesigns.POSITIVE} />`}</div>
        <div>{`<Button toggled text='Negative Toggle' design={ButtonDesigns.NEGATIVE} />`}</div>
        <div>{`<Button toggled text='Attention Toggle' design={ButtonDesigns.ATTENTION} />`}</div>
        <div>{`<Button toggled text='Transparent Toggle' design={ButtonDesigns.TRANSPARENT} />`}</div>
        <div>{`<Button toggled text='Action Toggle' menu />`}</div>
        <div>{`<Button toggled icon='cart' menu />`}</div>
        <div>{`<Button toggled icon='accept' design={ButtonDesigns.POSITIVE} />`}</div>
        <br />
        <div>{`<Button toggled disabled text='Default Toggle' />`}</div>
        <div>{`<Button toggled disabled text='Emphasized Toggle' design={ButtonDesigns.EMPHASIZED} />`}</div>
        <div>{`<Button toggled disabled text='Ghost Toggle' design={ButtonDesigns.GHOST} />`}</div>
        <div>{`<Button toggled disabled text='Positive Toggle' design={ButtonDesigns.POSITIVE} />`}</div>
        <div>{`<Button toggled disabled text='Negative Toggle' design={ButtonDesigns.NEGATIVE} />`}</div>
        <div>{`<Button toggled disabled text='Attention Toggle' design={ButtonDesigns.ATTENTION} />`}</div>
        <div>{`<Button toggled disabled text='Transparent Toggle' design={ButtonDesigns.TRANSPARENT} />`}</div>
        <div>{`<Button toggled disabled text='Action Toggle' menu />`}</div>
        <div>{`<Button toggled disabled icon='cart' menu />`}</div>
        <div>{`<Button toggled disabled icon='accept' design={ButtonDesigns.POSITIVE} />`}</div>
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
        <div>{`<SegmentedButton ariaLabel='Group label'>`}</div>
        <div>{`  <Button icon='survey' />`}</div>
        <div>{`  <Button icon='pie-chart' selected />`}</div>
        <div>{`  <Button icon='pool' />`}</div>
        <div>{`</SegmentedButton>`}</div>
        <br />
        <div>{`<SegmentedButton ariaLabel='Group label'>`}</div>
        <div>{`  <Button text='Left' compact />`}</div>
        <div>{`  <Button text='Middle 1' compact />`}</div>
        <div>{`  <Button text='Middle 2' compact selected />`}</div>
        <div>{`  <Button text='Right' compact />`}</div>
        <div>{`</SegmentedButton>`}</div>
      </div>
    )
  }, {
    title: 'Button With Badge',
    description: (
      <>
        <p>Button gets a badge in cases of collecting a number of items from various pages in order to trigger an action.</p>
        <p>Currently the Emphasized, Standard, Ghost and Transparent design of buttons are recommended to be used with Badge.</p>
        <p><strong>Badges cannot contain more characters than 4.</strong></p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button text='Cozy Badge Button' badge='3984' />
        <Button icon='cart' badge='3' />
        <Button text='Compact Badge Button' compact badge='654' />
        <Button icon='cart' compact badge='12' />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Button text='Cozy Badge Button' badge='3984' />`}</div>
        <div>{`<Button icon='cart' badge='3' />`}</div>
        <div>{`<Button text='Compact Badge Button' compact badge='654' />`}</div>
        <div>{`<Button icon='cart' compact badge='12' />`}</div>
      </div>
    )
  }]
}

export const ButtonDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}