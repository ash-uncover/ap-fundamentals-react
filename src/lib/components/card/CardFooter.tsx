import React, { ReactElement } from 'react'

export interface CardFooterProperties {
  className?: string
  children?: ReactElement | ReactElement[]
}

export const CardFooter = ({
  className,
  children,
}: CardFooterProperties) => {

  // Rendering //

  const classes = ['fd-card__footer']
  if (className) {
    classes.push(className)
  }

  return (
    <a
      className={classes.join(' ')}
    >
      {children}
    </a>
  )
}
