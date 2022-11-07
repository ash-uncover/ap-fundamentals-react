import React from 'react'

export interface ObjectAttributeProperties {
  text?: string
}

export const ObjectAttribute = ({
  text
}: ObjectAttributeProperties) => {

  // Rendering //

  return (
    <div className='fd-object-list__object-attribute'>
      {text}
    </div>
  )
}