import React, { ReactElement } from 'react'

import { FioriComponentProperties } from '../FioriBase'

import { BarElement } from './BarElement'
import { BarLeft } from './BarLeft'
import { BarMiddle } from './BarMiddle'
import { BarRight } from './BarRight'

import { BarType } from '../../constants/BarType'

export interface BarProperties extends FioriComponentProperties {
  cozy?: boolean
  left?: ReactElement | ReactElement[]
  middle?: ReactElement | ReactElement[]
  responsivePaddings?: boolean
  right?: ReactElement | ReactElement[]
  type?: BarType
}

export const Bar = ({
  className,
  style,

  cozy,
  left,
  middle,
  responsivePaddings,
  right,
  type,
}: BarProperties) => {

  // Rendering //

  const renderElements = (elements: ReactElement | ReactElement[]) => {
    if (Array.isArray(elements)) {
      return elements.map((element, index) => renderElement(element, `element-${index}`))
    }
    return renderElement(elements)
  }

  const renderElement = (element: ReactElement, key?: string) => {
    return (
      <BarElement key={key}>
        {element}
      </BarElement>
    )
  }

  const classes = ['fd-bar']
  if (className) {
    classes.push(className)
  }
  if (cozy) {
    classes.push('fd-bar--cozy')
  }
  if (responsivePaddings) {
    classes.push('fd-bar--responsive-paddings')
  }
  if (type) {
    classes.push(`fd-bar--${type}`)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      {left ?
        <BarLeft>
          {renderElements(left)}
        </BarLeft>
        : null}
      {middle ?
        <BarMiddle>
          {renderElements(middle)}
        </BarMiddle>
        : null}
      {right ?
        <BarRight>
          {renderElements(right)}
        </BarRight>
        : null}
    </div>
  )
}