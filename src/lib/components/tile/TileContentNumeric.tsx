import React from 'react'
// Constants
import { Semantic } from '../../constants/Semantic'
import { Size, Sizes } from '../../constants/Size'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface TileContentNumericInfo {
  value: string
  size?: Size
  semantic?: Semantic
}

export interface TileContentNumericProperties extends
  FioriComponentProperties,
  TileContentNumericInfo { }

export const TileContentNumeric = ({
  className,
  style,

  semantic,
  size = Sizes.LARGE,
  value,
}: TileContentNumericProperties) => {

  // Rendering //

  const classes = ['fd-numeric-content']
  if (className) {
    classes.push(className)
  }
  if (size) {
    classes.push(`fd-numeric-content--${size}`)
  }

  const classesKpi = ['fd-numeric-content__kpi']
  if (semantic) {
    classesKpi.push(`fd-numeric-content__kpi--${semantic}`)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <div className='fd-numeric-content__kpi-container'>
        <div className={classesKpi.join(' ')}>
          {value}
        </div>
      </div>
    </div>
  )
}