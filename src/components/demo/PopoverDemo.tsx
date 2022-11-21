import React from 'react'

import {
  AccentColors,
  Avatar,
  Button,
  Menu,
  Popover,
  Sizes
} from '../../lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Popover',
  labels: [
    { label: 'Since', text: 'Version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_5 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'The popover displays additional information for an object in a compact way without leaving the page. The component contains two essential elements: the control (trigger) and body (content). It can also be paired with a Menu, whereas the menu button would trigger a dropdown (body).',
  types: [{
    id: 'Popover',
    props: [
      {
        id: 'icon',
        type: 'string',
        description: '(Optional) If provided, an icon will be displayed as the first element of the Info Label'
      },
    ]
  }],
  examples: [{
    title: 'Alignment',
    description: 'The popover body can be aligned to the left or right of the control. Additionally, it’s possible to remove the arrow from the body by adding the fd-popover__body--no-arrow modifier class to the body element.',
    result: (
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>
          <Popover
            control={(
              <button
                className='fd-button'
                role='button'
              >
                <i className='sap-icon--navigation-down-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
                { id: 'item3', text: 'Option 3' },
                { id: 'item4', text: 'Option 4' },
              ]}
            />
          </Popover>
          Left-aligned (default)
        </div>
        <div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>
          Right-aligned
          <Popover
            alignRight
            control={(
              <button
                className='fd-button'
                role='button'
              >
                <i className='sap-icon--navigation-down-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
                { id: 'item3', text: 'Option 3' },
                { id: 'item4', text: 'Option 4' },
              ]}
            />
          </Popover>
        </div>
        <div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>
          <Popover
            noArrow
            control={(
              <button
                className='fd-button'
                role='button'
              >
                <i className='sap-icon--navigation-down-arrow'></i>
                Left-aligned (no arrow)
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
                { id: 'item3', text: 'Option 3' },
                { id: 'item4', text: 'Option 4' },
              ]}
            />
          </Popover>
        </div>
        <div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>
          <Popover
            alignRight
            noArrow
            control={(
              <button
                className='fd-button'
                role='button'
              >
                Right-aligned (no arrow)
                <i className='sap-icon--navigation-down-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
                { id: 'item3', text: 'Option 3' },
                { id: 'item4', text: 'Option 4' },
              ]}
            />
          </Popover>
        </div>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>`}</div>
        <div>{`  <Popover`}</div>
        <div>{`    control={(`}</div>
        <div>{`      <button`}</div>
        <div>{`        className='fd-button'`}</div>
        <div>{`        role='button'`}</div>
        <div>{`      >`}</div>
        <div>{`        <i className='sap-icon--navigation-down-arrow'></i>`}</div>
        <div>{`      </button>`}</div>
        <div>{`    )}`}</div>
        <div>{`  >`}</div>
        <div>{`    <Menu`}</div>
        <div>{`      noShadow`}</div>
        <div>{`      items={[`}</div>
        <div>{`        { id: 'item1', text: 'Option 1' },`}</div>
        <div>{`        { id: 'item2', text: 'Option 2' },`}</div>
        <div>{`        { id: 'item3', text: 'Option 3' },`}</div>
        <div>{`        { id: 'item4', text: 'Option 4' },`}</div>
        <div>{`      ]}`}</div>
        <div>{`    />`}</div>
        <div>{`  </Popover>`}</div>
        <div>{`  Left-aligned (default)`}</div>
        <div>{`</div>`}</div>
        <br />
        <div>{`<div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>`}</div>
        <div>{`  Right-aligned`}</div>
        <div>{`  <Popover`}</div>
        <div>{`    alignRight`}</div>
        <div>{`    control={(`}</div>
        <div>{`      <button`}</div>
        <div>{`        className='fd-button'`}</div>
        <div>{`        role='button'`}</div>
        <div>{`      >`}</div>
        <div>{`        <i className='sap-icon--navigation-down-arrow'></i>`}</div>
        <div>{`      </button>`}</div>
        <div>{`    )}`}</div>
        <div>{`  >`}</div>
        <div>{`    <Menu`}</div>
        <div>{`      noShadow`}</div>
        <div>{`      items={[`}</div>
        <div>{`        { id: 'item1', text: 'Option 1' },`}</div>
        <div>{`        { id: 'item2', text: 'Option 2' },`}</div>
        <div>{`        { id: 'item3', text: 'Option 3' },`}</div>
        <div>{`        { id: 'item4', text: 'Option 4' },`}</div>
        <div>{`      ]}`}</div>
        <div>{`    />`}</div>
        <div>{`  </Popover>`}</div>
        <div>{`</div>`}</div>
        <br />
        <div>{`<div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>`}</div>
        <div>{`  <Popover`}</div>
        <div>{`    noArrow`}</div>
        <div>{`    control={(`}</div>
        <div>{`      <button`}</div>
        <div>{`        className='fd-button'`}</div>
        <div>{`        role='button'`}</div>
        <div>{`      >`}</div>
        <div>{`        <i className='sap-icon--navigation-down-arrow'></i>`}</div>
        <div>{`        Left-aligned (no arrow)`}</div>
        <div>{`      </button>`}</div>
        <div>{`    )}`}</div>
        <div>{`  >`}</div>
        <div>{`    <Menu`}</div>
        <div>{`      noShadow`}</div>
        <div>{`      items={[`}</div>
        <div>{`        { id: 'item1', text: 'Option 1' },`}</div>
        <div>{`        { id: 'item2', text: 'Option 2' },`}</div>
        <div>{`        { id: 'item3', text: 'Option 3' },`}</div>
        <div>{`        { id: 'item4', text: 'Option 4' },`}</div>
        <div>{`      ]}`}</div>
        <div>{`    />`}</div>
        <div>{`  </Popover>`}</div>
        <div>{`</div>`}</div>
        <br />
        <div>{`<div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>`}</div>
        <div>{`  <Popover`}</div>
        <div>{`    alignRight`}</div>
        <div>{`    noArrow`}</div>
        <div>{`    control={(`}</div>
        <div>{`      <button`}</div>
        <div>{`        className='fd-button'`}</div>
        <div>{`        role='button'`}</div>
        <div>{`      >`}</div>
        <div>{`        Right-aligned (no arrow)`}</div>
        <div>{`        <i className='sap-icon--navigation-down-arrow'></i>`}</div>
        <div>{`      </button>`}</div>
        <div>{`    )}`}</div>
        <div>{`  >`}</div>
        <div>{`    <Menu`}</div>
        <div>{`      noShadow`}</div>
        <div>{`      items={[`}</div>
        <div>{`        { id: 'item1', text: 'Option 1' },`}</div>
        <div>{`        { id: 'item2', text: 'Option 2' },`}</div>
        <div>{`        { id: 'item3', text: 'Option 3' },`}</div>
        <div>{`        { id: 'item4', text: 'Option 4' },`}</div>
        <div>{`      ]}`}</div>
        <div>{`    />`}</div>
        <div>{`  </Popover>`}</div>
        <div>{`</div>`}</div>
      </div >
    )
  }, {
    title: 'Control variants',
    description: 'Controls can be displayed as buttons, images, icons, and more. In the example below, the Avatar and Icon act as controls.',
    result: (
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>
          <Popover
            control={(
              <Avatar
                ariaLabel='Popover avatar'
                icon='settings'
                size={Sizes.SMALL}
                circle
              />
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
                { id: 'item3', text: 'Option 3' },
                { id: 'item4', text: 'Option 4' },
              ]}
            />
          </Popover>
        </div>
        <div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>
          <Popover
            alignRight
            noArrow
            control={(
              <Button
                icon='cart'
              />
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
                { id: 'item3', text: 'Option 3' },
                { id: 'item4', text: 'Option 4' },
              ]}
            />
          </Popover>
        </div>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>`}</div>
        <div>{`  <Popover`}</div>
        <div>{`    control={(`}</div>
        <div>{`      <Avatar`}</div>
        <div>{`        ariaLabel='Popover avatar'`}</div>
        <div>{`        icon='settings'`}</div>
        <div>{`        size={Sizes.SMALL}`}</div>
        <div>{`        circle`}</div>
        <div>{`      />`}</div>
        <div>{`    )}`}</div>
        <div>{`  >`}</div>
        <div>{`    <Menu`}</div>
        <div>{`      noShadow`}</div>
        <div>{`      items={[`}</div>
        <div>{`        { id: 'item1', text: 'Option 1' },`}</div>
        <div>{`        { id: 'item2', text: 'Option 2' },`}</div>
        <div>{`        { id: 'item3', text: 'Option 3' },`}</div>
        <div>{`        { id: 'item4', text: 'Option 4' },`}</div>
        <div>{`      ]}`}</div>
        <div>{`    />`}</div>
        <div>{`  </Popover>`}</div>
        <div>{`</div>`}</div>
        <br />
        <div>{`<div style={{ flexBasis: 0, flexGrow: 1, flexShrink: 0 }}>`}</div>
        <div>{`  <Popover`}</div>
        <div>{`    alignRight`}</div>
        <div>{`    noArrow`}</div>
        <div>{`    control={(`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='cart'`}</div>
        <div>{`      />`}</div>
        <div>{`    )}`}</div>
        <div>{`  >`}</div>
        <div>{`    <Menu`}</div>
        <div>{`      noShadow`}</div>
        <div>{`      items={[`}</div>
        <div>{`        { id: 'item1', text: 'Option 1' },`}</div>
        <div>{`        { id: 'item2', text: 'Option 2' },`}</div>
        <div>{`        { id: 'item3', text: 'Option 3' },`}</div>
        <div>{`        { id: 'item4', text: 'Option 4' },`}</div>
        <div>{`      ]}`}</div>
        <div>{`    />`}</div>
        <div>{`  </Popover>`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }],
}

export const PopoverDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}