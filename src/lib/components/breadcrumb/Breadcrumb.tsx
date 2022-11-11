import React from 'react'
import { BreadcrumbItem } from './BreadcrumbItem'

export interface BreadcrumbProperties {
  className?: string
  style?: any

  ariaLabel: string

  items: BreadcrumbItem[]

  onItemSelected: (id: string) => void
}

interface BreadcrumbItem {
  text: string

  onItemSelected?: () => void
}

export const Breadcrumb = ({
  className,
  style,

  ariaLabel,

  items,

  onItemSelected,
}: BreadcrumbProperties) => {

  // Rendering //

  const classes = []
  if (className) {
    classes.push(className)
  }

  return (
    <nav
      className={classes.join(' ')}
      style={style}
      aria-label={ariaLabel}
    >
      <ul className='fd-breadcrumb'>
        {items.map((item, index) => {
          return (
            <BreadcrumbItem
              key={index}
              text={item.text}
              current={index === items.length - 1}
              onItemSelected={item.onItemSelected ? item.onItemSelected : () => onItemSelected(item.text)}
            />
          )
        })}
      </ul>
    </nav>
  )
}