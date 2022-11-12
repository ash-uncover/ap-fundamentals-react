import React, { ReactElement } from 'react'

export interface BarLeftProperties {
  className?: string
  style?: React.CSSProperties

  children: ReactElement | ReactElement[]
}

export const BarLeft = ({
  className,
  style,

  children
}: BarLeftProperties) => {

  // Rendering //

  const classes = ['fd-bar__left']
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