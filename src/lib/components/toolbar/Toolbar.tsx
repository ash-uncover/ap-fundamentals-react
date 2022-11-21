import React, { ReactElement } from 'react'
// Constants
import { FioriComponentProperties } from '../../components/FioriBase'
import { TitleLevel, TitleLevels } from '../../constants/TitleLevel'
// Components
import { ToolbarSpacer } from '../../components/toolbar/ToolbarSpacer'
import { Title } from '../../components/title/Title'

import './Toolbar.css'
export interface ToolbarInfo {
  active?: boolean
  clear?: boolean
  title?: string
  titleLevel?: TitleLevel
  solid?: boolean
  transparent?: boolean

  children?: ReactElement | ReactElement[]
}

export interface ToolbarProperties extends
  FioriComponentProperties,
  ToolbarInfo { }

export const Toolbar = ({
  className,
  style,

  active,
  clear,
  title,
  solid,
  titleLevel = TitleLevels.H4,
  transparent,

  children,
}: ToolbarProperties) => {

  // Rendering //

  const classes = ['fd-toolbar']
  if (className) {
    classes.push(className)
  }
  if (active) {
    classes.push('fd-toolbar-active')
  }
  if (title) {
    classes.push('fd-toolbar--title')
  }
  if (clear) {
    classes.push('fd-toolbar--clear')
  }
  if (transparent) {
    classes.push('fd-toolbar--transparent')
  }
  if (solid) {
    classes.push('fd-toolbar--solid')
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      {title ?
        <Title
          className='fd-toolbar__title'
          level={titleLevel}
          text={title}
        />
        : null}
      <ToolbarSpacer />
      {children}

    </div>
  )
}