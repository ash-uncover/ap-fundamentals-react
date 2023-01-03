import React, { ReactNode } from 'react'
// Constants
import { Sizes } from '../../constants/Size'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { Avatar, AvatarProperties } from '../../components/avatar/Avatar'
import { ObjectText } from '../../components/object/ObjectText'
import { ObjectIdentifier } from '../../components/object/ObjectIdentifier'
import { ObjectMarker } from '../../components/object/ObjectMarker'
import { ObjectNumber } from '../../components/object/ObjectNumber'
import { ObjectStatus } from '../../components/object/ObjectStatus'


/*
<ObjectListItem
  intro='hello world'
  avatar={{
    icon: 'home',
    label: 'Home',
    circle: true
  }}
  title='My Object List Item'
  info={{
    type: 'number',
    props: {
      value: '457.00',
      unit: 'EUR'
    }
  }}
  attributes={[
    {
      name: 'First Attribute',
      items: [
        {
          type: 'marker',
          props: { icon: 'flag', iconOnly: true }
        },
        {
          type: 'marker',
          props: { icon: 'favorite', iconOnly: true }
        }
      ]
    },
    {
      name: 'Second Attribute',
      items: [
        {
          type: 'status',
          props: {
            text: 'Positive Value',
            semantic: 'positive'
          }
        }
      ]
    },
    {
      name: 'Third Attribute',
      items: [
        {
          type: 'attribute',
          props: { text: 'Value' }
        }
      ]
    },
  ]}
/>
*/

export interface ObjectListItemInfo {
  intro?: string
  avatar?: AvatarProperties
  title?: string
  info?: any
  attributes?: any[]
  children?: ReactNode
}

export interface ObjectListItemProperties extends
  FioriComponentProperties,
  ObjectListItemInfo { }
export interface ObjectListItemHeaderProperties {
  avatar?: ReactNode
  left?: ReactNode
  right?: ReactNode
  children?: ReactNode
}
export interface ObjectListItemRowProperties {
  left?: ReactNode
  right?: ReactNode
  children?: ReactNode
}

export const ObjectListItem = ({
  className,
  style,

  intro,
  avatar,
  title,
  info,
  attributes,
  children,
}: ObjectListItemProperties) => {

  // Rendering //

  const classes = ['fd-list__item', 'fd-object-list__item']
  if (className) {
    classes.push(className)
  }

  return (
    <li
      className={classes.join(' ')}
      style={{
        ...style,
        height: 'auto'
      }}
      role='listitem'
      tabIndex={0}
    >
      <div className='fd-object-list__container'>
        {intro ?
          <div className='fd-object-list__intro'>
            {intro}
          </div>
          : null}
        {info && avatar && title ?
          <ObjectListItemHeader
            avatar={<Avatar {...avatar} size={Sizes.SMALL} />}
            left={
              <ObjectIdentifier
                className='fd-object-list__object-identifier'
                title={title}
              />
            }
            right={
              <ObjectListItemInfo
                type={info.type}
                props={info.props}
              />
            }
          />
          : null}
        <div className='fd-object-list__content'>
          {attributes?.map((attribute, index) => {
            return (
              <ObjectListItemRow key={`attribute-${index}`}>
                <ObjectListItemRowLeft>
                  <ObjectText text={attribute.name} />
                </ObjectListItemRowLeft>
                <ObjectListItemRowRight>
                  {attribute.items?.map((item: ObjectListItemInfoProperties, indexItem: number) => {
                    return (
                      <ObjectListItemInfo
                        key={`item-${index}-${indexItem}`}
                        {...item}
                      />
                    )
                  })}
                </ObjectListItemRowRight>
              </ObjectListItemRow>
            )
          })}
          {children}
        </div>
      </div>
    </li>
  )
}

const ObjectListItemHeader = ({
  avatar,
  left,
  right,
  children
}: ObjectListItemHeaderProperties) => {
  return (
    <div className='fd-object-list__header'>
      {avatar ? avatar : children}
      {left ?
        <ObjectListItemHeaderLeft>
          {left}
        </ObjectListItemHeaderLeft>
        : null}
      {right ?
        <ObjectListItemHeaderRight>
          {right}
        </ObjectListItemHeaderRight>
        : null}
    </div>
  )
}

export interface ObjectListItemHeaderLeftProperties {
  children: ReactNode
}
const ObjectListItemHeaderLeft = ({
  children
}: ObjectListItemHeaderLeftProperties) => {
  return (
    <div className='fd-object-list__header-left'>
      {children}
    </div>
  )
}

export interface ObjectListItemHeaderRightProperties {
  children: ReactNode
}
const ObjectListItemHeaderRight = ({
  children
}: ObjectListItemHeaderRightProperties) => {
  return (
    <div className='fd-object-list__header-right'>
      {children}
    </div>
  )
}

const ObjectListItemRow = ({
  left,
  right,
  children,
}: ObjectListItemRowProperties) => {
  return (
    <div className='fd-object-list__row'>
      {left ?
        <ObjectListItemRowLeft>
          {left}
        </ObjectListItemRowLeft>
        : null}
      {right ?
        <ObjectListItemRowRight>
          {right}
        </ObjectListItemRowRight>
        : null}
      {(left || right) ? null : children}
    </div>
  )
}

export interface ObjectListItemRowLeftProperties {
  children: ReactNode
}
const ObjectListItemRowLeft = ({
  children
}: ObjectListItemRowLeftProperties) => {
  return (
    <div className='fd-object-list__row-left'>
      {children}
    </div>
  )
}

export interface ObjectListItemRowRightProperties {
  children: ReactNode
}
const ObjectListItemRowRight = ({
  children
}: ObjectListItemRowRightProperties) => {
  return (
    <div className='fd-object-list__row-right'>
      {children}
    </div>
  )
}

export interface ObjectListItemInfoProperties {
  type: 'attribute' | 'marker' | 'number' | 'status' | 'identifier'
  props: any
}
const ObjectListItemInfo = ({
  type,
  props
}: ObjectListItemInfoProperties) => {
  switch (type) {
    case 'attribute': {
      return (
        <ObjectText
          text={props.text}
        />
      )
    }
    case 'marker': {
      return (
        <ObjectMarker
          icon={props.icon}
          iconOnly={props.iconOnly}
          text={props.text}
        />
      )
    }
    case 'number': {
      return (
        <ObjectNumber
          className='fd-object-list__object-number'
          value={props.value}
          unit={props.unit}
        />
      )
    }
    case 'status': {
      return (
        <ObjectStatus
          text={props.text}
          semantic={props.semantic}
        />
      )
    }
    case 'identifier': {
      return (
        <ObjectIdentifier
          className='fd-object-list__object-identifier'
          title={props.title}
        />
      )
    }
    default: {
      return null
    }
  }
}