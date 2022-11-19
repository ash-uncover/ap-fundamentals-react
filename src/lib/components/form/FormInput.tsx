import React, { useState } from 'react'

import { UUID } from '@uncover/js-utils'

import { FioriComponentProperties } from '../../components/FioriBase'
import { FormLabel } from '../../components/form/FormLabel'
import { Input, Inputinfo } from '../../components/form/Input'

export interface FormInputInfo {
  label: string
  required?: boolean

  horizontal?: boolean
}

export interface FormInputProperties extends
  FioriComponentProperties,
  FormInputInfo,
  Inputinfo {
}

export const FormInput = ({
  className,
  style,

  ariaLabel,

  compact,
  disabled,
  horizontal,
  label,
  placeholder,
  readOnly,
  required,
  state,
  stateMessage,
  type,
  value,

  onChange,
}: FormInputProperties) => {

  // Hooks //

  const [id] = useState(`form-input-${UUID.next()}`)

  // Rendering //

  const classes = ['fd-form-item']
  if (className) {
    classes.push(className)
  }
  if (horizontal) {
    classes.push('fd-form-item--horizontal')
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <FormLabel
        required={required}
        text={label}
        htmlFor={id}
      />
      <Input
        id={id}
        ariaLabel={ariaLabel}
        compact={compact}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        state={state}
        stateMessage={stateMessage}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}