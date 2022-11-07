import React from 'react'

export interface PageHeaderProperties {
  className?: string
  children?: any
}
export const PageHeader = ({
  className,
  children
}: PageHeaderProperties) => {

  // Rendering //

  const classes = ['fd-page__header']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}
