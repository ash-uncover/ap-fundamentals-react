import React from 'react'
import { useNavigate } from 'react-router-dom'

import { VerticalNavigation } from '../lib/components/verticalnavigation/VerticalNavigation'
import { COMPONENTS } from '../index-demos'

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
          icon: 'folder-blank',
          id: 'components',
          text: 'Components',
          expanded: true,
          items: COMPONENTS.map((compo) => {
            return {
              ...compo,
              icon: 'document-text'
            }
          })
        }
      ]}
      onItemSelect={onComponentClicked}
    />
  )
}