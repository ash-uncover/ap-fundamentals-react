import React, { ReactElement } from 'react'
// Contants
import { Size, Sizes } from '../../constants/Size'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { InfoLabel } from '../../components/infolabel/InfoLabel'

export interface TileInfo {
  badge?: string
  footer?: string
  size?: Size
  subTitle?: string
  title: string

  onClick?: () => void

  children?: ReactElement | ReactElement[]
}

export interface TileProperties extends
  FioriComponentProperties,
  TileInfo { }

export const Tile = ({
  className,
  style,

  badge,
  footer,
  size = Sizes.LARGE,
  subTitle,
  title,

  onClick,

  children,
}: TileProperties) => {

  // Events //

  const onClicked = () => {
    if (onClick) {
      onClick()
    }
  }

  // Rendering //

  const classes = ['fd-tile']
  if (className) {
    classes.push(className)
  }
  if (size) {
    classes.push(`fd-tile--${size}`)
  }

  return (
    <div
      className={classes.join(' ')}
      role='button'
      tabIndex={0}
      onClick={onClicked}
      style={style}
    >
      {badge ? <InfoLabel text={badge} /> : null}
      <div className='fd-tile__header'>
        <div className='fd-tile__title'>
          {title}
        </div>
        {subTitle ?
          <div className='fd-tile__subtitle'>
            {subTitle}
          </div>
          : null}
      </div>
      <div className='fd-tile__content'>
        {children}
      </div>
      {footer ?
        <div className='fd-tile__footer'>
          <span className='fd-tile__footer-text'>
            {footer}
          </span>
        </div>
        : null}
    </div>
  )
}
