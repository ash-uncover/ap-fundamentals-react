import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

import { UUID } from '@uncover/js-utils'

import { Button } from '../../components/button/Button'
import { ButtonStyles } from '../../constants/ButtonStyle'

export interface FormStepInputProperties {
  className?: string
  label?: string
  min: number
  max?: number
  value: number
  onChange: (v: number) => void
}

export const FormStepInput = ({
  className,
  label,
  min,
  max,
  value,
  onChange,
}: FormStepInputProperties) => {

  // Hooks //

  const input = useRef(null)
  const [currentValue, setCurrentValue] = useState<number>(min)

  useEffect(() => {
    updateValue(value)
  }, [value])

  const updateValue = (value: number) => {
    let newValue = value
    if (!isNaN(min) && newValue < min) {
      newValue = min
    }
    if (max && !isNaN(max) && newValue > max) {
      newValue = max
    }
    setCurrentValue(newValue)
    onChange(newValue)
  }

  // Events //

  const onValueDown = () => {
    updateValue(currentValue - 1)
  }

  const onValueUp = () => {
    updateValue(currentValue + 1)
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateValue(Number(event.target.value))
  }

  // Rendering //

  const id = UUID.next()

  const classes = ['fd-form-item']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      <label
        className='fd-form-label'
        htmlFor={id}
      >
        {label}
      </label>
      <div className='fd-step-input'>
        <Button
          className='fd-step-input__button'
          ariaLabel='Step down'
          style={ButtonStyles.TRANSPARENT}
          tabIndex={-1}
          icon='less'
          onClick={onValueDown}
        />
        <input
          id={id}
          className='fd-input fd-input--no-number-spinner fd-step-input__input'
          style={{
            width: '100%'
          }}
          type='number'
          value={currentValue}
          ref={input}
          onChange={onInputChange}
        />
        <Button
          className='fd-step-input__button'
          ariaLabel='Step Up'
          style={ButtonStyles.TRANSPARENT}
          tabIndex={-1}
          icon='add'
          onClick={onValueUp}
        />
      </div>
    </div>
  )
}