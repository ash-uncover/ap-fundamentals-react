import React from 'react'

import { PageBodyProperties } from './PageBody'
import { PageFooterProperties } from './PageFooter'
import { PageHeaderProperties } from './PageHeader'

import './Page.css'

export interface PageProperties {
  className?: string
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
  children: [header, body, footer]
}: PageProperties) => {

  // Rendering //

  const classes = ['fd-page']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      {header}
      <div className='fd-page__content'>
        {body}
        {footer}
      </div>
    </div>
  )
}

