import React, { KeyboardEvent, MouseEvent } from 'react'

import { FioriComponentProperties } from '../../components/FioriBase'

import { IconTabBarDesign, IconTabBarDesigns } from '../../constants/IconTabBarDesign'
import { Semantic } from '../../constants/Semantic'

export interface IconTabBarItemProperties extends FioriComponentProperties {
  action?: string
  actionAriaLabel?: string
  badge?: boolean
  counter?: string
  design?: IconTabBarDesign
  icon?: string,
  id: string
  process?: boolean
  selected?: boolean
  semantic?: Semantic
  title?: string

  onTabSelect?: (id: string) => void
  onActionSelect?: () => void
}

export const IconTabBarItem = ({
  className,
  style,

  action,
  actionAriaLabel,
  badge,
  counter,
  icon,
  design,
  id,
  process,
  selected,
  semantic,
  title,

  onTabSelect,
  onActionSelect,
}: IconTabBarItemProperties) => {

  // Events //

  const onActionClick = (event: MouseEvent) => {
    if (onActionSelect) {
      onActionSelect()
    }
  }

  const onClick = () => {
    if (onTabSelect) {
      onTabSelect(id)
    }
  }

  const onKeyUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'Enter':
      case 'Space': {
        event.stopPropagation()
        if (onTabSelect) {
          onTabSelect(id)
        }
      }
      default: {
        break;
      }
    }
  }

  // Rendering //

  const renderContent = () => {
    switch (design) {
      case IconTabBarDesigns.ICON: {
        return (
          <>
            <div className='fd-icon-tab-bar__container'>
              <span className='fd-icon-tab-bar__icon'>
                <i className={`sap-icon--${icon}`} role='presentation' />
              </span>
              {badge ?
                <span className='fd-icon-tab-bar__badge' />
                : null}
            </div>
            <div className='fd-icon-tab-bar__details'>
              {counter ?
                <span className='fd-icon-tab-bar__counter'>
                  {counter}
                </span>
                : null}
              {title ?
                <span className='fd-icon-tab-bar__label'>
                  {title}
                </span>
                : null}
            </div>
          </>
        )
      }
      case IconTabBarDesigns.ICON_ONLY: {
        return (
          <>
            <span className='fd-icon-tab-bar__icon'>
              <i className={`sap-icon--${icon}`} role='presentation' />
            </span>
            {badge ?
              <span className='fd-icon-tab-bar__badge' />
              : null}
            {counter ?
              <span className='fd-icon-tab-bar__counter'>
                {counter}
              </span>
              : null}
          </>
        )
      }
      case IconTabBarDesigns.COUNTERS: {
        return (
          <>
            {counter ?
              <span className='fd-icon-tab-bar__counter'>
                {counter}
              </span>
              : null}
            {title ?
              <span className='fd-icon-tab-bar__label'>
                {title}
              </span>
              : null}
            {badge ?
              <span className='fd-icon-tab-bar__badge' />
              : null}
          </>
        )
      }
      default: {
        return (
          <>
            <span className='fd-icon-tab-bar__tag'>
              {title}
            </span>
            {badge ?
              <span className='fd-icon-tab-bar__badge' />
              : null}
          </>
        )
      }
    }
  }

  const classes = ['fd-icon-tab-bar__item']
  if (className) {
    classes.push(className)
  }
  if (semantic) {
    classes.push(`fd-icon-tab-bar__item--${semantic}`)
  }

  return (
    <li
      className={classes.join(' ')}
      style={style}
      role='presentation'
    >
      <a
        id={id}
        className='fd-icon-tab-bar__tab'
        aria-selected={!!selected}
        role='tab'
        tabIndex={0}
        onClick={onClick}
        onKeyUp={onKeyUp}
      >
        {renderContent()}
      </a>
      {action ?
        <div className='fd-icon-tab-bar__button-container'>
          <button
            className='fd-button fd-button--transparent fd-button--compact  fd-icon-tab-bar__button'
            aria-label={actionAriaLabel}
            onClick={onActionClick}
          >
            <i className={`sap-icon--${action}`}></i>
          </button>
        </div>
        : null}
      {
        process ?
          <span className='fd-icon-tab-bar__separator'>
            <i
              className={'sap-icon--process'}
              role='presentation'
            ></i>
          </span>
          : null
      }
    </li >
  )
}