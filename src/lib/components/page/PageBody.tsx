import React from 'react'

export interface PageBodyProperties {
  className?: string
  children?: any
}
export const PageBody = ({
  className,
  children
}: PageBodyProperties) => {

  // Rendering //

  const classes = ['fd-page__body']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}