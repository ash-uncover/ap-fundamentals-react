import React, { ChangeEvent, useEffect, useState } from 'react'

import { ButtonDesigns } from '../../constants/ButtonDesign'
import { InputState } from '../../constants/InputState'

import { FioriComponentProperties } from '../../components/FioriBase'

import { Button } from '../../components/button/Button'

export interface StepInputInfo {
  compact?: boolean
  disabled?: boolean
  min?: number
  max?: number
  readOnly?: boolean
  state?: InputState
  value: number

  onChange: (v: number) => void
}

export interface StepInputProperties extends
  FioriComponentProperties,
  StepInputInfo {
}

export const StepInput = ({
  id,
  className,
  style,

  compact,
  disabled,
  min,
  max,
  readOnly,
  state,
  value,

  onChange,
}: StepInputProperties) => {

  // Hooks //

  const [currentValue, setCurrentValue] = useState(value || min || 0)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    updateValue(value)
  }, [value])

  const updateValue = (newValue: number) => {
    let tmpValue = newValue
    if (min && !isNaN(min) && tmpValue < min) {
      tmpValue = min
    }
    if (max && !isNaN(max) && tmpValue > max) {
      tmpValue = max
    }
    setCurrentValue(tmpValue)
    onChange(tmpValue)
  }

  // Events //

  const onValueDown = () => {
    updateValue(currentValue - 1)
  }

  const onValueUp = () => {
    updateValue(currentValue + 1)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateValue(Number(event.target.value))
  }

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
  }

  // Rendering //

  const classes = ['fd-step-input']
  const classesButton = ['fd-step-input__button']
  const classesInput = ['fd-input fd-input--no-number-spinner fd-step-input__input']
  if (className) {
    classes.push(className)
  }
  if (compact) {
    classes.push('fd-step-input--compact')
    classesButton.push('fd-button--compact')
    classesInput.push('fd-input--compact')
  }
  if (disabled) {
    classes.push(`is-disabled`)
  }
  if (focused) {
    classes.push(`is-focus`)
  }
  if (readOnly) {
    classes.push(`is-readonly`)
  }
  if (state) {
    classes.push(`is-${state}`)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <Button
        className={classesButton.join(' ')}
        ariaLabel='Step down'
        design={ButtonDesigns.TRANSPARENT}
        tabIndex={-1}
        icon='less'
        onClick={onValueDown}
      />
      <input
        id={id}
        className={classesInput.join(' ')}
        style={{
          width: '100%'
        }}
        disabled={disabled}
        readOnly={readOnly}
        type='number'
        value={currentValue}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={handleFocus}
      />
      <Button
        className={classesButton.join(' ')}
        ariaLabel='Step Up'
        design={ButtonDesigns.TRANSPARENT}
        tabIndex={-1}
        icon='add'
        onClick={onValueUp}
      />
    </div>
  )
}