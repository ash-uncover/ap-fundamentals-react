import React, { ReactNode, useEffect, useRef } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { DialogFooter } from '../../components/dialog/DialogFooter'
import { DialogHeader } from '../../components/dialog/DialogHeader'

export interface DialogInfo {
  resizable?: boolean
  title?: string
  header?: any
  footer?: any
  children?: ReactNode
}

export interface DialogProperties extends
  FioriComponentProperties,
  DialogInfo { }

export const Dialog = ({
  className,
  style,

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

  const classes = ['fd-dialog', 'fd-dialog--active']
  if (className) {
    classes.push(className)
  }

  return (
    <section
      className={classes.join(' ')}
      style={style}
    >

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