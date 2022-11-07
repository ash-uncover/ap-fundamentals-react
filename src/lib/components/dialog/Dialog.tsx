import React, { ReactElement, useEffect, useRef } from 'react'

import { DialogFooter } from '../../components/dialog/DialogFooter'
import { DialogHeader } from '../../components/dialog/DialogHeader'

export interface DialogProperties {
  resizable?: boolean,
  title?: string,
  header?: any,
  footer?: any,
  children?: ReactElement | ReactElement[],
}

export const Dialog = ({
  resizable,
  header,
  footer,
  children,
}: DialogProperties) => {

  // Hooks //

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = ref?.current
    if (current) {
      const focusableElement = current.querySelector<HTMLElement>('[tabindex="0"]')
      if (focusableElement) {
        focusableElement.focus()
      }
    }
  }, [])

  // Rendering //

  return (
    <section className='fd-dialog-docs-static fd-dialog fd-dialog--active'>

      <div
        className='fd-dialog__content'
        role='dialog'
        aria-modal='true'
        aria-labelledby='dialog-title-1'
        ref={ref}
      >
        {resizable ? <span className='fd-dialog__resize-handle' /> : null}

        {header ? <DialogHeader {...header} /> : null}

        <div className='fd-dialog__body'>
          {children}
        </div>

        {footer ? <DialogFooter {...footer} /> : null}
      </div>
    </section>
  )
}