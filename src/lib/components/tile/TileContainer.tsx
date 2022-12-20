import React, { ReactElement } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface TileContainerInfo {
  children?: string | ReactElement | ReactElement[]
}

export interface TileContainerProperties extends
  FioriComponentProperties,
  TileContainerInfo { }

export const TileContainer = ({
  className,
  style,

  children,
}: TileContainerProperties) => {

  // Rendering //

  const classes = ['fd-tile fd-tile-container']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={{
        ...style,
        minHeight: 0,
        maxHeight: 'none',
        height: 'auto',
        minWidth: 0,
        maxWidth: 'none',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}