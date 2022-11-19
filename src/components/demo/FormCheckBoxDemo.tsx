import React from 'react'

import {
  AccentColors,
  FormCheckBox,
  InputStates,
  InputTypes,
} from '../../lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Form Check Box',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { text: 'on going', accentColor: AccentColors.COLOR_6 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: (
    <>
      <p>A checkbox lets the user set a binary value such as “true/false”. When the user selects the checkbox, it toggles between:</p>
      <ul>
        <li><strong>Checked</strong>: the state described by the checkbox text applies, or that the item has been chosen.</li>
        <li><strong>Un-checked</strong>: the state described by the checkbox is not applied.</li>
        <li><strong>Tri-state</strong>: a state that indicates it is neither checked nor unchecked. JavaScript must be used to set the input's 'indeterminate' property to true. The main purpose of the tri-state is to represent a mixed selection of states of dependent input fields. If some (but not all) of the dependent fields are selected, the checkbox shows a partially selected state. This is only a visual state and can’t be achieved by a direct user interaction. In this example the indeterminate state is set on page load.</li>
      </ul>
      <p>Note: With checkboxes, all options are visible, and the user can make one or more selections.</p>
    </>
  ),
  types: [{
    id: 'FormCheckBox',
    props: [
      { id: '', type: '', description: '' },
    ],
  }],
  examples: [{
    title: 'Desktop',
    description: (
      <>
        <p>A checkbox can be displayed in two different sizes desktop (compact) and mobile (default). On desktop screens, the checkbox appears smaller and uses the fd-checkbox__label--compact modifier class.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormCheckBox
          compact
          text='Apple'
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          checked
          compact
          text='Banana'
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          compact
          disabled
          text='Kiwi'
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          checked
          compact
          disabled
          text='Lemon'
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          compact
          indeterminate
          text='All Fruits'
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          compact
          disabled
          indeterminate
          text='All Vegetables'
          onChange={(value: boolean) => { }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'Required',
    description: (
      <>
        <p>To show that a checkbox input is required, use the fd-checkbox__label--required class.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormCheckBox
          compact
          text='Required Checkbox'
          required
          onChange={(value: boolean) => { }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'State',
    description: (
      <>
        <p>Checkboxes can display several interaction states to communicate semantic meaning to the users. To display different states, add the classes below to the fd-form-item:</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FormCheckBox
          text='Error Checkbox'
          state={InputStates.ERROR}
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Error Checkbox Selected'
          state={InputStates.ERROR}
          checked
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Error Checkbox Indeterminate'
          state={InputStates.ERROR}
          indeterminate
          onChange={(value: boolean) => { }}
        />
        <br/>
        <FormCheckBox
          text='Success Checkbox'
          state={InputStates.SUCCESS}
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Success Checkbox Selected'
          state={InputStates.SUCCESS}
          checked
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Success Checkbox Indeterminate'
          state={InputStates.SUCCESS}
          indeterminate
          onChange={(value: boolean) => { }}
        />
        <br/>
        <FormCheckBox
          text='Warning Checkbox'
          state={InputStates.WARNING}
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Warning Checkbox Selected'
          state={InputStates.WARNING}
          checked
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Warning Checkbox Indeterminate'
          state={InputStates.WARNING}
          indeterminate
          onChange={(value: boolean) => { }}
        />
        <br/>
        <FormCheckBox
          text='Information Checkbox'
          state={InputStates.INFORMATION}
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Information Checkbox Selected'
          state={InputStates.INFORMATION}
          checked
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Information Checkbox Indeterminate'
          state={InputStates.INFORMATION}
          indeterminate
          onChange={(value: boolean) => { }}
        />
        <br/>
        <FormCheckBox
          text='Disabled Checkbox'
          disabled
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Disabled Checkbox Selected'
          disabled
          checked
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Disabled Checkbox Indeterminate'
          disabled
          indeterminate
          onChange={(value: boolean) => { }}
        />
        <br/>
        <FormCheckBox
          text='Read-Only Checkbox'
          readOnly
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Read-Only Checkbox Selected'
          readOnly
          checked
          onChange={(value: boolean) => { }}
        />
        <FormCheckBox
          text='Read-Only Checkbox Indeterminate'
          readOnly
          indeterminate
          onChange={(value: boolean) => { }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }]
}

export const FormCheckBoxDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}