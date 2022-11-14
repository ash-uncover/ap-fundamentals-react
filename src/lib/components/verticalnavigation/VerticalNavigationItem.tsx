import React, {
  KeyboardEvent,
  MouseEvent,
  useState
} from 'react'

export interface VerticalNavigationItemProperties {
  className?: string

  id: string
  condensed?: boolean
  expanded?: boolean
  icon?: string
  items?: VerticalNavigationItemProperties[]
  selected?: boolean
  text: string

  onItemSelect?: (id: string) => void

  children?: any | any[]
}

export const VerticalNavigationItem = ({
  className,

  id,
  condensed,
  expanded,
  icon,
  items,
  selected,
  text,

  onItemSelect,

  children,
}: VerticalNavigationItemProperties) => {


  // Hooks //

  const [isExpanded, setExpanded] = useState(expanded)
  const expandable = Boolean(items?.length) || Boolean(children)

  // Events //

  const onClick = (event: MouseEvent) => {
    event.stopPropagation()
    if (onItemSelect) {
      onItemSelect(id)
    }
  }

  const onKeyUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'Enter':
      case 'Space': {
        event.stopPropagation()
        if (onItemSelect) {
          onItemSelect(id)
        }
      }
      default: {
        break;
      }
    }
  }

  // Rendering //

  const classes = ['fd-list__navigation-item']
  if (className) {
    classes.push(className)
  }
  if (condensed) {
    classes.push('fd-list__navigation-item--condensed')
  }
  if (expandable) {
    classes.push('fd-list__navigation-item--expandable')
  }
  if (isExpanded) {
    classes.push('is-expanded')
  }
  if (selected) {
    classes.push('fd-list__navigation-item--indicated')
  }

  const classesArrow = ['fd-list__navigation-item-arrow']
  if (isExpanded) {
    classesArrow.push('is-expanded')
    classesArrow.push('sap-icon--navigation-down-arrow')
  } else {
    classesArrow.push('sap-icon--navigation-right-arrow')
  }

  return (
    <li
      className={classes.join(' ')}
      tabIndex={0}
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      {icon ?
        <i
          className={`fd-list__navigation-item-icon sap-icon--${icon}`}
          role='presentation'
        ></i>
        : null}
      <span className='fd-list__navigation-item-text'>
        {text}
      </span>
      {expandable ?
        <button
          className={classesArrow.join(' ')}
          aria-label='Expand second submenu'
          onClick={() => setExpanded(!isExpanded)}
        ></button>
        : null}
      {expandable && isExpanded && (Boolean(items?.length) || Boolean(children)) ?
        <ul className='fd-list'>
          {items?.map(item => {
            return (
              <VerticalNavigationItem
                key={item.id}
                className={item.className}
                id={item.id}
                condensed={condensed || item.condensed}
                expanded={item.expanded}
                icon={item.icon}
                items={item.items}
                text={item.text}
                selected={item.selected}
                onItemSelect={onItemSelect}
              />
            )
          })}
          {children}
        </ul>
        : null}

    </li>
  )
}
