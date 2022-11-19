import React from 'react'

import { FioriComponentProperties } from '../../components/FioriBase'

import { FormItem } from '../../components/form/FormItem'
import { InputInfo } from '../../components/form/Input'

export interface FormInputInfo {
  label: string
  required?: boolean

  horizontal?: boolean
}

export interface FormInputProperties extends
  FioriComponentProperties,
  FormInputInfo,
  InputInfo {
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

  // Rendering //

  return (
    <FormItem
      className={className}
      style={style}
      label={label}
      horizontal={horizontal}
      required={required}
      input={{
        ariaLabel: ariaLabel,
        compact: compact,
        disabled: disabled,
        placeholder: placeholder,
        readOnly: readOnly,
        state: state,
        stateMessage: stateMessage,
        type: type,
        value: value,
        onChange: onChange
      }}
    />
  )
}