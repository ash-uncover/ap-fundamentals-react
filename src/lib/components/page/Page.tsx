import React from 'react'

import { FioriComponentProperties } from '../FioriBase'

import { PageBodyProperties } from './PageBody'
import { PageFooterProperties } from './PageFooter'
import { PageHeaderProperties } from './PageHeader'

import './Page.css'

export interface PageProperties extends FioriComponentProperties {
  children: [
    React.ReactElement<PageHeaderProperties>,
    React.ReactElement<PageBodyProperties>,
    React.ReactElement<PageFooterProperties>
  ] | [
    React.ReactElement<PageHeaderProperties>,
    React.ReactElement<PageBodyProperties>,
  ]
}
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

