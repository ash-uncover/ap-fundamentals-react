import React, { useState } from 'react'

import { UUID } from '@uncover/js-utils'

import { FioriComponentProperties } from '../../components/FioriBase'

import { CheckBox, CheckBoxInfo } from '../../components/form/CheckBox'
import { FormLabel } from '../../components/form/FormLabel'
import { Input, InputInfo } from '../../components/form/Input'
import { Select, SelectInfo } from '../../components/select/Select'
import { StepInput, StepInputInfo } from '../../components/form/StepInput'

export interface FormItemInfo {
  label: string
  required?: boolean

  checkbox?: CheckBoxInfo
  input?: InputInfo
  select?: SelectInfo
  stepinput?: StepInputInfo

  horizontal?: boolean
}

export interface FormItemProperties extends
  FioriComponentProperties,
  FormItemInfo {
}

export const FormItem = ({
  id,
  className,
  style,

  horizontal,
  label,
  required,

  checkbox,
  input,
  select,
  stepinput,
}: FormItemProperties) => {

  // Hooks //

  const [idFormItem] = useState(`form-item-${id ? id : UUID.next()}`)

  // Rendering //

  const renderControl = () => {
    if (checkbox) {
      return <CheckBox {...checkbox} />
    }
    if (input) {
      return <Input {...input} id={idFormItem} />
    }
    if (select) {
      return <Select {...select} id={idFormItem} />
    }
    if (stepinput) {
      return <StepInput {...stepinput} id={idFormItem} />
    }
    return null
  }

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
      {!checkbox ?
        <FormLabel
          required={required}
          text={label}
          htmlFor={idFormItem}
        />
        : null}
      {renderControl()}
    </div>
  )
}