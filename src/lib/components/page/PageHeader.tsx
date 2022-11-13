import React, { ReactElement, useEffect, useState } from 'react'

import { FioriComponentProperties } from '../FioriBase'

import { Avatar } from '../avatar/Avatar'
import { Bar } from '../bar/Bar'
import { Button } from '../button/Button'
import { Title } from '../title/Title'

import { AccentColor } from '../../constants/AccentColor'
import { BarTypes } from '../../constants/BarType'
import { Sizes } from '../../constants/Size'
import { TitleLevels } from '../../constants/TitleLevel'

import './PageHeader.css'

export interface PageHeaderProperties extends FioriComponentProperties {
  actions?: ReactElement | ReactElement[]
  attributes?: ReactElement | ReactElement[]
  avatar?: PageHeaderAvatar
  breadcrumb: ReactElement
  hideBoxShadow?: boolean
  subtitle?: string
  title: string
}
export interface PageHeaderAvatar {
  accentColor: AccentColor
  icon?: string
  initials?: string
}

export const PageHeader = ({
  className,
  style,

  actions,
  attributes,
  avatar,
  breadcrumb,
  hideBoxShadow,
  subtitle,
  title,
}: PageHeaderProperties) => {

  // Hooks //

  const [showExpand, setShowExpand] = useState(false)
  const [expanded, setExpanded] = useState(true)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const hasAttributes = Boolean(attributes && (!Array.isArray(attributes) || attributes.length))
    setShowExpand(hasAttributes)
    setExpanded(hasAttributes)
  }, [attributes])

  // Events //

  const onToggleExpanded = () => {
    setExpanded(!expanded)
  }

  const onTogglePinned = () => {
    setPinned(!pinned)
  }

  // Rendering //

  const classes = ['ap-fd-page-header']
  if (className) {
    classes.push(className)
  }
  if (expanded) {
    classes.push('ap-fd-page-header--expanded')
  }

  return (
    <div
      className={classes.join(' ')}
      style={hideBoxShadow ? { ...style, boxShadow: 'none' } : style}
    >
      <div className='ap-fd-page-header__controls'>
        <div className='ap-fd-page-header__controls__breadcrumb'>
          {breadcrumb}
        </div>
        <div className='ap-fd-page-header__controls__title'>
          <div
            style={{
              paddingTop: '0.3125rem',
              display: 'flex'
            }}>
            {(!showExpand || !expanded) && avatar ?
              <Avatar
                {...avatar}
                className='ap-fd-page-header__controls__title__avatar'
                ariaLabel={title}
                size={Sizes.SMALL}
              />
              : null}
            <div>
              <Title
                className='ap-fd-page-header__controls__title__title'
                level={TitleLevels.H1}
                text={title}
              />
              {subtitle ?
                <Title
                  className='ap-fd-page-header__controls__title__subtitle'
                  level={TitleLevels.H6}
                  text={subtitle}
                />
                : null}
            </div>
          </div>
          {actions ?
            <Bar
              className='ap-fd-page-header__controls__title__actions'
              right={actions}
              type={BarTypes.HEADER_WITH_SUBHEADER}
            />
            : null}
        </div>
      </div>

      {showExpand && expanded ?
        <div
          className='ap-fd-page-header__content'
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
        >
          {avatar ?
            <Avatar
              {...avatar}
              className='ap-fd-page-header__content__avatar'
              ariaLabel={title}
            />
            : null}
          {attributes}
        </div>
        : null}

      {showExpand ?
        <div
          className='ap-fd-page-header__expander'
        >
          <Button
            className='ap-fd-page-header__expander-button'
            icon={expanded ? 'slim-arrow-up' : 'slim-arrow-down'}
            onClick={onToggleExpanded}
          />
          <Button
            className='ap-fd-page-header__expander-button'
            icon={pinned ? 'pushpin-off' : 'pushpin-on'}
            onClick={onTogglePinned}
          />
        </div>
        : null}
    </div>
  )
}
