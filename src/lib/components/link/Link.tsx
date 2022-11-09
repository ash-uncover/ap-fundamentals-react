import { LinkType } from 'constants/LinkType'
import React from 'react'


export interface LinkProperties {
  href:string
  className?: string
  ariaLabel?: string
  style?: LinkType
  icon?: string
  iconAfter?: boolean
  text: string | number
  disabled?: boolean
  tabIndex?: number
}

export const Link = ({
  href,
  className,
  ariaLabel,
  style,
  icon,
  iconAfter,
  text,
  disabled,
  tabIndex,
}: LinkProperties) => {

  // Rendering //

  const classes = ['fd-link']
  if (className) {
    classes.push(className)
  }

  if (style) {
    classes.push(`fd-link--${style}`)
  }

  return (
    <a
      href={href}
      className={classes.join(' ')}
      aria-label={ariaLabel}
      tabIndex={tabIndex ? tabIndex : 0}
      aria-disabled={disabled ? true : false}
    >
      <span className="fd-link__content">

      {icon && !iconAfter ?
      <span className={`sap-icon--${icon}`}></span>
      : null}

      {text}

      {icon && iconAfter ?
      <span className={`sap-icon--${icon}`}></span>
      : null}

      </span>

    </a>
  )
}