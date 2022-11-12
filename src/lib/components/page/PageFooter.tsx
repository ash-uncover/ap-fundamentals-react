import React from 'react'

export interface PageFooterProperties {
  className?: string
  style?: React.CSSProperties

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
