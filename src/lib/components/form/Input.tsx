import React, { FormEvent } from 'react'
// Constants
import { InputState } from '../../constants/InputState'
import { InputType, InputTypes } from '../../constants/InputType'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { Popover } from '../../components/popover/Popover'

export interface InputInfo {
  ariaLabel?: string

  compact?: boolean
  disabled?: boolean
  placeholder?: string
  readOnly?: boolean
  state?: InputState
  stateMessage?: string
  value: string
  type?: InputType

  onChange: (value: string) => void
}

export interface InputProperties extends
  FioriComponentProperties,
  InputInfo {
}

export const Input = ({
  id,
  className,
  style,

  ariaLabel,

  compact,
  disabled,
  placeholder,
  readOnly,
  state,
  stateMessage,
  type = InputTypes.TEXT,
  value,

  onChange,
}: InputProperties) => {

  // Events //

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }

  // Rendering //

  const renderInput = () => {
    return (
      <input
        id={id}
        className={classes.join(' ')}
        disabled={disabled}
        style={style}
        aria-label={ariaLabel}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        value={value}
        onChange={handleChange}
      />
    )
  }

  const classes = ['fd-input']
  if (className) {
    classes.push(className)
  }
  if (compact) {
    classes.push('fd-input--compact')
  }
  if (state) {
    classes.push(`is-${state}`)
  }

  const classesMessage = ['fd-form-message']
  classesMessage.push(`fd-form-message--${state}`)
  return (
    <Popover
      className='fd-popover--input-message-group'
      control={renderInput()}
      noArrow
      preventOpen={!stateMessage}
    >
      <div
        className={classesMessage.join(' ')}
      >
        {stateMessage}
      </div>
    </Popover>
  )
}