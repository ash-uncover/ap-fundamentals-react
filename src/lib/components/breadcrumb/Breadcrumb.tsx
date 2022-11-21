import React from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { BreadcrumbItem } from '../../components/breadcrumb/BreadcrumbItem'

export interface BreadcrumbInfo {
  ariaLabel: string

  items: BreadcrumbItem[]

  onItemSelected?: (id: string) => void
}
export interface BreadcrumbProperties extends
  FioriComponentProperties,
  BreadcrumbInfo {
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

  // Events //

  const onItemClicked = (item: BreadcrumbItem) => {
    if (item.onItemSelected) {
      item.onItemSelected()
    } else if (onItemSelected) {
      onItemSelected(item.text)
    }
    return false
  }

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
              onItemSelected={() => onItemClicked(item)}
            />
          )
        })}
      </ul>
    </nav>
  )
}