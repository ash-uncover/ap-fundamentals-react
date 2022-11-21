import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { PageBodyProperties } from '../../components/page/PageBody'
import { PageFooterProperties } from '../../components/page/PageFooter'
import { PageHeaderProperties } from '../../components/page/PageHeader'

import './Page.css'

export interface PageInfo {
  children: [
    React.ReactElement<PageHeaderProperties>,
    React.ReactElement<PageBodyProperties>,
    React.ReactElement<PageFooterProperties>
  ] | [
    React.ReactElement<PageHeaderProperties>,
    React.ReactElement<PageBodyProperties>,
  ]
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

