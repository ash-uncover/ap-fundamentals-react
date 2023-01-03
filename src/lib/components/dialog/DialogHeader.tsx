import React, { ReactNode } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface DialogHeaderInfo {
  left?: ReactNode
  right?: ReactNode
  subheader?: boolean
}

export interface DialogHeaderProperties extends
  FioriComponentProperties,
  DialogHeaderInfo { }

export const DialogHeader = ({
  className,
  style,

  left,
  right,
  subheader,
}: DialogHeaderProperties) => {

  // Rendering //

  const renderElements = (elements: ReactNode | null | undefined) => {
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
  }

  const renderElement = (element: ReactNode, key?: string) => {
    return (
      <div key={key} className='fd-bar__element'>
        {element}
      </div>
    )
  }

  const classes = ['fd-dialog__header fd-bar']
  if (className) {
    classes.push(className)
  }
  if (subheader) {
    classes.push('fd-bar--header-with-subheader')
  } else {
    classes.push('fd-bar--header')
  }

  return (
    <header
      className={classes.join(' ')}
      style={style}
    >
      <div className='fd-bar__left'>
        {left ? renderElements(left) : null}
      </div>
      <div className='fd-bar__right'>
        {renderElements(right)}
      </div>
    </header>
  )
}