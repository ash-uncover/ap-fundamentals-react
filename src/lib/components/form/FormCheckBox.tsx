import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { CheckBoxInfo } from '../../components/form/CheckBox'
import { FormItem } from '../../components/form/FormItem'

// export interface FormCheckBoxInfo {
// }

export interface FormCheckBoxProperties extends
  FioriComponentProperties,
  // FormCheckBoxInfo,
  CheckBoxInfo {
}

export const FormCheckBox = ({
  className,
  style,

  compact,
  checked,
  disabled,
  indeterminate,
  readOnly,
  required,
  state,
  text,

  onChange,
}: FormCheckBoxProperties) => {

  // Rendering //

  return (
    <FormItem
      label=''
      className={className}
      style={style}
      checkbox={{
        compact,
        checked,
        disabled,
        indeterminate,
        readOnly,
        required,
        state,
        text,
        onChange,
      }}
    />
  )
}