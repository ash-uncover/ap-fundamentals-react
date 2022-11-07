import React, { ReactElement } from 'react'

import { ToolbarSpacer } from '../../components/toolbar/ToolbarSpacer'
import { Title } from '../../components/title/Title'

import { TitleLevel, TitleLevels } from '../../constants/TitleLevel'

export interface ToolbarProperties {
  title?: string
  titleLevel?: TitleLevel
  active?: boolean
  clear?: boolean
  transparent?: boolean
  solid?: boolean
  children?: ReactElement | ReactElement[]
}

export const Toolbar = ({
  title,
  titleLevel = TitleLevels.H4,
  active,
  clear,
  transparent,
  solid,
  children,
}: ToolbarProperties) => {

  // Rendering //

  const classes = ['fd-toolbar']
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