import React, { KeyboardEvent } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { Avatar, AvatarInfo } from '../../components/avatar/Avatar'

export interface CardHeaderInfo {
  avatar?: AvatarInfo
  title?: string
  titleCounter?: string
  subTitle?: string
  onClick?: () => void
}

export interface CardHeaderProperties extends
FioriComponentProperties,
CardHeaderInfo {
}

export const CardHeader = ({
  className,
  style,

  avatar,
  title,
  titleCounter,
  subTitle,
  onClick,
}: CardHeaderProperties) => {

  // Events //

  const onClicked = () => {
    if (onClick) {
      onClick()
    }
  }

  const onKeyUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'Enter':
      case 'Space': {
        event.stopPropagation()
        if (onClick) {
          onClick()
        }
      }
      default: {
        break;
      }
    }
  }

  // Rendering //

  const classes = ['fd-card__header']
  if (className) {
    classes.push(className)
  }

  return (
    <a
      className={classes.join(' ')}
      tabIndex={0}
      onClick={onClicked}
      onKeyUp={onKeyUp}
      style={style}
    >
      {avatar ? <Avatar {...avatar} /> : null}
      {title || titleCounter ?
        <div className='fd-card__title-area'>
          <div className='fd-card__title'>
            {title}
          </div>
          <span className='fd-object-status fd-card__counter'>
            {titleCounter}
          </span>
        </div>
        : null}
      {subTitle ?
        <div className='fd-card__subtitle-area'>
          <div className='fd-card__subtitle'>
            {subTitle}
          </div>
        </div>
        : null}
    </a>
  )
}
