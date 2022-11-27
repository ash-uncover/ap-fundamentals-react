import React, { FormEvent } from 'react'
// Constants
import { InputState } from '../../constants/InputState'
// Components
import { FioriComponentProperties } from '../FioriBase'
import { Popover } from '../popover/Popover'

export interface TextAreaInfo {
  ariaLabel?: string

  compact?: boolean
  counter?: number
  disabled?: boolean
  placeholder?: string
  readOnly?: boolean
  state?: InputState
  stateMessage?: string
  value: string

  onChange: (value: string) => void
}

export interface TextAreaProperties extends
  FioriComponentProperties,
  TextAreaInfo {
}

export const TextArea = ({
  id,
  className,
  style,

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
}: TextAreaProperties) => {

  // Hooks //

  // Events //

  const handleChange = (event: FormEvent<HTMLTextAreaElement>) => {
    onChange(event.currentTarget.value)
  }

  // Rendering //

  const renderTextArea = () => {
    return (
      <div>
        <textarea
          id={id}
          className={classes.join(' ')}
          disabled={disabled}
          style={style}
          aria-label={ariaLabel}
          placeholder={placeholder}
          readOnly={readOnly}
          value={value}
          onChange={handleChange}
        />
        {counter ?
          <div className='fd-textarea-counter'>
            {`${counter - value.length} characters left`}
          </div>
          : null}
      </div>
    )
  }

  const classes = ['fd-textarea']
  if (className) {
    classes.push(className)
  }
  if (compact) {
    classes.push('fd-textarea--compact')
  }
  if (state) {
    classes.push(`is-${state}`)
  }

  if (stateMessage) {
    const classesMessage = ['fd-form-message']
    classesMessage.push(`fd-form-message--${state}`)
    return (
      <Popover
        className='fd-popover--input-message-group'
        control={renderTextArea()}
        noArrow
      >
        <div
          className={classesMessage.join(' ')}
        >
          {stateMessage}
        </div>
      </Popover>
    )
  }

  return renderTextArea()
}