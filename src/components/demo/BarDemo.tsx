import React from 'react'

import { AccentColors, Avatar, Bar, Button, ButtonDesigns, Sizes, Title, TitleLevels } from 'lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Bar',
  labels: [
    { text: 'version 0.0.6', accentColor: AccentColors.COLOR_8 },
    { text: 'in progress', accentColor: AccentColors.COLOR_5 },
    { text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'The bar component is a container that holds titles, buttons and input controls. Its contents are distributed into three areas: left, middle and right. This component’s primary function is to display page headers and footers. It is mainly used to construct a Page, and acts as a building block for other components like Dialog, Popover etc.',
  types: [{
    id: 'Bar',
    props: [
      { id: 'left', type: 'ReactElement[]', description: 'The elements to display on the left' },
      { id: 'middle', type: 'ReactElement[]', description: 'The elements to display on the middle' },
      { id: 'right', type: 'ReactElement[]', description: 'The elements to display on the right' },
    ],
  }],
  examples: [{
    title: 'Default',
    description: 'The default bar contains a back button, page title, segmented button and product switch button. It can be displayed by using the fd-bar class, and is responsive to desktop screen sizes. The default bar is in compact mode.',
    result: (
      <Bar
        left={[
          <Title text='TEXT' level={TitleLevels.H5} />
        ]}
        middle={[
          <Button
            compact
            icon='email'
          />
        ]}
        right={[
          <Avatar
            ariaLabel='Avatar'
            circle
            initials='JS'
            size={Sizes.X_SMALL}
          />,
          <Button
            compact
            design={ButtonDesigns.TRANSPARENT}
            icon='grid'
          />
        ]}
      />
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Bar`}</div>
        <div>{`  left={[`}</div>
        <div>{`    <Title text='TEXT' level={TitleLevels.H5} />`}</div>
        <div>{`  ]}`}</div>
        <div>{`  middle={[`}</div>
        <div>{`    <Button`}</div>
        <div>{`      compact`}</div>
        <div>{`      icon='email'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`  right={[`}</div>
        <div>{`    <Avatar`}</div>
        <div>{`      ariaLabel='Avatar'`}</div>
        <div>{`      circle`}</div>
        <div>{`      initials='JS'`}</div>
        <div>{`      size={Sizes.X_SMALL}`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      compact`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='grid'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }]
}

export const BarDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}