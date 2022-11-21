import React, { useState } from 'react'
// Utils
import { UUID } from '@uncover/js-utils'
// Constants
import { AccentColor } from '../../constants/AccentColor'
import { PageHeaderAttributeType, PageHeaderAttributeTypes } from '../../constants/PageHeaderAttributeType'
import { Semantic } from '../../constants/Semantic'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { InfoLabel } from '../../components/infolabel/InfoLabel'
import { ObjectStatus } from '../../components/object/ObjectStatus'
import { ObjectText } from '../../components/object/ObjectText'

import './PageHeaderAttribute.css'

export interface PageHeaderAttributeInfo {
  accentColor?: AccentColor
  label: string
  semantic?: Semantic
  text: string
  type: PageHeaderAttributeType
}

export interface PageHeaderAttributeProperties extends
  FioriComponentProperties,
  PageHeaderAttributeInfo {
}

export const PageHeaderAttribute = ({
  className,
  style,

  accentColor,
  label,
  semantic,
  text,
  type,
}: PageHeaderAttributeProperties) => {

  // Rendering //

  const [id] = useState(`page-header-attribute-${UUID.next()}`)

  const renderControl = () => {
    switch (type) {
      case PageHeaderAttributeTypes.INFO_LABEL: return (
        <InfoLabel
          className='ap-fd-page-header-attribute__control'
          accentColor={accentColor}
          text={text}
          style={{
            width: 'fit-content'
          }}
        />
      )
      case PageHeaderAttributeTypes.STATUS: return (
        <ObjectStatus
          className='ap-fd-page-header-attribute__control'
          semantic={semantic}
          text={text}
        />
      )
      case PageHeaderAttributeTypes.TEXT: return (
        <ObjectText
          className='ap-fd-page-header-attribute__control'
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
