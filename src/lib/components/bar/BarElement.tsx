import React, { ReactElement } from 'react'

export interface BarElementProperties {
  className?: string
  style?: React.CSSProperties

  children: ReactElement
}

export const BarElement = ({
  className,
  style,

  children
}: BarElementProperties) => {

  // Rendering //

  const classes = ['fd-bar__element']
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