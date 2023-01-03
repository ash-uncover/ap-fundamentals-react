import React, { ReactNode } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface DialogFooterInfo {
  left?: ReactNode
  right?: ReactNode
  children?: ReactNode
}

export interface DialogFooterProperties extends
  FioriComponentProperties,
  DialogFooterInfo { }

export const DialogFooter = ({
  className,
  style,

  left,
  right,
  children,
}: DialogFooterProperties) => {

  // Rendering //

  const renderElements = (elements: ReactNode) => {
    if (elements) {
      if (Array.isArray(elements)) {
        return (
          <>
            {elements.map((elem, index) => renderElement(elem, `elem-${index}`))}
          </>
        )
      } else {
        return renderElement(elements)
      }
    }
    return null
  }

  const renderElement = (element: ReactNode, key?: string) => {
    return (
      <div key={key} className='fd-bar__element'>
        {element}
      </div>
    )
  }

  const classes = ['fd-dialog__footer fd-bar fd-bar--footer']
  if (className) {
    classes.push(className)
  }

  return (
    <footer
      className={classes.join(' ')}
      style={style}
    >
      <div className='fd-bar__left'>
        {left ? renderElements(left) : null}
      </div>
      <div className='fd-bar__right'>
        {right ? renderElements(right) : renderElements(children)}
      </div>
    </footer>
  )
}