import React, { ReactElement, useState } from 'react'
// Utils
import { UUID } from '@uncover/js-utils'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface FormGroupInfo {
  compact?: boolean
  header?: string

  children: ReactElement | ReactElement[]
}

export interface FormGroupProperties extends
  FioriComponentProperties,
  FormGroupInfo {
}

export const FormGroup = ({
  className,
  style,

  compact,
  header,

  children,
}: FormGroupProperties) => {

  // Hooks //

  const [idHeader] = useState(`form-group-header-${UUID.next()}`)

  // Rendering //

  const classes = ['fd-form-group']
  if (className) {
    classes.push(className)
  }
  const classesHeader = ['fd-form-group__header']
  if (compact) {
    classesHeader.push('fd-form-group__header--compact')
  }

  return (
    <div
      aria-labelledby={header ? idHeader : undefined}
      className={classes.join(' ')}
      style={style}
    >
      {header ?
        <div className={classesHeader.join(' ')}>
          <h1
            id={idHeader}
            className='fd-form-group__header-text'
          >
            {header}
          </h1>
        </div>
        : null}
      {children}
    </div>
  )
}