import React from 'react'

import { FioriComponentProperties } from '../FioriBase'

export interface PageBodyProperties extends FioriComponentProperties {
  children?: any
}
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