import React from 'react'
// Constants
import { Semantic } from '../../constants/Semantic'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface ObjectNumberInfo {
  bold?: boolean
  large?: boolean
  semantic?: Semantic
  unit: string
  value: string
}
export interface ObjectNumberProperties extends
  FioriComponentProperties,
  ObjectNumberInfo { }

export const ObjectNumber = ({
  className,
  style,

  bold,
  large,
  semantic,
  unit,
  value,
}: ObjectNumberProperties) => {

  // Rendering //

  const classes = ['fd-object-number']
  if (className) {
    classes.push(className)
  }
  if (large) {
    classes.push('fd-object-number--large')
  }
  if (semantic) {
    classes.push(`fd-object-number--${semantic}`)
  }

  const classesText = ['fd-object-number__text']
  if (bold) {
    classesText.push('fd-object-number__text--bold')
  }

  return (
    <span
      className={classes.join(' ')}
      style={style}
    >
      <span className={classesText.join(' ')}>
        {value}
      </span>
      <span className='fd-object-number__unit'>
        {unit}
      </span>
    </span>
  )
}