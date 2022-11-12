import React, { ReactElement } from 'react'

export interface BarRightProperties {
  className?: string
  style?: React.CSSProperties

  children: ReactElement | ReactElement[]
}

export const BarRight = ({
  className,
  style,

  children
}: BarRightProperties) => {

  // Rendering //

  const classes = ['fd-bar__right']
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