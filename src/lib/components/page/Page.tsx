import React, { ReactNode } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

import './Page.css'

export interface PageInfo {
  children: ReactNode[]
}
export interface PageProperties extends
  FioriComponentProperties,
  PageInfo { }

export const Page = ({
  className,
  style,

  children: [header, body, footer]
}: PageProperties) => {

  // Rendering //

  const classes = ['ap-fd-page']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      {header}
      <div className='ap-fd-page__content'>
        {body}
        {footer}
      </div>
    </div>
  )
}

