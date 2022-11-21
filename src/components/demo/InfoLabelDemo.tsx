import React from 'react'

import {
  AccentColors,
  InfoLabel
} from '../../lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Info Label',
  labels: [
    { label: 'Version', text: 'Version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_6 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'Info Label is a small non-interactive numeric or text-based label. Its primary use is to add user-defined characteristic to an object. Use the Info Label base class with following modifiers:',
  types: [{
    id: 'InfoLabel',
    props: [
      { id: 'icon', type: 'string', description: '(Optional) If provided, an icon will be displayed as the first element of the Info Label' },
      { id: 'text', type: 'string', description: '(Optional) If provided, a text will be displayed in the Info Label' },
      { id: 'display', type: 'boolean', description: '(Optional) Apply the default styling to the Info Label' },
      { id: 'numeric', type: 'boolean', description: '(Optional) Subbtle style modification to enhance display in case of numeric information' },
      { id: 'accentColor', type: 'AccentColor', description: '(Optional) Apply semantic color to Info Label' },
    ],
  }],
  examples: [{
    title: 'Color Flavors',
    description: 'Use the fd-info-label--accent-color-* modifier class to apply semantic color to Info Label. Options include numbers from 1 to 10.',
    result: (
      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        <InfoLabel text='color 1' accentColor={AccentColors.COLOR_1} />
        <InfoLabel text='color 2' accentColor={AccentColors.COLOR_2} />
        <InfoLabel text='color 3' accentColor={AccentColors.COLOR_3} />
        <InfoLabel text='color 4' accentColor={AccentColors.COLOR_4} />
        <InfoLabel text='color 5' accentColor={AccentColors.COLOR_5} />
        <InfoLabel text='color 6' accentColor={AccentColors.COLOR_6} />
        <InfoLabel text='color 7' accentColor={AccentColors.COLOR_7} />
        <InfoLabel text='color 8' accentColor={AccentColors.COLOR_8} />
        <InfoLabel text='color 9' accentColor={AccentColors.COLOR_9} />
        <InfoLabel text='color 10' accentColor={AccentColors.COLOR_10} />
      </div>
    ),
    code: (
      <div>
        <div>{`<InfoLabel text='color 1' accentColor={AccentColors.COLOR_1} />`}</div>
        <div>{`<InfoLabel text='color 2' accentColor={AccentColors.COLOR_2} />`}</div>
        <div>{`<InfoLabel text='color 3' accentColor={AccentColors.COLOR_3} />`}</div>
        <div>{`<InfoLabel text='color 4' accentColor={AccentColors.COLOR_4} />`}</div>
        <div>{`<InfoLabel text='color 5' accentColor={AccentColors.COLOR_5} />`}</div>
        <div>{`<InfoLabel text='color 6' accentColor={AccentColors.COLOR_6} />`}</div>
        <div>{`<InfoLabel text='color 7' accentColor={AccentColors.COLOR_7} />`}</div>
        <div>{`<InfoLabel text='color 8' accentColor={AccentColors.COLOR_8} />`}</div>
        <div>{`<InfoLabel text='color 9' accentColor={AccentColors.COLOR_9} />`}</div>
        <div>{`<InfoLabel text='color 10' accentColor={AccentColors.COLOR_10} />`}</div>
      </div>
    )
  }, {
    title: 'Info Label with Icon',
    description: 'Use the fd-info-label--icon modifier class and icon type to create Info Label with Icon.',
    result: (
      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        <InfoLabel text='Info Label' icon='past' accentColor={AccentColors.COLOR_1} />
        <InfoLabel icon='action' accentColor={AccentColors.COLOR_2} />
      </div>
    ),
    code: (
      <div>
        <div>{`<InfoLabel text='Info Label' icon='past' accentColor={AccentColors.COLOR_1} />`}</div>
        <div>{`<InfoLabel icon='action' accentColor={AccentColors.COLOR_2} />`}</div>
      </div>
    )
  }, {
    title: 'Numeric Info Label',
    description: 'For Numeric Info Label use the fd-info-label--numeric modifier class.',
    result: (
      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        <InfoLabel text='6' numeric accentColor={AccentColors.COLOR_1} />
        <InfoLabel text='6.2' numeric accentColor={AccentColors.COLOR_2} />
        <InfoLabel text='42K' numeric accentColor={AccentColors.COLOR_3} />
      </div>
    ),
    code: (
      <div>
        <div>{`<InfoLabel text='6' numeric accentColor={AccentColors.COLOR_1} />`}</div>
        <div>{`<InfoLabel text='6.2' numeric accentColor={AccentColors.COLOR_2} />`}</div>
        <div>{`<InfoLabel text='42K' numeric accentColor={AccentColors.COLOR_3} />`}</div>
      </div>
    )
  }, {
    title: 'Display Only Info Label',
    description: 'For Display Only Info Label use the fd-info-label--display modifier class',
    result: (
      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        <InfoLabel text='system status' display />
        <InfoLabel text='42' display numeric />
        <InfoLabel icon='action' display />
        <InfoLabel text='Info Label' icon='past' display />
      </div>
    ),
    code: (
      <div>
        <div>{`<InfoLabel text='system status' display />`}</div>
        <div>{`<InfoLabel text='42' display numeric />`}</div>
        <div>{`<InfoLabel icon='action' display />`}</div>
        <div>{`<InfoLabel text='Info Label' icon='past' display />`}</div>
      </div>
    )
  }]
}

export const InfoLabelDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}