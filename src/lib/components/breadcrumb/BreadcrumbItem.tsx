import React from 'react'

export interface BreadcrumbItemProperties {
  className?: string
  style?: React.CSSProperties

  text: string
  current?: boolean

  onItemSelected: () => void
}

export const BreadcrumbItem = ({
  className,
  style,

  text,
  current,

  onItemSelected,
}: BreadcrumbItemProperties) => {

  // Events //

  const onClick = () => {
    onItemSelected()
    return false
  }
  // Rendering //

  const classes = ['fd-breadcrumb__item']
  if (className) {
    classes.push(className)
  }

  if (current) {
    return (
      <li
        className={classes.join(' ')}
        style={style}
        aria-current='page'
      >
        {text}
      </li>
    )
  }
  return (
    <li
      className={classes.join(' ')}
      style={style}
    >
      <a
        className='fd-link'
        tabIndex={0}
        href='#'
        onClick={onClick}
      >
        <span className='fd-link__content'>
          {text}
        </span>
      </a>
    </li>
  )
}