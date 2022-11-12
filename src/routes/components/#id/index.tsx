import React from 'react'
import { useParams } from 'react-router-dom'

import { COMPONENTS } from '../../../lib/index-demos'

export const RouteComponent = () => {

  // Hooks //

  const params = useParams()
  const componentId = params.componentId

  // Rendering //

  const component = COMPONENTS.find(compo => compo.id === componentId)
  if (component) {
    return <component.demo />
  }
  return (
    <div>
      INDALID
    </div>
  )
}

export default RouteComponent
