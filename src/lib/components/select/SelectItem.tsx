import React from 'react'

export interface SelectItemProperties {
  selected?: boolean,
  id: string,
  title: string,
  onSelect: () => void
}

export const SelectItem = ({
  selected,
  title,
  onSelect
}: SelectItemProperties) => {

  // Events //

  const onItemSelected = () => {
    onSelect()
  }

  // Rendering //

  const classes = ['fd-list__item']
  if (selected) {
    classes.push('is-selected')
  }

  return (
    <li
      className={classes.join(' ')}
      aria-selected={`${Boolean(selected)}`}
      role='option'
      tabIndex={0}
      onClick={onItemSelected}
    >
      <span className='fd-list__title'>
        {title}
      </span>
    </li>
  )
}