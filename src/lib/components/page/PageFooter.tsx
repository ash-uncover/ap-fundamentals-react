import React from 'react'

import { FioriComponentProperties } from '../FioriBase'

export interface PageFooterProperties extends FioriComponentProperties {
  children?: any
}
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
