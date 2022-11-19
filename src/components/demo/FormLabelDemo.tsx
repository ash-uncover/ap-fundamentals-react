import React from 'react'

import { AccentColors, FormLabel } from '../../lib'
import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Form Label',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { text: 'on going', accentColor: AccentColors.COLOR_6 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'Form labels are used to identify form elements such as input fields, checkboxes and radio buttons. This component is best used as a child element of the Form Item component.',
  types: [{
    id: 'FormLabel',
    props: [
      { id: '', type: '', description: '' },
    ],
  }],
  examples: [{
    title: 'Default',
    description: (
      <>
        <p>The default form label is displayed in grey text above an input field. To display a form label, add the fd-form-label class as a child element of the fd-form-item element.</p>
      </>
    ),
    result: (
      <div>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
      </div>
    )
  }]
}

export const FormLabelDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}