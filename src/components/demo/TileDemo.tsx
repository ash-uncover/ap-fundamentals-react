import React from 'react'

import {
  AccentColors,
  Avatar,
  Sizes,
  Tile,
} from '../../lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Tile',
  labels: [
    { label: 'Since', text: 'Version 0.0.10', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_5 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: '',
  types: [{
    id: 'Tile',
    props: [
      { id: '', type: '', description: '' },
    ],
  }],
  examples: [{
    title: 'Sizes',
    description: (
      <>
        <p>Generic tiles can be displayed in two tile dimensions: the default 1x1, and 2x1 (with the addition of a fd-tile--double modifier class).</p>
        <p><strong>The typical generic tile sizes are:</strong></p>
        <ul>
          <li>Large tile (1 x 1) - 11 x 11rem</li>
          <li>Large tile (2 x 1) - 22.5 x 11rem</li>
          <li>Small tile (1 x 1) - 9.25 x 9.25rem</li>
          <li>Small tile (2 x 1) - 19 x 9.25rem</li>
        </ul>
      </>
    ),
    result: (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: '1rem'
          }}
        >
          <Tile>
            <span>11 x 11rem</span>
          </Tile>
          <Tile double>
            <span>22.5 x 11rem</span>
          </Tile>

        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <Tile size={Sizes.SMALL}>
            <span>9.25 x 9.25rem</span>
          </Tile>
          <Tile size={Sizes.SMALL} double>
            <span>19 x 9.25rem</span>
          </Tile>
        </div>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Tile>`}</div>
        <div>{`  <span>11 x 11rem</span>`}</div>
        <div>{`</Tile>`}</div>
        <br />
        <div>{`<Tile double>`}</div>
        <div>{`  <span>22.5 x 11rem</span>`}</div>
        <div>{`</Tile>`}</div>
        <br />
        <div>{`<Tile size={Sizes.SMALL}>`}</div>
        <div>{`  <span>9.25 x 9.25rem</span>`}</div>
        <div>{`</Tile>`}</div>
        <br />
        <div>{`<Tile size={Sizes.SMALL} double>`}</div>
        <div>{`  <span>19 x 9.25rem</span>`}</div>
        <div>{`</Tile>`}</div>
      </div>
    )
  }, {
    title: 'Layout',
    description: (
      <>
        <p>The layout of the generic tile is fixed with designated areas for the header, content area and footer.</p>
        <p>Note: In the example below, the background color illustrate the placement of elements within tiles.</p>
      </>
    ),
    result: (
      <div className='layout-sample'>
        <style>
          {'.layout-sample .fd-tile__header { background: lightblue; }'}
          {'.layout-sample .fd-tile__content { background: lightblue; }'}
          {'.layout-sample .fd-tile__footer { background: lightblue; }'}
        </style>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: '1rem'
          }}
        >
          <Tile
            title='Title'
            subTitle='Subtitle'
            footer='Footer'
          >
            <span>Content</span>
          </Tile>
          <Tile
            double
            title='Title'
            subTitle='Subtitle'
            footer='Footer'
          >
            <span>Content</span>
          </Tile>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <Tile
            size={Sizes.SMALL}
            title='Title'
            subTitle='Subtitle'
            footer='Footer'
          >
            <span>Content</span>
          </Tile>
          <Tile
            size={Sizes.SMALL}
            double
            title='Title'
            subTitle='Subtitle'
            footer='Footer'
          >
            <span>Content</span>
          </Tile>
        </div>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Tile`}</div>
        <div>{`  title='Title'`}</div>
        <div>{`  subTitle='Subtitle'`}</div>
        <div>{`  footer='Footer'`}</div>
        <div>{`>`}</div>
        <div>{`  <span>Content</span>`}</div>
        <div>{`</Tile>`}</div>
        <br />
        <div>{`<Tile`}</div>
        <div>{`  double`}</div>
        <div>{`  title='Title'`}</div>
        <div>{`  subTitle='Subtitle'`}</div>
        <div>{`  footer='Footer'`}</div>
        <div>{`>`}</div>
        <div>{`  <span>Content</span>`}</div>
        <div>{`</Tile>`}</div>
        <br />
        <div>{`<Tile`}</div>
        <div>{`  size={Sizes.SMALL}`}</div>
        <div>{`  title='Title'`}</div>
        <div>{`  subTitle='Subtitle'`}</div>
        <div>{`  footer='Footer'`}</div>
        <div>{`>`}</div>
        <div>{`  <span>Content</span>`}</div>
        <div>{`</Tile>`}</div>
        <br />
        <div>{`<Tile`}</div>
        <div>{`  size={Sizes.SMALL}`}</div>
        <div>{`  double`}</div>
        <div>{`  title='Title'`}</div>
        <div>{`  subTitle='Subtitle'`}</div>
        <div>{`  footer='Footer'`}</div>
        <div>{`>`}</div>
        <div>{`  <span>Content</span>`}</div>
        <div>{`</Tile>`}</div>
      </div>
    )
  }, {
    title: 'Badge tile',
    description: (
      <>
        <p>The badge tile displays very short and important information at the top right corner of the tile. It's recommended to add a badge to a tile when it has been newly added. Badges are not displayed when in action/edit mode.</p>
      </>
    ),
    result: (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: '2rem'
          }}
        >
          <Tile
            badge='Badge'
            title='Launch tile title'
            subTitle='Subtitle'
            footer='Footer'
          >
            <Avatar
              ariaLabel='avatar'
              circle
              icon='settings'
              size={Sizes.SMALL}
            />
          </Tile>
          <Tile
            double
            badge='New'
            title='Feed tile title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
            subTitle='Subtitle'
            footer='Footer'
          >
            <span>Content</span>
          </Tile>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <Tile
            size={Sizes.SMALL}
            badge='Badge with very long description'
            title='Launch tile title'
            subTitle='Subtitle'
            footer='Unit, Notification'
          >
            <Avatar
              ariaLabel='avatar'
              circle
              icon='settings'
              size={Sizes.X_SMALL}
            />
          </Tile>
          <Tile
            size={Sizes.SMALL}
            double
            badge='Badge with very very very very very very very very very long text'
            title='Feed tile title: Sed do eiusmod'
            subTitle='Subtitle'
            footer='Footer'
          >
            <span>Content</span>
          </Tile>
        </div>
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<Tile`}</div>
        <div>{`  title='Title'`}</div>
        <div>{`  subTitle='Subtitle'`}</div>
        <div>{`  footer='Footer'`}</div>
        <div>{`>`}</div>
        <div>{`  <span>Content</span>`}</div>
        <div>{`</Tile>`}</div>
        <br />
        <div>{`<Tile`}</div>
        <div>{`  double`}</div>
        <div>{`  title='Title'`}</div>
        <div>{`  subTitle='Subtitle'`}</div>
        <div>{`  footer='Footer'`}</div>
        <div>{`>`}</div>
        <div>{`  <span>Content</span>`}</div>
        <div>{`</Tile>`}</div>
        <br />
        <div>{`<Tile`}</div>
        <div>{`  size={Sizes.SMALL}`}</div>
        <div>{`  title='Title'`}</div>
        <div>{`  subTitle='Subtitle'`}</div>
        <div>{`  footer='Footer'`}</div>
        <div>{`>`}</div>
        <div>{`  <span>Content</span>`}</div>
        <div>{`</Tile>`}</div>
        <br />
        <div>{`<Tile`}</div>
        <div>{`  size={Sizes.SMALL}`}</div>
        <div>{`  double`}</div>
        <div>{`  title='Title'`}</div>
        <div>{`  subTitle='Subtitle'`}</div>
        <div>{`  footer='Footer'`}</div>
        <div>{`>`}</div>
        <div>{`  <span>Content</span>`}</div>
        <div>{`</Tile>`}</div>
      </div>
    )
  }]
}

export const TileDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}