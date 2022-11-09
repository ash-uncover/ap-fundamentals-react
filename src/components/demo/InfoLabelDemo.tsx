import { AccentColors, InfoLabel, Table, Title, TitleLevels } from 'lib'
import { CodePanel } from '../common/CodePanel'
import React from 'react'

export const InfoLabelDemo = () => {

  return (
    <>
      <Title
        text='Info Label'
      />

      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        <InfoLabel
          text='BTP'
          accentColor={AccentColors.COLOR_6}
        />
        <InfoLabel
          text='a11y'
          accentColor={AccentColors.COLOR_1}
        />
        <InfoLabel
          text='themable'
          accentColor={AccentColors.COLOR_3}
        />
      </div>

      <Title
        text='Properties'
        level={TitleLevels.H2}
      />

      <p>
        Info Label is a small non-interactive numeric or text-based label. Its primary use is to add user-defined characteristic to an object. Use the Info Label base class with following modifiers:
      </p>

      <Table
        columns={[
          { key: 'id', name: 'Property' },
          { key: 'type', name: 'Type' },
          { key: 'description', name: 'Description' },
        ]}
        compact
        rows={[
          { data: { id: 'icon', type: 'string', description: '(Optional) If provided, an icon will be displayed as the first element of the Info Label' } },
          { data: { id: 'text', type: 'string', description: '(Optional) If provided, a text will be displayed in the Info Label' } },
          { data: { id: 'display', type: 'boolean', description: '(Optional) Apply the default styling to the Info Label' } },
          { data: { id: 'numeric', type: 'boolean', description: '(Optional) Subbtle style modification to enhance display in case of numeric information' } },
          { data: { id: 'accentColor', type: 'AccentColor', description: '(Optional) Apply semantic color to Info Label' } },
        ]}
      />

      <Title
        text='Examples'
        level={TitleLevels.H2}
      />

      <Title
        text='Color Flavors'
        level={TitleLevels.H3}
      />

      <p>Use the fd-info-label--accent-color-* modifier class to apply semantic color to Info Label. Options include numbers from 1 to 10.</p>

      <CodePanel
        title=''
        result={
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
        }
        code={
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
        }
      />

      <Title
        text='Info Label with Icon'
        level={TitleLevels.H3}
      />

      <p>Use the fd-info-label--icon modifier class and icon type to create Info Label with Icon.</p>

      <CodePanel
        title=''
        result={
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            <InfoLabel text='Info Label' icon='past' accentColor={AccentColors.COLOR_1} />
            <InfoLabel icon='action' accentColor={AccentColors.COLOR_2} />
          </div>
        }
        code={
          <div>
            <div>{`<InfoLabel text='Info Label' icon='past' accentColor={AccentColors.COLOR_1} />`}</div>
            <div>{`<InfoLabel icon='action' accentColor={AccentColors.COLOR_2} />`}</div>
          </div>
        }
      />

      <Title
        text='Numeric Info Label'
        level={TitleLevels.H3}
      />

      <p>For Numeric Info Label use the fd-info-label--numeric modifier class.</p>

      <CodePanel
        title=''
        result={
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            <InfoLabel text='6' numeric accentColor={AccentColors.COLOR_1} />
            <InfoLabel text='6.2' numeric accentColor={AccentColors.COLOR_2} />
            <InfoLabel text='42K' numeric accentColor={AccentColors.COLOR_3} />
          </div>
        }
        code={
          <div>
            <div>{`<InfoLabel text='6' numeric accentColor={AccentColors.COLOR_1} />`}</div>
            <div>{`<InfoLabel text='6.2' numeric accentColor={AccentColors.COLOR_2} />`}</div>
            <div>{`<InfoLabel text='42K' numeric accentColor={AccentColors.COLOR_3} />`}</div>
          </div>
        }
      />

      <Title
        text='Display Only Info Label'
        level={TitleLevels.H3}
      />

      <p>For Display Only Info Label use the fd-info-label--display modifier class</p>

      <CodePanel
        title=''
        result={
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            <InfoLabel text='system status' display />
            <InfoLabel text='42' display numeric />
            <InfoLabel icon='action' display />
            <InfoLabel text='Info Label' icon='past' display />
          </div>
        }
        code={
          <div>
            <div>{`<InfoLabel text='system status' display />`}</div>
            <div>{`<InfoLabel text='42' display numeric />`}</div>
            <div>{`<InfoLabel icon='action' display />`}</div>
            <div>{`<InfoLabel text='Info Label' icon='past' display />`}</div>
          </div>
        }
      />

    </>
  )
}