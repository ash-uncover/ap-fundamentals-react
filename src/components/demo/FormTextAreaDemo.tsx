import React from 'react'

import {
  AccentColors,
  FormTextArea,
  InputStates,
} from '../../lib'

import { demoCallback, DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Form Text Area',
  labels: [
    { label: 'Since', text: 'Version 0.0.13', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_6 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: (
    <>
      <p>The text area is an input component that allows the user to enter several lines of text. Use the text area if you want users to enter multiple lines of unformatted text.</p>
      <p>Do not use the text area if</p>
      <ul>
        <li>You only want them to enter a single line of text, use the input component instead.</li>
        <li>Users need to enter formatted text. Use the rich text editor instead.</li>
      </ul>
    </>
  ),
  types: [{
    id: 'FormTextArea',
    props: [
      { id: 'compact', type: 'boolean', description: '' },
      { id: 'counter', type: 'number', description: '' },
      { id: 'disabled', type: 'boolean', description: '' },
      { id: 'horizontal', type: 'boolean', description: '' },
      { id: 'label', type: 'boolean', description: '' },
      { id: 'placeholder', type: 'boolean', description: '' },
      { id: 'readOnly', type: 'boolean', description: '' },
      { id: 'required', type: 'boolean', description: '' },
      { id: 'state', type: 'InputState', description: '' },
      { id: 'stateMessage', type: 'boolean', description: '' },
      { id: 'value', type: 'boolean', description: '' },
      { id: 'onChange', type: '(string) => void', description: '' },
    ],
  }],
  examples: [{
    title: 'Content Density - cozy and compact',
    description: (
      <></>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormTextArea
          label='Text area (cozy):'
          placeholder='Write something here'
          value=''
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
        <FormTextArea
          compact
          label='Text area (compact):'
          placeholder='Write something here'
          value=''
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<FormTextArea`}</div>
        <div>{`  label='Text area (cozy):'`}</div>
        <div>{`  placeholder='Write something here'`}</div>
        <div>{`  value=''`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
        <br/>
        <div>{`<FormTextArea`}</div>
        <div>{`  compact`}</div>
        <div>{`  label='Text area (compact):'`}</div>
        <div>{`  placeholder='Write something here'`}</div>
        <div>{`  value=''`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Counter',
    description: (
      <p>A checkbox can appear in two different sizes. In cozy mode, it is bigger than it is in compact mode. This makes the checkbox easier to select on touch devices.</p>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormTextArea
          label='Text area (cozy):'
          value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'
          counter={150}
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
        <FormTextArea
          compact
          label='Text area (compact):'
          value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'
          counter={180}
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<FormTextArea`}</div>
        <div>{`  label='Text area (cozy):'`}</div>
        <div>{`  value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'`}</div>
        <div>{`  counter={150}`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<FormTextArea`}</div>
        <div>{`  compact`}</div>
        <div>{`  label='Text area (compact):'`}</div>
        <div>{`  value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'`}</div>
        <div>{`  counter={180}`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Disabled And Read Only',
    description: (
      <p>A checkbox can appear in two different sizes. In cozy mode, it is bigger than it is in compact mode. This makes the checkbox easier to select on touch devices.</p>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormTextArea
          label='Text area (disabled):'
          value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'
          disabled
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
        <FormTextArea
          label='Text area (read only):'
          value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'
          readOnly
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<FormTextArea`}</div>
        <div>{`  label='Text area (disabled):'`}</div>
        <div>{`  value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'`}</div>
        <div>{`  disabled`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<FormTextArea`}</div>
        <div>{`  label='Text area (read only):'`}</div>
        <div>{`  value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'`}</div>
        <div>{`  readOnly`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'State',
    description: (
      <p>As with any other input component, you can validate the fields and show the result as a value state of the component. Possible value states are error, warning, success, information, or neutral (none).</p>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormTextArea
          label='Text area (success):'
          placeholder='Write something here'
          value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'
          state={InputStates.SUCCESS}
          stateMessage='Success Message'
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
        <FormTextArea
          label='Text area (error):'
          placeholder='Write something here'
          value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'
          state={InputStates.ERROR}
          stateMessage='Error Message'
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
        <FormTextArea
          label='Text area (error):'
          placeholder='Write something here'
          value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'
          state={InputStates.WARNING}
          stateMessage='Warning Message'
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
        <FormTextArea
          label='Text area (error):'
          placeholder='Write something here'
          value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'
          state={InputStates.INFORMATION}
          stateMessage='Information Message'
          onChange={(value) => { demoCallback(`Text Area: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<FormTextArea`}</div>
        <div>{`  label='Text area (success):'`}</div>
        <div>{`  placeholder='Write something here'`}</div>
        <div>{`  value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'`}</div>
        <div>{`  state={InputStates.SUCCESS}`}</div>
        <div>{`  stateMessage='Success Message'`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<FormTextArea`}</div>
        <div>{`  label='Text area (error):'`}</div>
        <div>{`  placeholder='Write something here'`}</div>
        <div>{`  value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'`}</div>
        <div>{`  state={InputStates.ERROR}`}</div>
        <div>{`  stateMessage='Error Message'`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<FormTextArea`}</div>
        <div>{`  label='Text area (error):'`}</div>
        <div>{`  placeholder='Write something here'`}</div>
        <div>{`  value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'`}</div>
        <div>{`  state={InputStates.WARNING}`}</div>
        <div>{`  stateMessage='Warning Message'`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
        <br />
        <div>{`<FormTextArea`}</div>
        <div>{`  label='Text area (error):'`}</div>
        <div>{`  placeholder='Write something here'`}</div>
        <div>{`  value='Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.'`}</div>
        <div>{`  state={InputStates.INFORMATION}`}</div>
        <div>{`  stateMessage='Information Message'`}</div>
        <div>{'  onChange={(value) => { demoCallback(`Text Area: ${value}`) }}'}</div>
        <div>{`/>`}</div>
      </div>
    )
  }]
}

export const FormTextAreaDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}