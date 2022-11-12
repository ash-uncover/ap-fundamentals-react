import React from 'react'

export interface PageBodyProperties {
  className?: string
  style?: React.CSSProperties

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