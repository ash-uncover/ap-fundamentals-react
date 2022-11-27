import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { FormItem } from '../../components/form/FormItem'
import { TextAreaInfo } from '../../components/form/TextArea'

export interface FormTextAreaInfo {
  label: string
  required?: boolean

  horizontal?: boolean
}

export interface FormTextAreaProperties extends
  FioriComponentProperties,
  FormTextAreaInfo,
  TextAreaInfo {
}

export const FormTextArea = ({
  className,
  style,

  ariaLabel,

  compact,
  counter,
  disabled,
  horizontal,
  label,
  placeholder,
  readOnly,
  required,
  state,
  stateMessage,
  value,

  onChange,
}: FormTextAreaProperties) => {

  // Rendering //

  return (
    <FormItem
      className={className}
      style={style}
      label={label}
      horizontal={horizontal}
      required={required}
      textarea={{
        ariaLabel,
        compact,
        counter,
        disabled,
        placeholder,
        readOnly,
        state,
        stateMessage,
        value,
        onChange,
      }}
    />
  )
}