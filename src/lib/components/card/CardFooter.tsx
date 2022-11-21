import React, { ReactElement } from 'react'
// Components
import { FioriComponentProperties } from 'components/FioriBase'

export interface CardFooterInfo {
  children?: ReactElement | ReactElement[]
}

export interface CardFooterProperties extends
  FioriComponentProperties,
  CardFooterInfo {
}

export const CardFooter = ({
  className,
  style,

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
      style={style}
    >
      {children}
    </a>
  )
}
