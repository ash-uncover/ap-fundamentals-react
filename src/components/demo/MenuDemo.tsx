import React from 'react'

import { AccentColors, Menu } from '../../lib'
import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Menu',
  labels: [
    { label: 'Version', text: 'Version 0.0.5', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_6 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: (
    <>
      <p>The menu component is the listing structure with optional headers to create menus.</p>
      <p>Commonly used as the contents when composing "dropdowns", "contextual menus", etc, when paired with the popover component.</p>
    </>
  ),
  types: [{
    id: 'Menu',
    props: [
      { id: 'compact', type: 'boolean', description: '(Optional) If provided, the Menu is displayed in compact mode.' },
      { id: 'noShadow', type: 'boolean', description: '(Optional) If provided, the Menu is displayed in compact mode.' },
      { id: 'items', type: 'MenuItem[]', description: 'The items to be displayed in the Menu.' },
      { id: 'onItemSelected', type: '(string) => void', description: '(Optional) Called when an item is selected in the menu' },
    ]
  }, {
    id: 'MenuItem',
    props: [
      { id: 'id', type: 'string', description: 'The unique identifier of the MenuItem in the Menu' },
      { id: 'text', type: 'string', description: 'The label of the MenuItem in the Menu' },
      { id: 'shortcut', type: 'string', description: '(Optionnal) ...' },
      { id: 'active', type: 'boolean', description: '(Optionnal) ...' },
      { id: 'hover', type: 'boolean', description: '(Optionnal) ...' },
      { id: 'selected', type: 'boolean', description: '(Optionnal) ...' },
      { id: 'disabled', type: 'boolean', description: '(Optionnal) ...' },
      { id: 'iconBefore', type: 'string', description: '(Optionnal) ...' },
      { id: 'iconAfter', type: 'string', description: '(Optionnal) ...' },
    ]
  }],
  examples: [{
    title: 'Desktop and Tablet Modes',
    description: 'The basic stucture of a menu. Place the menu item title in a <span> tag using class fd-menu__title and wrap it in the fd-menu__link and fd-menu__item classes as shown. Default mode is the cozy tablet mode, no class has to be added for this. Use class modifierfd-menu--compact on menu container level for desktop mode.',
    result: (
      <div>
        <label className="fd-form-label">
          Basic Menu
        </label>
        <br />
        <br />
        <Menu
          items={[
            { id: 'item1', text: 'Item 1' },
            { id: 'item2', text: 'Item 2' },
            { id: 'item3', text: 'Item 3' },
            { id: 'item4', text: 'Item 4' },
          ]}
        />
        <br />
        <br />
        <label className="fd-form-label">
          Compact Menu
        </label>
        <br />
        <br />
        <Menu
          compact
          items={[
            { id: 'item1', text: 'Item 1' },
            { id: 'item2', text: 'Item 2' },
            { id: 'item3', text: 'Item 3' },
            { id: 'item4', text: 'Item 4' },
          ]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<label className="fd-form-label">`}</div>
        <div>{`  Basic Menu`}</div>
        <div>{`</label>`}</div>
        <div>{`<br />`}</div>
        <div>{`<br />`}</div>
        <div>{`<Menu`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { id: 'item1', text: 'Item 1' },`}</div>
        <div>{`    { id: 'item2', text: 'Item 2' },`}</div>
        <div>{`    { id: 'item3', text: 'Item 3' },`}</div>
        <div>{`    { id: 'item4', text: 'Item 4' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
        <div>{`<br />`}</div>
        <div>{`<br />`}</div>
        <div>{`<label className="fd-form-label">`}</div>
        <div>{`  Compact Menu`}</div>
        <div>{`</label>`}</div>
        <div>{`<br />`}</div>
        <div>{`<br />`}</div>
        <div>{`<Menu`}</div>
        <div>{`  compact`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { id: 'item1', text: 'Item 1' },`}</div>
        <div>{`    { id: 'item2', text: 'Item 2' },`}</div>
        <div>{`    { id: 'item3', text: 'Item 3' },`}</div>
        <div>{`    { id: 'item4', text: 'Item 4' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'List different states',
    description: (
      <>
        <p>Simulate different states to show state behaviour between the items.</p>
        <ul>
          <li>For simulating hover state, use class is-hover on the menu item.</li>
          <li>For simulating active state, use class is-active on the menu item.</li>
          <li>For simulating selected state, use class is-selected on the menu item.</li>
          <li>For simulating selected-hover state, use classes is-selected is-hover on the menu item.</li>
          <li>For simulating disabled state, use class is-disabled on the menu item.</li>
        </ul>
        <p>To remove default box shadow from menu containers use fd-menu__list--no-shadow or fd-menu__sublist--no-shadow.</p>
      </>
    ),
    result: (
      <div>
        <Menu
          items={[
            { id: 'item1', text: 'Option 1 - Regular' },
            { id: 'item2', text: 'Option 2 - Hover', hover: true },
            { id: 'item3', text: 'Option 3 - Active', active: true },
            { id: 'item4', text: 'Option 4 - Selected', selected: true },
            { id: 'item5', text: 'Option 5 - Selected-Hover', hover: true, selected: true },
            { id: 'item6', text: 'Option 6 - Disabled', disabled: true },
          ]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Menu`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { id: 'item1', text: 'Item 1', iconBefore: 'grid', iconAfter: 'wrench' },`}</div>
        <div>{`    { id: 'item2', text: 'Item 2', iconBefore: 'accept', iconAfter: 'history' },`}</div>
        <div>{`    { id: 'item3', text: 'Item 3', iconBefore: 'wrench', iconAfter: 'lightbulb' },`}</div>
        <div>{`    { id: 'item4', text: 'Item 4', iconBefore: 'cart', iconAfter: 'history', shortcut: 'Ctrl+A' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Menu with decoration content',
    description: (
      <>
        <p>To create an addon before or after fd-menu__title element, use elements with folowing classes inside fd-menu__link:</p>
        <ul>
          <li>fd-menu__addon-before: styles addon befotre fd-menu__title</li>
          <li>fd-menu__addon-after: styles addon after fd-menu__title</li>
          <li>fd-menu__shortcut: styles shortcut placed after fd-menu__title According to Fiori3 design shortcuts should be on desktop devices.</li>
        </ul>
      </>
    ),
    result: (
      <div>
        <Menu
          items={[
            { id: 'item1', text: 'Item 1', iconBefore: 'grid', iconAfter: 'wrench' },
            { id: 'item2', text: 'Item 2', iconBefore: 'accept', iconAfter: 'history' },
            { id: 'item3', text: 'Item 3', iconBefore: 'wrench', iconAfter: 'lightbulb' },
            { id: 'item4', text: 'Item 4', iconBefore: 'cart', iconAfter: 'history', shortcut: 'Ctrl+A' },
          ]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Menu`}</div>
        <div>{`  items={[`}</div>
        <div>{`    { id: 'item1', text: 'Item 1', iconBefore: 'grid', iconAfter: 'wrench' },`}</div>
        <div>{`    { id: 'item2', text: 'Item 2', iconBefore: 'accept', iconAfter: 'history' },`}</div>
        <div>{`    { id: 'item3', text: 'Item 3', iconBefore: 'wrench', iconAfter: 'lightbulb' },`}</div>
        <div>{`    { id: 'item4', text: 'Item 4', iconBefore: 'cart', iconAfter: 'history', shortcut: 'Ctrl+A' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }],
}

export const MenuDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}