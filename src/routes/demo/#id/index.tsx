import React from 'react'
import { useParams } from 'react-router-dom'

import { COMPONENTS } from '../../../lib/index-demos'

export const RouteDemo = () => {

  // Hooks //

  const params = useParams()
  const demoId = params.demoId

  // Rendering //

  const component = COMPONENTS.find(compo => compo.id === demoId)
  if (component) {
    return <component.demo />
  }
  return (
    <div>
      INDALID
    </div>
  )
}

export default RouteDemo
