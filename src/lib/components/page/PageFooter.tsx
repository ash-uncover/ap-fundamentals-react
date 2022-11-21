import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface PageFooterInfo {
  children?: any
}

export interface PageFooterProperties extends
  FioriComponentProperties,
  PageFooterInfo { }

export const PageFooter = ({
  className,
  style,

  children,
}: PageFooterProperties) => {

  // Rendering //

  const classes = ['ap-fd-page__footer']
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
