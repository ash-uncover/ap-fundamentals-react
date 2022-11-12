import React, { ReactElement } from 'react'
import { BarElement } from './BarElement'
import { BarLeft } from './BarLeft'
import { BarMiddle } from './BarMiddle'
import { BarRight } from './BarRight'

export interface BarProperties {
  className?: string
  style?: React.CSSProperties

  left?: ReactElement | ReactElement[]
  middle?: ReactElement | ReactElement[]
  right?: ReactElement | ReactElement[]
}

export const Bar = ({
  className,
  style,

  left,
  middle,
  right,
}: BarProperties) => {

  // Hooks //

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