import React from 'react'
// Constants
import { LinkDesign } from '../../constants/LinkDesign'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'

export interface LinkInfo {
  ariaLabel?: string
  design?: LinkDesign
  disabled?: boolean
  href: string
  icon?: string
  iconAfter?: boolean
  tabIndex?: number
  text: string | number
}

export interface LinkProperties extends
  FioriComponentProperties,
  LinkInfo { }

export const Link = ({
  className,
  style,

  ariaLabel,

  design,
  disabled,
  href,
  icon,
  iconAfter,
  tabIndex,
  text,
}: LinkProperties) => {

  // Rendering //

  const classes = ['fd-link']
  if (className) {
    classes.push(className)
  }
  if (design) {
    classes.push(`fd-link--${design}`)
  }

  return (
    <a
      href={href}
      className={classes.join(' ')}
      aria-label={ariaLabel}
      tabIndex={tabIndex ? tabIndex : 0}
      aria-disabled={disabled ? true : false}
      style={style}
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