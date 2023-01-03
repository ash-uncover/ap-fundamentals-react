import React, { ReactNode } from 'react'
// Constants
import { BarType } from '../../constants/BarType'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { BarElement } from '../../components/bar/BarElement'
import { BarLeft } from '../../components/bar/BarLeft'
import { BarMiddle } from '../../components/bar/BarMiddle'
import { BarRight } from '../../components/bar/BarRight'

export interface BarInfo {
  cozy?: boolean
  left?: ReactNode
  middle?: ReactNode
  responsivePaddings?: boolean
  right?: ReactNode
  type?: BarType
}
export interface BarProperties extends
  FioriComponentProperties,
  BarInfo {
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

  const renderElements = (elements: ReactNode) => {
    if (Array.isArray(elements)) {
      return elements.map((element, index) => renderElement(element, `element-${index}`))
    }
    return renderElement(elements)
  }

  const renderElement = (element: ReactNode, key?: string) => {
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