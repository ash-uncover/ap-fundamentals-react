import React, { ReactNode } from 'react'
import { Icon, IconProperties } from "../components/icon/Icon"

export const renderIcon = (
  iconInfo: string | IconProperties,
  className?: string
): ReactNode => {
  if (typeof iconInfo === 'string') {
    return (
      <Icon
        className={className}
        icon={iconInfo}
      />
    )
  }
  const classes = (iconInfo.className || '').split(' ')
  if (className && !classes.includes(className)) {
    classes.push(className)
  }
  return (
    <Icon
      {...iconInfo}
      className={classes.join(' ')}
    />
  )
}
