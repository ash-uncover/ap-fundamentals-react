import React from 'react'

import {
  AccentColors,
  FormInput,
  InputStates,
  InputTypes
} from '../../lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Form Input',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { text: 'on going', accentColor: AccentColors.COLOR_6 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: (
    <>
      <p>Inputs are used to collect data from the user and should always be paired with a label. When a field is required, the label should include an asterisk (*).</p>
      <p>A text input field allows users to enter and edit text or numeric values in one line. To help users enter a valid value, it provides additional features like “auto-complete”, “suggestions”, and “value help”.</p>
    </>
  ),
  types: [{
    id: 'FormInput',
    props: [
      { id: '', type: '', description: '' },
    ],
  }],
  examples: [{
    title: 'Default',
    description: (
      <>
        <p>The standard input component can be displayed by using fd-input class. It can also be displayed in compact mode by adding the fd-input--compact class.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormInput
          label='Default Input:'
          placeholder='Field placeholder text'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          compact
          label='Compact Input:'
          placeholder='Field placeholder text'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Required Input:'
          placeholder='Field placeholder text'
          required={true}
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Password Input:'
          type={InputTypes.PASSWORD}
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'Horizontal',
    description: (
      <>
        <p>Forms can be displayed in a horizontal direction instad of the default vertical one.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormInput
          label='Default Input:'
          horizontal
          placeholder='Field placeholder text'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          compact
          horizontal
          label='Compact Input:'
          placeholder='Field placeholder text'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          horizontal
          label='Required Input:'
          placeholder='Field placeholder text'
          required={true}
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          horizontal
          label='Password Input:'
          type={InputTypes.PASSWORD}
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'States',
    description: (
      <>
        <p>The state of the input field can reflect validity of the data entered, whether the input data is editable or disabled.</p>
        <ul>
          <li>Default: The field is editable but no validation has occurred</li>
          <li>Success: The data format entered has been validated and it's correct, such as an email address.</li>
          <li>Error: The data entered is not valid and must be corrected.</li>
          <li>Warning: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward.</li>
          <li>Disabled: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry or selection within the form.</li>
          <li>Read Only: Used to display static information in the context of a form.</li>
        </ul>
        <p>Along with Error and Warning, error messages should be displayed below the field so the user can correct the error and move forward.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormInput
          label='Default Input:'
          placeholder='Field placeholder text'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Error Input:'
          placeholder='Field placeholder text'
          state={InputStates.ERROR}
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Success Input:'
          placeholder='Field placeholder text'
          state={InputStates.SUCCESS}
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Warning Input:'
          placeholder='Field placeholder text'
          state={InputStates.WARNING}
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Information Input:'
          placeholder='Field placeholder text'
          state={InputStates.INFORMATION}
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          disabled={true}
          label='Disabled Input:'
          placeholder='Field placeholder text'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Read-Only Input:'
          placeholder='Field placeholder text'
          readOnly={true}
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'State Messages',
    description: (
      <>
        <p>Along with Error and Warning, error messages should be displayed below the field so the user can correct the error and move forward.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormInput
          label='Error Input:'
          placeholder='Field placeholder text'
          state={InputStates.ERROR}
          stateMessage='Error message'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Success Input:'
          placeholder='Field placeholder text'
          state={InputStates.SUCCESS}
          stateMessage='Success message'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Warning Input:'
          placeholder='Field placeholder text'
          state={InputStates.WARNING}
          stateMessage='Warning message'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
        <FormInput
          label='Information Input:'
          placeholder='Field placeholder text'
          state={InputStates.INFORMATION}
          stateMessage='Information message'
          value=''
          onChange={(value) => { alert(`Input: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }]
}

export const FormInputDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}