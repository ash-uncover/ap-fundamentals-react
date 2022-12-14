import React from 'react'

import { DemoPage } from '../common/DemoPage'
import {
  AccentColors,
  FormStepInput,
  InputStates
} from '../../lib'

const DEMO_DATA = {
  title: 'Form Step Input',
  labels: [
    { label: 'Since', text: 'Version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_6 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'The step input control allows the user to change the input values in predefined increments (steps).',
  types: [{
    id: 'FormStepInput',
    props: [
      { id: '', type: '', description: '' },
    ],
  }],
  examples: [{
    title: 'Default',
    description: (
      <>
        <p>The default step input displays an input field with a plus and minus icon on opposing sides to either increase or decrease the value. It is displayed in cozy mode, which is ideal for mobile and tablet screens.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormStepInput
          label='Default Step Input:'
          value={0}
          onChange={(value) => { alert(`Step Input: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'Compact',
    description: (
      <>
        <p>The step input can be displayed in compact mode, which is ideal for desktop screens. To display a compact step input, add the --compact modifier class to the main element, as well as the button and input elements.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormStepInput
          compact
          label='Compact Step Input:'
          value={0}
          onChange={(value) => { alert(`Step Input: ${value}`) }}
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
        <p>Step input can be displayed in various states such as Success, Information, Error and Warning.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormStepInput
          label='Error Step Input:'
          state={InputStates.ERROR}
          value={0}
          onChange={(value) => { alert(`Step Input: ${value}`) }}
        />
        <FormStepInput
          label='Succes Step Input:'
          state={InputStates.SUCCESS}
          value={0}
          onChange={(value) => { alert(`Step Input: ${value}`) }}
        />
        <FormStepInput
          label='Warning Step Input:'
          state={InputStates.WARNING}
          value={0}
          onChange={(value) => { alert(`Step Input: ${value}`) }}
        />
        <FormStepInput
          label='Information Step Input:'
          state={InputStates.INFORMATION}
          value={0}
          onChange={(value) => { alert(`Step Input: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'Disabled',
    description: (
      <>
        <p>Step input can be disabled by adding the is-disabled class to the main element.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormStepInput
          label='Disabled Step Input:'
          disabled
          value={0}
          onChange={(value) => { alert(`Step Input: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }, {
    title: 'Read Only',
    description: (
      <>
        <p>Step input can be disabled by adding the is-disabled class to the main element.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormStepInput
          label='Read-Only Step Input:'
          readOnly
          value={0}
          onChange={(value) => { alert(`Step Input: ${value}`) }}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }]
}

export const FormStepInputDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}