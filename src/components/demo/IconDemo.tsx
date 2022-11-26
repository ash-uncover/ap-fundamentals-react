import React from 'react'

import {
  AccentColors,
  Icon,
  IconDesigns,
} from 'lib'

import {
  DemoPage
} from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Icon',
  labels: [
    { label: 'Since', text: 'Version 0.0.10', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'Reviewed 0.0.12', accentColor: AccentColors.COLOR_5 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: (
    <>
      <p>Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. They are often used as visual elements within other components, although they can be used independently, given that they can be read by screen readers or have a tooltip for accessibility purposes. See Project Confirguration for instructions on how to use the SAP icon font on your page.</p>
      <p><strong>Use the icon if:</strong></p>
      <ul>
        <li>You want to display an icon for illustrative purposes only, without interaction states, acting as a non-interactive icon/pictogram.</li>
        <li>You intend to pair the icon with another method of communication i.e. with text or a tooltip.</li>
      </ul>
      <p>Note: If an icon needs to be selected or have any interaction states, it is recommended to use the transparent button style. See Button for more details on how to implement it.</p>
    </>
  ),
  types: [{
    id: 'Icon',
    props: [{
      id: 'color',
      type: 'IconDesigns',
      description: 'The color to use for the'
    }, {
      id: 'icon',
      type: 'string',
      description: 'The name of the icon to display'
    }],
  }],
  examples: [{
    title: 'Sizes',
    description: 'Icons don’t have predefined sizes because they align with the font size value. They are vector graphics, meaning they can be easily resized without compromising their appearance. And because icons are essentially a font, there are unlimited sizes.',
    result: (
      <div>
        <Icon
          icon='cart'
        />
        <br />
        <Icon
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <br />
        <Icon
          icon='cart'
          style={{ fontSize: '10rem' }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Icon`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Icon`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<Icon`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '10rem' }}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Colors',
    description: 'There are different semantic statuses that can be applied to the icon by adding a modifier class.',
    result: (
      <div>
        <Icon
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <Icon
          color={IconDesigns.CONTRAST}
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <Icon
          color={IconDesigns.NON_INTERACTIVE}
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <Icon
          color={IconDesigns.TILE}
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <Icon
          color={IconDesigns.MARKER}
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <Icon
          color={IconDesigns.CRITICAL}
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <Icon
          color={IconDesigns.NEGATIVE}
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <Icon
          color={IconDesigns.NEUTRAL}
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <Icon
          color={IconDesigns.POSITIVE}
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
        <Icon
          color={IconDesigns.INFORMATION}
          icon='cart'
          style={{ fontSize: '5rem' }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Icon`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <div>{`<Icon`}</div>
        <div>{`  color={IconDesigns.CONTRAST}`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <div>{`<Icon`}</div>
        <div>{`  color={IconDesigns.NON_INTERACTIVE}`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <div>{`<Icon`}</div>
        <div>{`  color={IconDesigns.TILE}`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <div>{`<Icon`}</div>
        <div>{`  color={IconDesigns.MARKER}`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <div>{`<Icon`}</div>
        <div>{`  color={IconDesigns.CRITICAL}`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <div>{`<Icon`}</div>
        <div>{`  color={IconDesigns.NEGATIVE}`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <div>{`<Icon`}</div>
        <div>{`  color={IconDesigns.NEUTRAL}`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <div>{`<Icon`}</div>
        <div>{`  color={IconDesigns.POSITIVE}`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
        <div>{`<Icon`}</div>
        <div>{`  color={IconDesigns.INFORMATION}`}</div>
        <div>{`  icon='cart'`}</div>
        <div>{`  style={{ fontSize: '5rem' }}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }]
}

export const IconDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}