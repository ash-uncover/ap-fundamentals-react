import React from 'react'

import { InputState } from '../../constants/InputState'

import { FioriComponentProperties } from '../../components/FioriBase'

import { FormItem } from '../../components/form/FormItem'
import { ListItemInfo } from '../../components/list/ListItem'
import { SelectInfo } from '../../components/select/Select'

export interface FormSelectInfo {
  label: string
  required?: boolean

  compact?: boolean
  horizontal?: boolean
  items: ListItemInfo[]
  placeholder: string
  state?: InputState
  stateMessage?: string
  value?: string

  onChange: (item: ListItemInfo) => void
}

export interface FormSelectProperties extends
  FioriComponentProperties,
  FormSelectInfo,
  SelectInfo {
}

export const FormSelect = ({
  className,
  style,

  compact,
  items,
  placeholder,
  state,
  stateMessage,
  value,

  onChange,
}: FormSelectProperties) => {

  // Rendering //

  return (
    <FormItem
      label=''
      className={className}
      style={style}
      select={{
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