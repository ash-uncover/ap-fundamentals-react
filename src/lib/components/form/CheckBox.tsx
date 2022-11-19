import React, { useEffect, useRef, useState, FormEvent } from 'react'

import { UUID } from '@uncover/js-utils'

import { InputState } from '../../constants/InputState'

import { FioriComponentProperties } from '../../components/FioriBase'

export interface CheckBoxInfo {
  compact?: boolean
  disabled?: boolean
  checked?: boolean
  indeterminate?: boolean
  readOnly?: boolean
  required?: boolean
  state?: InputState
  text: string

  onChange: (value: boolean) => void
}

export interface CheckBoxProperties extends
  FioriComponentProperties,
  CheckBoxInfo {
}

export const CheckBox = ({
  className,
  style,

  compact,
  disabled,
  checked,
  indeterminate,
  readOnly,
  required,
  state,
  text,

  onChange,
}: CheckBoxProperties) => {

  // Hooks //

  const [idCheckbox] = useState(`checkbox-${UUID.next()}`)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      if (!checked && indeterminate) {
        inputRef.current.indeterminate = true
      } else {
        inputRef.current.indeterminate = false
      }
    }
  })

  // Events //

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.checked)
  }

  // Rendering //

  const classes = ['fd-checkbox']
  const classesLabel = ['fd-checkbox__label']
  if (className) {
    classes.push(className)
  }
  if (compact) {
    classes.push('fd-checkbox--compact')
    classesLabel.push('fd-checkbox__label--compact')
  }
  if (required) {
    classesLabel.push('fd-checkbox__label--required')
  }
  if (state) {
    classes.push(`is-${state}`)
  }

  return (
    <>
      <input
        ref={inputRef}
        id={idCheckbox}
        className={classes.join(' ')}
        style={style}
        checked={checked}
        disabled={disabled}
        readOnly={readOnly}
        type='checkbox'
        onChange={handleChange}
      />
      <label
        className={classesLabel.join(' ')}
        htmlFor={idCheckbox}
      >
        <div className='fd-checkbox__label-container'>
          <span className='fd-checkbox__text'>
            {text}
          </span>
        </div>
      </label>
    </>
  )
}