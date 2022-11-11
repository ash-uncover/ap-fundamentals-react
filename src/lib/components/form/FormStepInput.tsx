import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

import { UUID } from '@uncover/js-utils'

import { Button } from '../../components/button/Button'
import { ButtonDesigns } from '../../constants/ButtonDesign'

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

  const updateValue = (newValue: number) => {
    let tmpValue = newValue
    if (!isNaN(min) && tmpValue < min) {
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
          design={ButtonDesigns.TRANSPARENT}
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
          design={ButtonDesigns.TRANSPARENT}
          tabIndex={-1}
          icon='add'
          onClick={onValueUp}
        />
      </div>
    </div>
  )
}