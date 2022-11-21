import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface PageBodyInfo {
  children?: any
}
export interface PageBodyProperties extends
  FioriComponentProperties,
  PageBodyInfo { }

export const PageBody = ({
  className,
  style,

  children,
}: PageBodyProperties) => {

  // Rendering //

  const classes = ['ap-fd-page__body']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      {children}
    </div>
  )
}