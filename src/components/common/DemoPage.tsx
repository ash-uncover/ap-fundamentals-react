import React, { ReactElement } from 'react'
import {
  AccentColor,
  AccentColors,
  Breadcrumb,
  Page,
  PageBody,
  PageHeader,
  PageHeaderAttributeTypes,
  Panel,
  Table,
  Title,
  TitleLevels
} from '../../lib'

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
  label?: string
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
      return desc
    }
    return null
  }

  return (
    <Page className='demo-page'>
      <PageHeader
        avatar={{
          ariaLabel: '',
          icon: 'document-text',
          accentColor: AccentColors.COLOR_9,
        }}
        breadcrumb={(
          <Breadcrumb
            ariaLabel='breadcrumb'
            items={[
              { text: 'Components' },
              { text: title },
            ]}
          />
        )}
        title={title}
        attributes={labels.map((label) => {
          return {
            label: label.label || '',
            accentColor: label.accentColor,
            text: label.text,
            type: PageHeaderAttributeTypes.INFO_LABEL,
          }
        })}
      />
      <PageBody>
        <Panel
          title='Properties'
          expanded
        >
          <div>
            {renderDescription(description)}
          </div>
          <div>
            {types.map((type, index) => {
              return (
                <div key={`type-${index}`}>
                  <Title
                    className='demo-page-item-title'
                    level={TitleLevels.H3}
                    style={{
                      margin: '1rem 0'
                    }}
                    text={type.id}
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
          </div>
        </Panel>

        <Panel
          title='Examples'
          expanded
        >
          {examples.map((example, index) => (
            <div key={`example-${index}`}>
              <Title
                className='demo-page-item-title'
                level={TitleLevels.H3}
                levelVisual={TitleLevels.H5}
                text={example.title}
              />

              {renderDescription(example.description)}

              <CodePanel
                title=''
                result={example.result}
                code={example.code}
              />
            </div>
          ))}
        </Panel>

      </PageBody>

    </Page>
  )
}

const doAlert = false
export const demoCallback = (message: string) => {
  /* tslint:disable */
  console.log(message)
  /* tslint:enable */
  if (doAlert) {
    alert(message)
  }
}