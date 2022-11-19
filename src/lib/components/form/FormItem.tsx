import React, { useState } from 'react'

import { UUID } from '@uncover/js-utils'

import { FioriComponentProperties } from '../FioriBase'

import { FormLabel } from '../../components/form/FormLabel'
import { Input, InputInfo } from '../../components/form/Input'
import { StepInput, StepInputInfo } from '../../components/form/StepInput'

export interface FormItemInfo {
  label: string
  required?: boolean

  input?: InputInfo
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

  input,
  stepinput,
}: FormItemProperties) => {

  // Hooks //

  const [idFormItem] = useState(`form-item-${id ? id : UUID.next()}`)

  // Rendering //

  const renderControl = () => {
    if (input) {
      return <Input {...input} id={idFormItem} />
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
      <FormLabel
        required={required}
        text={label}
        htmlFor={idFormItem}
      />
      {renderControl()}
    </div>
  )
}