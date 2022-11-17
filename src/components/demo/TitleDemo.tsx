import React from 'react'

import { AccentColors, Title, TitleLevels } from '../../lib'
import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Title',
  labels: [
    { text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { text: 'reviewed 0.0.7', accentColor: AccentColors.COLOR_6 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'A title component whose semantic level and visual appearance can be set separately, providing flexibility in design while adhering to accessibility best practices.',
  types: [{
    id: 'Title',
    props: [
      { id: 'level', type: 'TitleLevel', description: '(Optionnal) The semantic level of the tile (defaults to h1)' },
      { id: 'levelVisual', type: 'TitleLevel', description: '(Optionnal) The visual level of the title (defaults to the semantic level)' },
      { id: 'text', type: 'string', description: 'The text to display' },
      { id: 'wrap', type: 'boolean', description: '(Optionnal) If true forces the title to wrap instead of truncate' },
    ],
  }],
  examples: [{
    title: 'Semantic Level',
    description: (
      <>
        <p>There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used.</p>
      </>
    ),
    result: (
      <>
        <Title level={TitleLevels.H1} text='Title Level 1' />
        <Title level={TitleLevels.H2} text='Title Level 2' />
        <Title level={TitleLevels.H3} text='Title Level 3' />
        <Title level={TitleLevels.H4} text='Title Level 4' />
        <Title level={TitleLevels.H5} text='Title Level 5' />
        <Title level={TitleLevels.H6} text='Title Level 6' />
      </>
    ),
    code: (
      <div>
        <div>{`<Title level={TitleLevels.H1} text='Title Level 1' />`}</div>
        <div>{`<Title level={TitleLevels.H2} text='Title Level 2' />`}</div>
        <div>{`<Title level={TitleLevels.H3} text='Title Level 3' />`}</div>
        <div>{`<Title level={TitleLevels.H4} text='Title Level 4' />`}</div>
        <div>{`<Title level={TitleLevels.H5} text='Title Level 5' />`}</div>
        <div>{`<Title level={TitleLevels.H6} text='Title Level 6' />`}</div>
      </div>
    )
  }, {
    title: 'Visual Level',
    description: (
      <>
        <p>If a design requires it, the visual level can be set to something different than the semantic level. This allows the sequential order to be maintained while providing flexibility in appearance.</p>
      </>
    ),
    result: (
      <>
        <Title level={TitleLevels.H1} levelVisual={TitleLevels.H6} text='Title Level 1' />
        <Title level={TitleLevels.H2} levelVisual={TitleLevels.H5} text='Title Level 2' />
        <Title level={TitleLevels.H3} levelVisual={TitleLevels.H4} text='Title Level 3' />
        <Title level={TitleLevels.H4} levelVisual={TitleLevels.H3} text='Title Level 4' />
        <Title level={TitleLevels.H5} levelVisual={TitleLevels.H2} text='Title Level 5' />
        <Title level={TitleLevels.H6} levelVisual={TitleLevels.H1} text='Title Level 6' />
      </>
    ),
    code: (
      <div>
        <div>{`<Title level={TitleLevels.H1} levelVisual={TitleLevels.H6} text='Title Level 1' />`}</div>
        <div>{`<Title level={TitleLevels.H2} levelVisual={TitleLevels.H5} text='Title Level 2' />`}</div>
        <div>{`<Title level={TitleLevels.H3} levelVisual={TitleLevels.H4} text='Title Level 3' />`}</div>
        <div>{`<Title level={TitleLevels.H4} levelVisual={TitleLevels.H3} text='Title Level 4' />`}</div>
        <div>{`<Title level={TitleLevels.H5} levelVisual={TitleLevels.H2} text='Title Level 5' />`}</div>
        <div>{`<Title level={TitleLevels.H6} levelVisual={TitleLevels.H1} text='Title Level 6' />`}</div>
      </div>
    )
  }, {
    title: 'Text Elision',
    description: (
      <>
        <p>By default the Title text overflow will be elided when longer than its container.</p>
      </>
    ),
    result: (
      <div style={{ width: '300px' }}>
        <Title level={TitleLevels.H1} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H2} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H3} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H4} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H5} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H6} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
      </div>
    ),
    code: (
      <div>
        <div>{`<div style={{ width: '300px' }}>`}</div>
        <div>{`  <Title level={TitleLevels.H1} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H2} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H3} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H4} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H5} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H6} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Text Wrapping',
    description: (
      <>
        <p>Add the --wrap modifier to cause the overflow text to wrap instead.</p>
      </>
    ),
    result: (
      <div style={{ width: '300px' }}>
        <Title level={TitleLevels.H1} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H2} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H3} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H4} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H5} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
        <Title level={TitleLevels.H6} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
      </div>
    ),
    code: (
      <div>
        <div>{`<div style={{ width: '300px' }}>`}</div>
        <div>{`  <Title level={TitleLevels.H1} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H2} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H3} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H4} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H5} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`  <Title level={TitleLevels.H6} wrap text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }]
}

export const TitleDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}