import React, { ReactElement, useState } from 'react'

import { UUID } from '@uncover/js-utils'

import { Semantic } from '../../constants/Semantic'

import { FioriComponentProperties } from '../FioriBase'
import { ObjectStatus } from '../object/ObjectStatus'
import { ObjectText } from '../object/ObjectText'

import './PageHeaderAttribute.css'

export interface PageHeaderAttributeProperties extends FioriComponentProperties {
  label: string
  semantic?: Semantic
  text: string
  type: 'text' | 'status'
}

export const PageHeaderAttribute = ({
  className,
  style,

  label,
  semantic,
  text,
  type,
}: PageHeaderAttributeProperties) => {

  // Rendering //

  const [id] = useState(UUID.next())

  const renderControl = () => {
    switch (type) {
      case 'text': return (
        <ObjectText
          className='ap-fd-page-header-attribute__control'
          text={text}
        />
      )
      case 'status': return (
        <ObjectStatus
          className='ap-fd-page-header-attribute__control'
          semantic={semantic}
          text={text}
        />
      )
      default: return null
    }
  }

  const classes = ['ap-fd-page-header-attribute']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <label
        className='ap-fd-page-header-attribute__label'
        htmlFor={id}
      >
        {label}
      </label>
      {renderControl()}
    </div>
  )
}
