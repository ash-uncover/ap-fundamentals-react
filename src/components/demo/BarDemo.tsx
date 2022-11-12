import React from 'react'

import { AccentColors, Avatar, Bar, BarTypes, Button, ButtonDesigns, SegmentedButton, Sizes, Title, TitleLevels } from 'lib'

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
      { id: 'cozy', type: 'boolean', description: '...' },
      { id: 'left', type: 'ReactElement[]', description: 'The elements to display on the left' },
      { id: 'middle', type: 'ReactElement[]', description: 'The elements to display on the middle' },
      { id: 'responsivePaddings', type: 'boolean', description: '...' },
      { id: 'right', type: 'ReactElement[]', description: 'The elements to display on the right' },
      { id: 'type', type: 'BarType', description: '...' },
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
          <SegmentedButton>
            <Button
              compact
              icon='email'
            />
            <Button
              compact
              icon='iphone'
              selected
            />
            <Button
              compact
              icon='notification-2'
            />
          </SegmentedButton>
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
        <div>{`    <SegmentedButton>`}</div>
        <div>{`      <Button`}</div>
        <div>{`        compact`}</div>
        <div>{`        icon='email'`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        compact`}</div>
        <div>{`        icon='iphone'`}</div>
        <div>{`        selected`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        compact`}</div>
        <div>{`        icon='notification-2'`}</div>
        <div>{`      />`}</div>
        <div>{`    </SegmentedButton>`}</div>
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
  }, {
    title: 'Cozy',
    description: 'The cozy bar contains a back button, icon buttons, segmented button and product switch button. It is responsive to tablet and mobile screen sizes. To apply cozy mode, add the --cozy modifier class to the container element.',
    result: (
      <Bar
        cozy
        left={[
          <Button
            design={ButtonDesigns.TRANSPARENT}
            icon='navigation-left-arrow'
          />,
          <Button
            design={ButtonDesigns.TRANSPARENT}
            icon='home'
          />,
          <Button
            design={ButtonDesigns.TRANSPARENT}
            icon='account'
          />
        ]}
        middle={[
          <SegmentedButton>
            <Button
              icon='email'
            />
            <Button
              icon='iphone'
              selected
            />
            <Button
              icon='notification-2'
            />
          </SegmentedButton>
        ]}
        right={[
          <Avatar
            ariaLabel='Avatar'
            circle
            initials='JS'
            size={Sizes.X_SMALL}
          />,
          <Button
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
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='navigation-left-arrow'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='home'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='account'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`  middle={[`}</div>
        <div>{`    <SegmentedButton>`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='email'`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='iphone'`}</div>
        <div>{`        selected`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='notification-2'`}</div>
        <div>{`      />`}</div>
        <div>{`    </SegmentedButton>`}</div>
        <div>{`  ]}`}</div>
        <div>{`  right={[`}</div>
        <div>{`    <Avatar`}</div>
        <div>{`      ariaLabel='Avatar'`}</div>
        <div>{`      circle`}</div>
        <div>{`      initials='JS'`}</div>
        <div>{`      size={Sizes.X_SMALL}`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='grid'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Responsive',
    description: 'The bar can be made responsive with the --responsive-paddings modifier class. The paddings will automatically change with the screen size.',
    result: (
      <Bar
        responsivePaddings
        left={[
          <Button
            design={ButtonDesigns.TRANSPARENT}
            icon='navigation-left-arrow'
          />,
          <Button
            design={ButtonDesigns.TRANSPARENT}
            icon='home'
          />,
          <Button
            design={ButtonDesigns.TRANSPARENT}
            icon='account'
          />
        ]}
        middle={[
          <SegmentedButton>
            <Button
              icon='email'
            />
            <Button
              icon='iphone'
              selected
            />
            <Button
              icon='notification-2'
            />
          </SegmentedButton>
        ]}
        right={[
          <Avatar
            ariaLabel='Avatar'
            circle
            initials='JS'
            size={Sizes.X_SMALL}
          />,
          <Button
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
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='navigation-left-arrow'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='home'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='account'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`  middle={[`}</div>
        <div>{`    <SegmentedButton>`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='email'`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='iphone'`}</div>
        <div>{`        selected`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='notification-2'`}</div>
        <div>{`      />`}</div>
        <div>{`    </SegmentedButton>`}</div>
        <div>{`  ]}`}</div>
        <div>{`  right={[`}</div>
        <div>{`    <Avatar`}</div>
        <div>{`      ariaLabel='Avatar'`}</div>
        <div>{`      circle`}</div>
        <div>{`      initials='JS'`}</div>
        <div>{`      size={Sizes.X_SMALL}`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='grid'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Header',
    description: 'The header bar contains actions that impact the entire page. It can be displayed by adding the --header modifier class to the container element.',
    result: (
      <>
        <p><b>Default (desktop)</b></p>
        <Bar
          type={BarTypes.HEADER}
          left={[
            <Button
              compact
              design={ButtonDesigns.TRANSPARENT}
              icon='navigation-left-arrow'
            />,
            <Button
              compact
              design={ButtonDesigns.TRANSPARENT}
              icon='home'
            />,
            <Button
              compact
              design={ButtonDesigns.TRANSPARENT}
              icon='account'
            />
          ]}
          middle={[
            <SegmentedButton>
              <Button
                compact
                icon='email'
              />
              <Button
                compact
                icon='iphone'
                selected
              />
              <Button
                compact
                icon='notification-2'
              />
            </SegmentedButton>
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
        <p><b>Cozy (tablet and mobile)</b></p>
        <Bar
          cozy
          type={BarTypes.HEADER}
          left={[
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='navigation-left-arrow'
            />,
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='home'
            />,
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='account'
            />
          ]}
          middle={[
            <SegmentedButton>
              <Button
                icon='email'
              />
              <Button
                icon='iphone'
                selected
              />
              <Button
                icon='notification-2'
              />
            </SegmentedButton>
          ]}
          right={[
            <Avatar
              ariaLabel='Avatar'
              circle
              initials='JS'
              size={Sizes.X_SMALL}
            />,
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='grid'
            />
          ]}
        />
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<p><b>Default (desktop)</b></p>`}</div>
        <div>{`<Bar`}</div>
        <div>{`  type={BarTypes.HEADER}`}</div>
        <div>{`  left={[`}</div>
        <div>{`    <Button`}</div>
        <div>{`      compact`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='navigation-left-arrow'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      compact`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='home'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      compact`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='account'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`  middle={[`}</div>
        <div>{`    <SegmentedButton>`}</div>
        <div>{`      <Button`}</div>
        <div>{`        compact`}</div>
        <div>{`        icon='email'`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        compact`}</div>
        <div>{`        icon='iphone'`}</div>
        <div>{`        selected`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        compact`}</div>
        <div>{`        icon='notification-2'`}</div>
        <div>{`      />`}</div>
        <div>{`    </SegmentedButton>`}</div>
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
        <div>{`<p><b>Cozy (tablet and mobile)</b></p>`}</div>
        <div>{`<Bar`}</div>
        <div>{`  cozy`}</div>
        <div>{`  type={BarTypes.HEADER}`}</div>
        <div>{`  left={[`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='navigation-left-arrow'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='home'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='account'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`  middle={[`}</div>
        <div>{`    <SegmentedButton>`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='email'`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='iphone'`}</div>
        <div>{`        selected`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='notification-2'`}</div>
        <div>{`      />`}</div>
        <div>{`    </SegmentedButton>`}</div>
        <div>{`  ]}`}</div>
        <div>{`  right={[`}</div>
        <div>{`    <Avatar`}</div>
        <div>{`      ariaLabel='Avatar'`}</div>
        <div>{`      circle`}</div>
        <div>{`      initials='JS'`}</div>
        <div>{`      size={Sizes.X_SMALL}`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='grid'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Header With Subheader',
    description: 'To add a subheader under a header bar, the container element should have the --header-with-subheader modifier class, which will remove the element’s box shadow.',
    result: (
      <>
        <Bar
          type={BarTypes.HEADER_WITH_SUBHEADER}
          left={[
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='navigation-left-arrow'
            />,
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='home'
            />,
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='account'
            />
          ]}
          middle={[
            <SegmentedButton>
              <Button
                icon='email'
              />
              <Button
                icon='iphone'
                selected
              />
              <Button
                icon='notification-2'
              />
            </SegmentedButton>
          ]}
          right={[
            <Avatar
              ariaLabel='Avatar'
              circle
              initials='JS'
              size={Sizes.X_SMALL}
            />,
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='grid'
            />
          ]}
        />
        <Bar
          type={BarTypes.SUBHEADER}
          middle={[
            <Title
              level={TitleLevels.H5}
              text='Title'
            />
          ]}
        />
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Bar`}</div>
        <div>{`  type={BarTypes.HEADER_WITH_SUBHEADER}`}</div>
        <div>{`  left={[`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='navigation-left-arrow'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='home'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='account'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`  middle={[`}</div>
        <div>{`    <SegmentedButton>`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='email'`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='iphone'`}</div>
        <div>{`        selected`}</div>
        <div>{`      />`}</div>
        <div>{`      <Button`}</div>
        <div>{`        icon='notification-2'`}</div>
        <div>{`      />`}</div>
        <div>{`    </SegmentedButton>`}</div>
        <div>{`  ]}`}</div>
        <div>{`  right={[`}</div>
        <div>{`    <Avatar`}</div>
        <div>{`      ariaLabel='Avatar'`}</div>
        <div>{`      circle`}</div>
        <div>{`      initials='JS'`}</div>
        <div>{`      size={Sizes.X_SMALL}`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      icon='grid'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
        <div>{`<Bar`}</div>
        <div>{`  type={BarTypes.SUBHEADER}`}</div>
        <div>{`  middle={[`}</div>
        <div>{`    <Title`}</div>
        <div>{`      level={TitleLevels.H5}`}</div>
        <div>{`      text='Title'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Footer',
    description: 'The footer bar should display only closing and finalizing action buttons that impact the entire page such as Save or Cancel. It can be displayed by adding the --footer modifier class to the container element.',
    result: (
      <>
        <p><b>Default (desktop)</b></p>
        <Bar
          type={BarTypes.FOOTER}
          right={[
            <Button
              compact
              design={ButtonDesigns.EMPHASIZED}
              text='Save'
            />,
            <Button
              compact
              design={ButtonDesigns.TRANSPARENT}
              text='Cancel'
            />
          ]}
        />
        <p><b>Cozy (tablet and mobile)</b></p>
        <Bar
          cozy
          type={BarTypes.FOOTER}
          right={[
            <Button
              design={ButtonDesigns.EMPHASIZED}
              text='Save'
            />,
            <Button
              design={ButtonDesigns.TRANSPARENT}
              text='Cancel'
            />
          ]}
        />
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<p><b>Default (desktop)</b></p>`}</div>
        <div>{`<Bar`}</div>
        <div>{`  type={BarTypes.FOOTER}`}</div>
        <div>{`  right={[`}</div>
        <div>{`    <Button`}</div>
        <div>{`      compact`}</div>
        <div>{`      design={ButtonDesigns.EMPHASIZED}`}</div>
        <div>{`      text='Save'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      compact`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      text='Cancel'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
        <div>{`<p><b>Cozy (tablet and mobile)</b></p>`}</div>
        <div>{`<Bar`}</div>
        <div>{`  cozy`}</div>
        <div>{`  type={BarTypes.FOOTER}`}</div>
        <div>{`  right={[`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.EMPHASIZED}`}</div>
        <div>{`      text='Save'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      text='Cancel'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Floating Footer',
    description: 'The floating footer bar should also display only finalizing action buttons that impact the entire page. This type floats above the page at the bottom of the screen and is always visible when scrolling. It can be displayed by adding the --floating-footer modifier class to the container element.',
    result: (
      <>
        <div><p><b>Default (desktop)</b></p></div>
        <div style={{ position: 'relative', height: '3rem' }}>
          <Bar
            type={BarTypes.FOOTER_FLOATING}
            right={[
              <Button
                compact
                design={ButtonDesigns.EMPHASIZED}
                text='Save'
              />,
              <Button
                compact
                design={ButtonDesigns.TRANSPARENT}
                text='Cancel'
              />
            ]}
          />
        </div>
        <div><p><b>Cozy (tablet and mobile)</b></p></div>
        <div style={{ position: 'relative', height: '3rem' }}>
          <Bar
            cozy
            type={BarTypes.FOOTER_FLOATING}
            right={[
              <Button
                design={ButtonDesigns.EMPHASIZED}
                text='Save'
              />,
              <Button
                design={ButtonDesigns.TRANSPARENT}
                text='Cancel'
              />
            ]}
          />
        </div>
      </>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<p><b>Default (desktop)</b></p>`}</div>
        <div>{`<Bar`}</div>
        <div>{`  type={BarTypes.FOOTER_FLOATING}`}</div>
        <div>{`  right={[`}</div>
        <div>{`    <Button`}</div>
        <div>{`      compact`}</div>
        <div>{`      design={ButtonDesigns.EMPHASIZED}`}</div>
        <div>{`      text='Save'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      compact`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      text='Cancel'`}</div>
        <div>{`    />`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
        <div>{`<p><b>Cozy (tablet and mobile)</b></p>`}</div>
        <div>{`<Bar`}</div>
        <div>{`  cozy`}</div>
        <div>{`  type={BarTypes.FOOTER_FLOATING}`}</div>
        <div>{`  right={[`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.EMPHASIZED}`}</div>
        <div>{`      text='Save'`}</div>
        <div>{`    />,`}</div>
        <div>{`    <Button`}</div>
        <div>{`      design={ButtonDesigns.TRANSPARENT}`}</div>
        <div>{`      text='Cancel'`}</div>
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