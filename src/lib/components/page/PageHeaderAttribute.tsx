import React, { useState } from 'react'

import { UUID } from '@uncover/js-utils'

import { Semantic } from '../../constants/Semantic'

import { FioriComponentProperties } from '../../components/FioriBase'
import { ObjectStatus } from '../../components/object/ObjectStatus'
import { ObjectText } from '../../components/object/ObjectText'

import './PageHeaderAttribute.css'

export interface PageHeaderAttributeInfo {
  label: string
  semantic?: Semantic
  text: string
  type: 'text' | 'status'
}

export interface PageHeaderAttributeProperties extends
  FioriComponentProperties,
  PageHeaderAttributeInfo {
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

  const [id] = useState(`page-header-attribute-${UUID.next()}`)

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
