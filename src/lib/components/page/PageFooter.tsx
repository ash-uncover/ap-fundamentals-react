import React from 'react'

export interface PageFooterProperties {
  className?: string
  children?: any
}
export const PageFooter = ({
  className,
  children
}: PageFooterProperties) => {

  // Rendering //

  const classes = ['fd-page__footer']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}
