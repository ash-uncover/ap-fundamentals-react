import React from 'react'

import { AccentColors, InputStates, Select } from '../../lib'
import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Select',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { text: 'on going', accentColor: AccentColors.COLOR_6 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'The select component is commonly used to enable users to select an item from a predefined list. It should be used when there are less than 12 items to choose from.',
  types: [{
    id: 'Select',
    props: [
      { id: '', type: '', description: '' },
    ],
  }, {
    id: 'SelectItem',
    props: [
      { id: '', type: '', description: '' },
    ],
  }],
  examples: [{
    title: 'Cozy',
    description: (
      <>
        <p>Select displays a predefined option and a button that triggers a dropdown menu to view more options (list items). By default, it is displayed in cozy mode.</p>
      </>
    ),
    result: (
      <div style={{ height: '220px' }}>
        <Select
          placeholder='Select'
          items={[
            { text: 'List Item 1' },
            { text: 'List Item 2' },
            { text: 'List Item 3' },
            { text: 'List Item 4' }
          ]}
          onItemSelected={(item) => alert(item.text)}
        />

      </div>
    ),
    code: (
      <div>
      </div>
    )
  }, {
    title: 'Compact',
    description: (
      <>
        <p>When in compact mode, select displays a dropdown menu that can contain long list items with text that wraps to the next line. The maximum width should be 37.5rem (600px) to avoid readability issues, unless the list contains more than 2 columns. If the list has 3 or more columns, the dropdown menu should not be limited to a max width. To display select in compact mode, add fd-select--compact to the main element.</p>
      </>
    ),
    result: (
      <div style={{ height: '220px' }}>
        <Select
          compact
          placeholder='Select'
          items={[
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { text: 'List Item 2' },
            { text: 'List Item 3' },
            { text: 'List Item 4' }
          ]}
          onItemSelected={(item) => alert(item.text)}
        />

      </div>
    ),
    code: (
      <div>
      </div>
    )
  }, {
    title: 'States',
    description: (
      <>
        <p>Select can be displayed in semantic states to communicate Success, Error, Warning or Information to the users. They can be displayed as either messages within the dropdown list, or by itself as a static message. To display select in various semantic states, add the class (shown below) to the fd-select__control element.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '1rem', height: '220px' }}>
        <div
          style={{ flexGrow: 1, flexBasis: 0 }}
        >
          <Select
            placeholder='Success'
            state={InputStates.SUCCESS}
            stateMessage='Success message'
            style={{ width: '200px' }}
            items={[
              { text: 'List Item 1' },
              { text: 'List Item 2' },
              { text: 'List Item 3' },
              { text: 'List Item 4' }
            ]}
            onItemSelected={(item) => alert(item.text)}
          />
        </div>

        <div
          style={{ flexGrow: 1, flexBasis: 0 }}
        >
          <Select
            placeholder='Error'
            state={InputStates.ERROR}
            stateMessage='Error message'
            style={{ width: '200px' }}
            items={[
              { text: 'Error' },
            ]}
            onItemSelected={(item) => alert(item.text)}
          />
        </div>

        <div
          style={{ flexGrow: 1, flexBasis: 0 }}
        >
          <Select
            placeholder='Warning'
            state={InputStates.WARNING}
            stateMessage='Warning message'
            style={{ width: '200px' }}
            items={[
              { text: 'List Item 1' },
              { text: 'List Item 2' },
              { text: 'List Item 3' },
              { text: 'List Item 4' }
            ]}
            onItemSelected={(item) => alert(item.text)}
          />
        </div>

        <div
          style={{ flexGrow: 1, flexBasis: 0 }}
        >
          <Select
            placeholder='Information'
            state={InputStates.INFORMATION}
            stateMessage='Information message'
            style={{ width: '200px' }}
            items={[
              { text: 'List Item 1' },
            ]}
            onItemSelected={(item) => alert(item.text)}
          />
        </div>

      </div>
    ),
    code: (
      <div>
      </div>
    )
  }]
}

export const SelectDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}