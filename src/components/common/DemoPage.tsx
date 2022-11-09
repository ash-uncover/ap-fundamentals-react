import React, { ReactElement } from 'react'
import { AccentColor, AccentColors, InfoLabel, Table, Title, TitleLevels } from '../../lib'
import { CodePanel } from '../common/CodePanel'

import './DemoPage.css'

export interface DemoPageProperties {
  title: string
  labels: DemoPageLabel[]
  description: ReactElement | ReactElement[] | string
  props: DemoPageProp[]
  examples: DemoPageExample[]
}
export interface DemoPageLabel {
  text: string
  accentColor: AccentColor
}
export interface DemoPageProp {
  id: string
  type: string
  description: string
}
export interface DemoPageExample {
  title: string
  description: string
  result: ReactElement | ReactElement[]
  code: ReactElement | ReactElement[]
}
export const DemoPage = ({
  title,
  labels,
  description,
  props,
  examples,
}: DemoPageProperties) => {

  // Rendering //

  return (
    <>
      <Title
        text={title}
      />

      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        {labels.map(label => (
          <InfoLabel key={label.text} {...label} />
        ))}
      </div>

      <Title
        text='Properties'
        level={TitleLevels.H2}
      />

      <p>
        {description}
      </p>

      <Table
        columns={[
          { key: 'id', name: 'Property' },
          { key: 'type', name: 'Type' },
          { key: 'description', name: 'Description' },
        ]}
        compact
        rows={props.map(prop => ({ data: prop }))}
      />

      <Title
        text='Examples'
        level={TitleLevels.H2}
      />

      {examples.map(example => (
        <>
          <Title
            text={example.title}
            level={TitleLevels.H3}
          />

          <p>{example.description}</p>

          <CodePanel
            title=''
            result={example.result}
            code={example.code}
          />
        </>
      ))}
    </>
  )
}
