import React, { ReactElement } from 'react'
import ReactDOMServer from 'react-dom/server';
import { AccentColor, InfoLabel, Table, Title, TitleLevels } from '../../lib'
import { CodePanel } from '../common/CodePanel'

import './DemoPage.css'

export interface DemoPageProperties {
  title: string
  labels: DemoPageLabel[]
  description: ReactElement | ReactElement[] | string
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
  description: ReactElement | ReactElement[] | string
  result: ReactElement
  code: ReactElement | ReactElement[]
}
export const DemoPage = ({
  title,
  labels,
  description,
  types,
  examples,
}: DemoPageProperties) => {

  // Rendering //
  
  return (
    <div className='demo-page'>
      <Title
        text={title}
      />

      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
        {labels.map(label => (
          <InfoLabel
            key={label.text}
            {...label}
          />
        ))}
      </div>

      <Title
        text='Properties'
        level={TitleLevels.H2}
      />

      {typeof description === 'string' ?
        <p>{description}</p>
        :
        <div>{description}</div>
      }

      {types.map((type) => {
        return (
          <>
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
          </>
        )
      })}

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

          {typeof example.description === 'string' ?
            <p>{example.description}</p>
            :
            <div>{example.description}</div>
          }

          <CodePanel
            title=''
            result={example.result}
            code={example.code}
          />
        </>
      ))}
    </div>
  )
}
