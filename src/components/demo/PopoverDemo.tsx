import React from 'react'

import {
  AccentColors,
  Avatar,
  Button,
  Menu,
  Popover,
  PopoverPlacements,
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
        <div>{`<Popover`}</div>
        <div>{`  control={(`}</div>
        <div>{`    <Avatar`}</div>
        <div>{`      ariaLabel='Popover avatar'`}</div>
        <div>{`      icon='settings'`}</div>
        <div>{`      size={Sizes.SMALL}`}</div>
        <div>{`      circle`}</div>
        <div>{`    />`}</div>
        <div>{`  )}`}</div>
        <div>{`>`}</div>
        <div>{`  <Menu`}</div>
        <div>{`    noShadow`}</div>
        <div>{`    items={[`}</div>
        <div>{`      { id: 'item1', text: 'Option 1' },`}</div>
        <div>{`      { id: 'item2', text: 'Option 2' },`}</div>
        <div>{`      { id: 'item3', text: 'Option 3' },`}</div>
        <div>{`      { id: 'item4', text: 'Option 4' },`}</div>
        <div>{`    ]}`}</div>
        <div>{`  />`}</div>
        <div>{`</Popover>`}</div>
        <br />
        <div>{`<Popover`}</div>
        <div>{`  control={(`}</div>
        <div>{`    <Button`}</div>
        <div>{`      icon='cart'`}</div>
        <div>{`    />`}</div>
        <div>{`  )}`}</div>
        <div>{`>`}</div>
        <div>{`  <Menu`}</div>
        <div>{`    noShadow`}</div>
        <div>{`    items={[`}</div>
        <div>{`      { id: 'item1', text: 'Option 1' },`}</div>
        <div>{`      { id: 'item2', text: 'Option 2' },`}</div>
        <div>{`      { id: 'item3', text: 'Option 3' },`}</div>
        <div>{`      { id: 'item4', text: 'Option 4' },`}</div>
        <div>{`    ]}`}</div>
        <div>{`  />`}</div>
        <div>{`</Popover>`}</div>
      </div>
    )
  }, {
    title: 'Placement',
    description: (
      <>
        <p>
          It's possible to show popover on different sides of the trigger. To do that apply the following modifier classes to the popover body element.
        </p>
        <p>
          To align the popover arrow with the trigger apply the following modifier classes to the popover body element.
        </p>
      </>
    ),
    result: (
      <div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
          <Popover
            placement={PopoverPlacements.BOTTOM_START}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-down-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
          <Popover
            placement={PopoverPlacements.BOTTOM_CENTER}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-down-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
          <Popover
            placement={PopoverPlacements.BOTTOM_END}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-down-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
        </div>
        <div style={{ padding: '1rem 4rem', display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <Popover
            placement={PopoverPlacements.AFTER_START}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-right-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
          <Popover
            placement={PopoverPlacements.BEFORE_START}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-left-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
        </div>
        <div style={{ padding: '1rem 4rem', display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <Popover
            placement={PopoverPlacements.AFTER_CENTER}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-right-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
          <Popover
            placement={PopoverPlacements.BEFORE_CENTER}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-left-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
        </div>
        <div style={{ padding: '1rem 4rem', display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <Popover
            placement={PopoverPlacements.AFTER_END}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-right-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
          <Popover
            placement={PopoverPlacements.BEFORE_END}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-left-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
          <Popover
            placement={PopoverPlacements.ABOVE_START}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-up-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
          <Popover
            placement={PopoverPlacements.ABOVE_CENTER}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-up-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
          <Popover
            placement={PopoverPlacements.ABOVE_END}
            control={(
              <button className='fd-button' role='button'>
                <i className='sap-icon--navigation-up-arrow'></i>
              </button>
            )}
          >
            <Menu
              noShadow
              items={[
                { id: 'item1', text: 'Option 1' },
                { id: 'item2', text: 'Option 2' },
              ]}
            />
          </Popover>
        </div>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

        <div>{`</div>`}</div>
      </div >
    )
  }, {
    title: 'No Arrow',
    description: (
      <>
        <p>It's possible to hide popover's arrow. To achieve this apply the fd-popover__body--no-arrow modifier class to the popover body element and remove all the arrow modifier classes.</p>
      </>
    ),
    result: (
      <div style={{ height: '150px' }}>
        <Popover
          noArrow
          control={(
            <button className='fd-button' role='button'>
              <i className='sap-icon--navigation-down-arrow'></i>
            </button>
          )}
        >
          <Menu
            noShadow
            items={[
              { id: 'item1', text: 'Option 1' },
              { id: 'item2', text: 'Option 2' },
            ]}
          />
        </Popover>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Popover`}</div>
        <div>{`  noArrow`}</div>
        <div>{`  control={(`}</div>
        <div>{`    <button className='fd-button' role='button'>`}</div>
        <div>{`      <i className='sap-icon--navigation-down-arrow'></i>`}</div>
        <div>{`    </button>`}</div>
        <div>{`  )}`}</div>
        <div>{`>`}</div>
        <div>{`  <Menu`}</div>
        <div>{`    noShadow`}</div>
        <div>{`    items={[`}</div>
        <div>{`      { id: 'item1', text: 'Option 1' },`}</div>
        <div>{`      { id: 'item2', text: 'Option 2' },`}</div>
        <div>{`    ]}`}</div>
        <div>{`  />`}</div>
        <div>{`</Popover>`}</div>
      </div >
    )
  }],
}

export const PopoverDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}