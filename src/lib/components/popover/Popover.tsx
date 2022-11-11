import React from 'react'

export interface PopoverProperties {

}
export const Popover = ({

}: PopoverProperties) => {

  // Hooks //

  // Events //

  const onTogglePopover = () => {

  }

  // Rendering //

  const classes = ['fd-popover']

  return (
    <div className={classes.join(' ')}>
      <div className='fd-popover__control'>
        <button
          className='fd-button'
          role='button'
          aria-controls='popoverA1'
          aria-expanded='true'
          aria-haspopup='true'
          onClick={onTogglePopover}
        >
          <i className='sap-icon--navigation-down-arrow'></i>
        </button>

        Left-aligned (default)
      </div>
      <div
        className='fd-popover__body'
        aria-hidden='false'
        id='popoverA1'
      >
        <nav className='fd-menu' aria-label='options'>
          <ul className='fd-menu__list fd-menu__list--no-shadow'>
            <li className='fd-menu__item'>
              <a className='fd-menu__link' href='#'>
                <span className='fd-menu__title'>Option 1</span>
              </a>
            </li>
            <li className='fd-menu__item'>
              <a className='fd-menu__link' href='#'>
                <span className='fd-menu__title'>Option 2</span>
              </a>
            </li>
            <li className='fd-menu__item'>
              <a className='fd-menu__link' href='#'>
                <span className='fd-menu__title'>Option 3</span>
              </a>
            </li>
            <li className='fd-menu__item'>
              <a className='fd-menu__link' href='#'>
                <span className='fd-menu__title'>Option 4</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}