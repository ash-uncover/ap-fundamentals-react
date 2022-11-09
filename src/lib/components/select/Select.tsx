import React, { useEffect, useState } from 'react'

import { UUID } from '@uncover/js-utils'

import {
  Button,
  ButtonStyles
} from '../../index'
export interface SelectProperties {
  children: any
}

export const Select = ({
  children
}: SelectProperties) => {

  // Hooks //

  const [id, setId] = useState<string | undefined>()
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    setId(UUID.next())
  }, [])

  // Events //

  const onToggleOpen = () => {
    setOpened(!opened)
  }

  // Rendering //

  return (
    <div className='fd-popover'>
      <div className='fd-popover__control'>
        <div className='fd-select'>
          <button
            id={id}
            className='fd-select__control'
            aria-expanded={!!opened}
            aria-haspopup='listbox'
            aria-labelledby='cozySelectLabel cozySelectValue'
            tabIndex={0}
            value='List Item 1'
            onClick={onToggleOpen}
          >
            <span
              is='cozySelectValue'
              className='fd-select__text-content'
            >
              List Item 1
            </span>
            <Button
              style={ButtonStyles.TRANSPARENT}
              icon='slim-arrow-down'
            />
            <span className='fd-button fd-button--transparent fd-select__button'>
              <i className='sap-icon--slim-arrow-down'></i>
            </span>
          </button>
        </div>
      </div>
      <div
        className='fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown'
        aria-hidden={!opened}
      >
        <ul
          aria-activedescendant='cozySelectCombobox-currentlyFocusedItem'
          aria-labelledby={id}
          className='fd-list fd-list--dropdown'
          role='listbox'
        >
          {children}
        </ul>
      </div>
    </div>
  )
}