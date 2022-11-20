import React from 'react'

import { AccentColors, Avatar, AvatarDesigns, Sizes } from '../../lib'
import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Avatar',
  labels: [
    { label: '', text: 'version 0.0.3', accentColor: AccentColors.COLOR_8 },
    { label: '', text: 'on going', accentColor: AccentColors.COLOR_6 },
    { label: '', text: 'themable', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'The avatar component displays an image, icon or user initials, and is used for user profiles, placeholder images, icons or business-related images i.e. product photos.',
  types: [{
    id: 'Avatar',
    props: [
      { id: 'ariaLabel', type: 'string', description: 'Accessibility label for the avatar' },
      { id: 'ariaLabelZoom', type: 'string', description: '(Optional)' },
      { id: 'ariaControls', type: 'string', description: '(Optional)' },
      { id: 'ariaExpanded', type: 'boolean', description: '(Optional)' },
      { id: 'ariaHaspopup', type: 'boolean', description: '(Optional)' },

      { id: 'accentColor', type: 'AccentColor', description: '(Optional) Sets the color accent of the avatar (exclusive with "design" property)' },
      { id: 'bordered', type: 'boolean', description: '(Optional) Displays light borders around the avatar' },
      { id: 'circle', type: 'boolean', description: '(Optional) Displays the avatar as a circle (default display is a square)' },
      { id: 'design', type: 'AvatarDesign', description: '(Optional) Sets the design of the avatar (exclusive with "accentColor" property)' },
      { id: 'icon', type: 'string', description: '(Optional) Sets the content of the avatar to an icon (exclusive with "initials" property)' },
      { id: 'iconZoom', type: 'string', description: '(Optional) Sets an additionnal icon for clickable avatars (requires onClick)' },
      { id: 'initials', type: 'string', description: '(Optional) Sets the content of the avatar to some initials (xclusive with "icon" property)' },
      { id: 'size', type: 'Size', description: '(Optional) Sets the size of the avatar' },

      { id: 'onClick', type: '() => void', description: '(Optional) Event fired when the avatar is clicked' },

    ],
  }],
  examples: [{
    title: 'Icon',
    description: (
      <>
        <p>The icon avatar can be used to display non-interactive icons. If you want the icon to be interactive, use the Button component with an icon inside instead.</p>
        <p>When using the icon avatar for illustrative purposes only, include role="presentation" in the element.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar ariaLabel='My Avatar' icon='washing-machine' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' icon='washing-machine' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' icon='washing-machine' />
        <Avatar ariaLabel='My Avatar' icon='washing-machine' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' icon='washing-machine' size={Sizes.X_LARGE} />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' icon='washing-machine' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' icon='washing-machine' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' icon='washing-machine' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' icon='washing-machine' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' icon='washing-machine' size={Sizes.X_LARGE} />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Initials',
    description: (
      <>
        <p>The initials avatar can display up to three alphabetical characters representing the first and last name(s) of a person, for example: MvV for Marjolein van Veen. The order in which the first and last name(s) are displayed depends on the language-specific settings.</p>
        <p>When there is no equivalent text for the avatar, include aria-label in the element. This isn’t necessary if the avatar is used for illustrative purposes only. See Icon above.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar ariaLabel='My Avatar' initials='WW' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' initials='WW' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' initials='WW' />
        <Avatar ariaLabel='My Avatar' initials='WW' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' initials='WW' size={Sizes.X_LARGE} />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' initials='WW' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' initials='WW' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' initials='WW' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' initials='WW' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' initials='WW' size={Sizes.X_LARGE} />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Circle',
    description: (
      <>
        <p>A circle style can be displayed by adding the fd-avatar--circle modifier class to the fd-avatar base class.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar ariaLabel='My Avatar' circle icon='money-bills' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' circle icon='money-bills' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' circle icon='money-bills' />
        <Avatar ariaLabel='My Avatar' circle icon='money-bills' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' circle icon='money-bills' size={Sizes.X_LARGE} />
        <Avatar ariaLabel='My Avatar' circle initials='WW' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' circle initials='WW' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' circle initials='WW' />
        <Avatar ariaLabel='My Avatar' circle initials='WW' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' circle initials='WW' size={Sizes.X_LARGE} />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle icon='money-bills' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle icon='money-bills' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle icon='money-bills' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle icon='money-bills' size={Sizes.X_LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle initials='WW' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle initials='WW' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle initials='WW' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle initials='WW' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle initials='WW' size={Sizes.X_LARGE} />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Transparent',
    description: (
      <>
        <p>A transparent style can be displayed by adding the fd-avatar--transparent modifier class to the fd-avatar base class. This can be useful for displaying descriptive illustrations and decorative pictures, for example.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_LARGE} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_LARGE} />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_LARGE} />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Placeholder',
    description: (
      <>
        <p>An avatar with a placeholder background can be displayed by adding the fd-avatar--placeholder modifier class.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' size={Sizes.X_LARGE} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' size={Sizes.X_LARGE} />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} icon='money-bills' size={Sizes.X_LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.PLACEHOLDER} initials='WW' size={Sizes.X_LARGE} />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Tile Icon Background',
    description: (
      <>
        <p>An avatar with a tile icon background can be displayed by adding the fd-avatar--tile modifier class.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' size={Sizes.X_LARGE} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' size={Sizes.X_LARGE} />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} icon='money-bills' size={Sizes.X_LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' circle design={AvatarDesigns.TILE} initials='WW' size={Sizes.X_LARGE} />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Accent Colors',
    description: (
      <>
        <p>To change the accent background color, add the fd-avatar--accent-color-* class with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: fd-avatar--accent-color-10.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_1} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_2} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_3} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_4} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_5} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_6} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_7} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_8} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_9} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_10} icon='money-bills' />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_1} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_2} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_3} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_4} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_5} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_6} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_7} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_8} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_9} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_10} icon='money-bills' />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Accent Colors Shell Header Context',
    description: (
      <>
        <p>When used in Shell header context, an additional modifier class fd-avatar--shell should be added to the fd-avatar base class and the modifier class specifying the accent color fd-avatar--accent-color-*.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_1} design={AvatarDesigns.SHELL} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_2} design={AvatarDesigns.SHELL} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_3} design={AvatarDesigns.SHELL} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_4} design={AvatarDesigns.SHELL} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_5} design={AvatarDesigns.SHELL} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_6} design={AvatarDesigns.SHELL} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_7} design={AvatarDesigns.SHELL} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_8} design={AvatarDesigns.SHELL} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_9} design={AvatarDesigns.SHELL} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_10} design={AvatarDesigns.SHELL} icon='money-bills' />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_1} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_2} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_3} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_4} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_5} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_6} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_7} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_8} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_9} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' accentColor={AccentColors.COLOR_10} design={AvatarDesigns.SHELL} icon='money-bills' />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Zoom Icon',
    description: (
      <>
        <p>If an avatar is clickable, you can show an optional badge and icon. The badge indicates that the avatar is interactive and the icon indicates the action triggered by clicking the avatar. This feature gives users visual affordance of the available action, and is particularly useful for images.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_1}
          circle
          iconZoom='edit'
          icon='money-bills'
          size={Sizes.X_SMALL}
          onClick={() => alert('Avatar clicked 1')}
        />
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_2}
          circle
          iconZoom='edit'
          icon='money-bills'
          size={Sizes.SMALL}
          onClick={() => alert('Avatar clicked 2')}
        />
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_3}
          circle
          iconZoom='edit'
          icon='money-bills'
          onClick={() => alert('Avatar clicked 3')}
        />
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_4}
          circle
          iconZoom='edit'
          icon='money-bills'
          size={Sizes.LARGE}
          onClick={() => alert('Avatar clicked 4')}
        />
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_5}
          circle
          iconZoom='edit'
          icon='money-bills'
          size={Sizes.X_LARGE}
          onClick={() => alert('Avatar clicked 5')}
        />
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_6}
          iconZoom='edit'
          initials='WW'
          size={Sizes.X_SMALL}
          onClick={() => alert('Avatar clicked 6')}
        />
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_7}
          iconZoom='edit'
          initials='WW'
          size={Sizes.SMALL}
          onClick={() => alert('Avatar clicked 7')}
        />
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_8}
          iconZoom='edit'
          initials='WW'
          onClick={() => alert('Avatar clicked 8')}
        />
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_9}
          iconZoom='edit'
          initials='WW'
          size={Sizes.LARGE}
          onClick={() => alert('Avatar clicked 9')}
        />
        <Avatar
          ariaLabel='My Avatar'
          ariaLabelZoom='Edit information'
          bordered
          accentColor={AccentColors.COLOR_10}
          iconZoom='edit'
          initials='WW'
          size={Sizes.X_LARGE}
          onClick={() => alert('Avatar clicked 10')}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_LARGE} />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }, {
    title: 'Borders',
    description: (
      <>
        <p>You can add a very subtle border to the avatar with the fd-avatar--border modifier class.</p>
      </>
    ),
    result: (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' />
        <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_LARGE} />
        <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_SMALL} />
        <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.SMALL} />
        <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' />
        <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.LARGE} />
        <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_LARGE} />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered design={AvatarDesigns.TRANSPARENT} icon='money-bills' size={Sizes.X_LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.SMALL} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.LARGE} />`}</div>
        <div>{`  <Avatar ariaLabel='My Avatar' bordered circle design={AvatarDesigns.TRANSPARENT} initials='WW' size={Sizes.X_LARGE} />`}</div>
        <div>{`</div>`}</div>
      </div>
    )
  }]
}

export const AvatarDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}