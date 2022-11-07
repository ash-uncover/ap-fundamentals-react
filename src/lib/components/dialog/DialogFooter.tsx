import React, { ReactElement } from 'react'

export interface DialogFooterProperties {
  left?: ReactElement | ReactElement[]
  right?: ReactElement | ReactElement[]
  children?: ReactElement | ReactElement[]
}

export const DialogFooter = ({
  left,
  right,
  children,
}: DialogFooterProperties) => {

  // Rendering //

  const renderElements = (elements: ReactElement | ReactElement[] | null | undefined) => {
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

  const renderElement = (element: ReactElement, key?: string) => {
    return (
      <div key={key} className='fd-bar__element'>
        {element}
      </div>
    )
  }

  return (
    <footer className='fd-dialog__footer fd-bar fd-bar--footer'>
      <div className='fd-bar__left'>
        {left ? renderElements(left) : null}
      </div>
      <div className='fd-bar__right'>
        {right ? renderElements(right) : renderElements(children)}
      </div>
    </footer>
  )
}