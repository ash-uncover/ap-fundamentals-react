import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

import { VerticalNavigation } from '../lib/components/verticalnavigation/VerticalNavigation'
import { COMPONENTS } from '../lib/index-demos'

export const AppSidePanel = () => {

  // Hooks //

  const navigate = useNavigate()

  // Events //

  const onComponentClicked = (component: string) => {
    if (component !== 'components') {
      navigate(`/components/${component}`)
    }
  }

  // Rendering //

  return (
    <VerticalNavigation
      label='Navigation'
      itemsLabel='Core Navigation'
      items={[
        {
          id: 'components',
          text: 'Components',
          glyph: 'folder-blank',
          expanded: true,
          items: COMPONENTS.map((compo) => {
            return {
              ...compo,
              glyph: 'document-text'
            }
          })
        }
      ]}
      onItemSelect={onComponentClicked}
    />
  )
}