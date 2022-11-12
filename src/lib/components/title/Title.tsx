import React from 'react'

import { TitleLevel, TitleLevels } from '../../constants/TitleLevel'

export type TitleProperties = {
  className?: string
  style?: React.CSSProperties

  level?: TitleLevel
  levelVisual?: TitleLevel
  text: string
  wrap?: boolean
}

export const Title = ({
  className,
  style,

  level,
  levelVisual,
  text,
  wrap,
}: TitleProperties) => {

  // Rendering //

  const classes = ['fd-title']
  classes.push(`fd-title--h${levelVisual || level || TitleLevels.H1}`)
  if (className) {
    classes.push(className)
  }
  if (wrap) {
    classes.push('fd-title--wrap')
  }

  switch (level) {
    case TitleLevels.H6: {
      return (
        <h6 className={classes.join(' ')} style={style}>{text}</h6>
      )
    }
    case TitleLevels.H5: {
      return (
        <h5 className={classes.join(' ')} style={style}>{text}</h5>
      )
    }
    case TitleLevels.H4: {
      return (
        <h4 className={classes.join(' ')} style={style}>{text}</h4>
      )
    }
    case TitleLevels.H3: {
      return (
        <h3 className={classes.join(' ')} style={style}>{text}</h3>
      )
    }
    case TitleLevels.H2: {
      return (
        <h2 className={classes.join(' ')} style={style}>{text}</h2>
      )
    }
    default: {
      return (
        <h1 className={classes.join(' ')} style={style}>{text}</h1>
      )
    }
  }
}