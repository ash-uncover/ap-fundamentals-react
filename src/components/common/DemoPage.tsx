import React, { ReactElement } from 'react'
import { AccentColor, InfoLabel, Table, Title, TitleLevels } from '../../lib'
import { CodePanel } from '../common/CodePanel'

import './DemoPage.css'

export interface DemoPageProperties {
  title: string
  labels: DemoPageLabel[]
  description: DemoDescription
  types: DemoPageType[]
  examples: DemoPageExample[]
}
export interface DemoPageLabel {
  text: string
  accentColor: AccentColor
}
export interface DemoPageType {
  id: string
  props: DemoPageProp[]
}
export interface DemoPageProp {
  id: string
  type: string
  description: string
}
export interface DemoPageExample {
  title: string
  description?: DemoDescription
  result: ReactElement
  code: ReactElement | ReactElement[]
}
export type DemoDescription = ReactElement | ReactElement[] | string | undefined

export const DemoPage = ({
  title,
  labels,
  description,
  types,
  examples,
}: DemoPageProperties) => {

  // Rendering //

  const renderDescription = (desc: DemoDescription) => {
    if (desc) {
      if (typeof desc === 'string') {
        return (
          <p>{desc}</p>
        )
      }
      return (
        <div>{desc}</div>
      )
    }
    return null
  }

  return (
    <div className='demo-page'>
      <Title
        text={title}
      />

      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        {labels.map((label, index) => (
          <InfoLabel
            key={`label-${index}`}
            {...label}
          />
        ))}
      </div>

      <Title
        text='Properties'
        level={TitleLevels.H2}
      />

      {renderDescription(description)}

      {types.map((type, index) => {
        return (
          <div key={`type-${index}`}>
            <Title
              text={type.id}
              level={TitleLevels.H3}
              style={{
                margin: '1rem 0'
              }}
            />
            <Table
              columns={[
                { key: 'id', name: 'Property', formatter: prop => <strong>{prop.id}</strong> },
                { key: 'type', name: 'Type' },
                { key: 'description', name: 'Description' },
              ]}
              compact
              rows={type.props.map(prop => ({ data: prop }))}
            />
          </div>
        )
      })}

      <Title
        text='Examples'
        level={TitleLevels.H2}
      />

      {examples.map((example, index) => (
        <div key={`example-${index}`}>
          <Title
            text={example.title}
            level={TitleLevels.H3}
          />

          {renderDescription(example.description)}

          <CodePanel
            title=''
            result={example.result}
            code={example.code}
          />
        </div>
      ))}
    </div>
  )
}
