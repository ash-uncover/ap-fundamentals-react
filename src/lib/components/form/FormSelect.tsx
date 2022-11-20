import React from 'react'

import { InputState } from '../../constants/InputState'

import { FioriComponentProperties } from '../../components/FioriBase'

import { FormItem, FormItemLabelInfo } from '../../components/form/FormItem'
import { ListItemInfo } from '../../components/list/ListItem'
import { SelectInfo } from '../../components/select/Select'

import './FormSelect.css'

export interface FormSelectProperties extends
  FioriComponentProperties,
  FormItemLabelInfo,
  SelectInfo {
}

export const FormSelect = ({
  className,
  style,

  alignRight,
  compact,
  horizontal,
  items,
  label,
  placeholder,
  required,
  state,
  stateMessage,
  value,

  onChange,
}: FormSelectProperties) => {

  // Rendering //

  const classes = ['fd-form-select']
  if (className) {
    classes.push(className)
  }

  return (
    <FormItem
      className={classes.join(' ')}
      style={style}
      horizontal={horizontal}
      label={label}
      required={required}
      select={{
        alignRight,
        compact,
        items,
        placeholder,
        state,
        stateMessage,
        value,
        onChange,
      }}
    />
  )
}