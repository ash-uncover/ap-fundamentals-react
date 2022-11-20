import React, { ReactElement } from 'react'

export interface DialogHeaderProperties {
  left?: ReactElement | ReactElement[]
  right?: ReactElement | ReactElement[],
  subheader?: boolean
}

export const DialogHeader = ({
  left,
  right,
  subheader,
}: DialogHeaderProperties) => {

  // Rendering //

  const classes = ['fd-dialog__header fd-bar']

  if (subheader) {
    classes.push('fd-bar--header-with-subheader')
  } else {
    classes.push('fd-bar--header')
  }

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
  }

  const renderElement = (element: ReactElement, key?: string) => {
    return (
      <div key={key} className='fd-bar__element'>
        {element}
      </div>
    )
  }

  return (
    <header className={classes.join(' ')}>
      <div className='fd-bar__left'>
        {left ? renderElements(left) : null}
      </div>
      <div className='fd-bar__right'>
        {renderElements(right)}
      </div>
    </header>
  )
}