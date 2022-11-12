import React, { ReactElement, useState } from 'react'

import { Avatar } from '../avatar/Avatar'
import { Bar } from '../bar/Bar'
import { Button } from '../button/Button'
import { Title } from '../title/Title'

import { AccentColor } from '../../constants/AccentColor'
import { BarTypes } from '../../constants/BarType'
import { TitleLevels } from '../../constants/TitleLevel'

export interface PageHeaderProperties {
  className?: string
  style?: React.CSSProperties

  actions?: ReactElement | ReactElement[]
  attributes?: PageHeaderAttribute | PageHeaderAttribute[]
  avatar?: PageHeaderAvatar
  content?: ReactElement | ReactElement[]
  hideBoxShadow?: boolean
  subtitle?: string
  title: string
}
export interface PageHeaderAvatar {
  icon: string
  accentColor: AccentColor
}

export interface PageHeaderAttribute {

}

export const PageHeader = ({
  className,
  style,

  actions,
  attributes,
  avatar,
  content,
  hideBoxShadow,
  subtitle,
  title,
}: PageHeaderProperties) => {

  // Hooks //

  const [expanded, setExpanded] = useState(true)

  // Rendering //

  const classes = ['ap-fd-page__header']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={hideBoxShadow ? { ...style, boxShadow: 'none' } : style}
    >
      <div
        className='ap-fd-page__header__title'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {title ?
          <Title
            style={{
              fontWeight: 'bold',
              marginRight: '1rem',
              color: 'var(--sapObjectHeader_Title_TextColor)'
            }}
            text={title}
            level={TitleLevels.H1}
          />
          : null}
        {actions || content ?
          <Bar
            left={content}
            right={actions}
            style={{ flexGrow: 1 }}
            type={BarTypes.HEADER_WITH_SUBHEADER}
          />
          : null}
      </div>
      {subtitle ?
        <Title
          className='ap-fd-page__header__subtitle'
          level={TitleLevels.H6}
          style={{
            color: 'var(--sapObjectHeader_Subtitle_TextColor)',
            marginTop: '-0.5rem'
          }}
          text={subtitle}
        />
        : null}
      {expanded ?
        <div
          className='ap-fd-page__header__content'
        >
          {avatar ?
            <Avatar
              ariaLabel={title}
              accentColor={avatar.accentColor}
              icon={avatar.icon}
            />
            : null}
          {attributes && (!Array.isArray(attributes) || attributes.length) ?
            <div
              className='ap-fd-page__header__attributes'
            >
            </div>
            : null}
        </div>
        : null}
      <div
        className='ap-fd-page__header__expander'
      >
        <Button
          icon='slim-arrow-up'
        />
        <Button
          icon='pin'
        />
      </div>
    </div>
  )
}
