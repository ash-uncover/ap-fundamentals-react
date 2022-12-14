import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { StepInputInfo } from '../../components/form/StepInput'
import { FormItem } from '../../components/form/FormItem'

export interface FormStepInputInfo {
  label: string
  required?: boolean

  horizontal?: boolean
}
export interface FormStepInputProperties extends
  FioriComponentProperties,
  FormStepInputInfo,
  StepInputInfo {
}

export const FormStepInput = ({
  className,
  style,

  compact,
  disabled,
  horizontal,
  label,
  max,
  min,
  readOnly,
  required,
  state,
  value,

  onChange,
}: FormStepInputProperties) => {

  // Rendering //

  return (
    <FormItem
      className={className}
      style={style}
      label={label}
      horizontal={horizontal}
      required={required}
      stepinput={{
        compact,
        disabled,
        max,
        min,
        readOnly,
        state,
        value,
        onChange,
      }}
    />
  )
}