import React, { KeyboardEvent } from 'react'

import { Avatar, AvatarProperties } from '../../components/avatar/Avatar'

export interface CardHeaderProperties {
  avatar?: AvatarProperties
  title?: string
  titleCounter?: string
  subTitle?: string
  onClick?: () => void
}

export const CardHeader = ({
  avatar,
  title,
  titleCounter,
  subTitle,
  onClick,
}: CardHeaderProperties) => {

  // Events //

  const onClicked = () => {
    onClick && onClick()
  }

  const onKeyUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'Enter':
      case 'Space': {
        event.stopPropagation()
        onClick && onClick()
      }
      default: {
        break;
      }
    }
  }

  // Rendering //

  const classes = ['fd-card__header']

  return (
    <a
      className={classes.join(' ')}
      tabIndex={0}
      onClick={onClicked}
      onKeyUp={onKeyUp}
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
