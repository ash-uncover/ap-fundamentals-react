import React from 'react'

import { Semantic } from '../../constants/Semantic'
import { Size, Sizes } from '../../constants/Size'

export interface TileContentNumericProperties {
  value: string
  size?: Size
  semantic?: Semantic
}

export const TileContentNumeric = ({
  value,
  size = Sizes.LARGE,
  semantic,
}: TileContentNumericProperties) => {

  // Rendering //

  const classes = ['fd-numeric-content']
  if (size) {
    classes.push(`fd-numeric-content--${size}`)
  }

  const classesKpi = ['fd-numeric-content__kpi']
  if (semantic) {
    classesKpi.push(`fd-numeric-content__kpi--${semantic}`)
  }

  return (
    <div className={classes.join(' ')}>
      <div className='fd-numeric-content__kpi-container'>
        <div className={classesKpi.join(' ')}>
          {value}
        </div>
      </div>
    </div>
  )
}