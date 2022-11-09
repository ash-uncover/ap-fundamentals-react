import React from 'react'

import { VerticalNavigation } from '../lib/components/verticalnavigation/VerticalNavigation'

export const AppSidePanel = () => {

  return (
    <VerticalNavigation
      label='toto'
      itemsLabel='tata'
      items={[
        { id: 'components', text: 'Components', glyph: 'folder-blank', expanded: true, items: [
          { id: 'avatar', text: 'Avatar', glyph: 'document-text' },
          { id: 'badge', text: 'Badge', glyph: 'document-text' },
          { id: 'bar', text: 'Bar', glyph: 'document-text' },
          { id: 'button', text: 'Button', glyph: 'document-text' },
          { id: 'calendar', text: 'Calendar', glyph: 'document-text' },
          { id: 'card', text: 'Card', glyph: 'document-text' },
          { id: 'dialog', text: 'Dialog', glyph: 'document-text' },
          { id: 'form', text: 'Form', glyph: 'document-text' },
          { id: 'icontabbar', text: 'IconTabBar', glyph: 'document-text' },
          { id: 'infolabel', text: 'InfoLabel', glyph: 'document-text' },
          { id: 'link', text: 'Link', glyph: 'document-text' },
          { id: 'object', text: 'Object', glyph: 'document-text' },
          { id: 'page', text: 'Page', glyph: 'document-text' },
          { id: 'panel', text: 'Panel', glyph: 'document-text' },
          { id: 'select', text: 'Select', glyph: 'document-text' },
          { id: 'shellbar', text: 'ShellBar', glyph: 'document-text' },
          { id: 'table', text: 'Table', glyph: 'document-text' },
          { id: 'tile', text: 'Tile', glyph: 'document-text' },
          { id: 'title', text: 'Title', glyph: 'document-text' },
          { id: 'toolbar', text: 'Toolbar', glyph: 'document-text' },
          { id: 'verticalnavigation', text: 'VerticalNavigation', glyph: 'document-text' },
        ] }
      ]}
    />
  )
}