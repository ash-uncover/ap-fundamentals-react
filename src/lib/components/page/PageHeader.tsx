import React, { ReactNode, useEffect, useState } from 'react'
// Constants
import { BarTypes } from '../../constants/BarType'
import { Sizes } from '../../constants/Size'
import { TitleLevels } from '../../constants/TitleLevel'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { Avatar, AvatarInfo } from '../../components/avatar/Avatar'
import { Bar } from '../../components/bar/Bar'
import { Button } from '../../components/button/Button'
import { PageHeaderAttribute, PageHeaderAttributeInfo } from '../../components/page/PageHeaderAttribute'
import { Title } from '../../components/title/Title'

import './PageHeader.css'

export interface PageHeaderInfo {
  actions?: ReactNode
  attributes?: PageHeaderAttributeInfo | PageHeaderAttributeInfo[]
  avatar?: AvatarInfo
  breadcrumb: ReactNode
  expanded?: boolean
  hideBoxShadow?: boolean
  subtitle?: string
  title: string

  onExpand?: (expand: boolean) => void
}

export interface PageHeaderProperties extends
FioriComponentProperties,
PageHeaderInfo {}

export const PageHeader = ({
  className,
  style,

  actions,
  attributes,
  avatar,
  breadcrumb,
  expanded,
  hideBoxShadow,
  subtitle,
  title,

  onExpand,
}: PageHeaderProperties) => {

  // Hooks //

  const [showExpand, setShowExpand] = useState(false)
  const [isExpanded, setExpanded] = useState(computeExpanded(expanded, onExpand, attributes))
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    setShowExpand(computeExpandable(attributes))
    setExpanded(computeExpanded(expanded, onExpand, attributes))
  }, [expanded, attributes])

  // Events //

  const handleToggleExpanded = () => {
    if (onExpand) {
      onExpand(!isExpanded)
    } else {
      setExpanded(!isExpanded)
    }
  }

  const handleTogglePinned = () => {
    setPinned(!pinned)
  }

  // Rendering //

  const renderAttributes = (atts: PageHeaderAttributeInfo | PageHeaderAttributeInfo[]) => {
    if (Array.isArray(atts)) {
      return atts.map((att, index) => {
        return renderAttribute(att, `attribute-${index}`)
      })
    }
    return renderAttribute(atts)
  }

  const renderAttribute = (att: PageHeaderAttributeInfo, key?: string) => {
    return (
      <PageHeaderAttribute
        {...att}
        key={key}
      />
    )
  }

  const classes = ['ap-fd-page-header']
  if (className) {
    classes.push(className)
  }
  if (isExpanded) {
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
            {(!showExpand || !isExpanded) && avatar ?
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

      {showExpand && isExpanded ?
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
          {attributes ?
            renderAttributes(attributes)
            : null}
        </div>
        : null}

      {showExpand ?
        <div
          className='ap-fd-page-header__expander'
        >
          <Button
            className='ap-fd-page-header__expander-button'
            icon={isExpanded ? 'slim-arrow-up' : 'slim-arrow-down'}
            onClick={handleToggleExpanded}
          />
          <Button
            className='ap-fd-page-header__expander-button'
            icon={pinned ? 'pushpin-off' : 'pushpin-on'}
            onClick={handleTogglePinned}
          />
        </div>
        : null}
    </div>
  )
}

export const computeExpanded = (expanded?: boolean, onExpand?: (expand: boolean) => void, attributes?: PageHeaderAttributeInfo | PageHeaderAttributeInfo[]) => {
  if (typeof onExpand !== 'undefined') {
    return Boolean(expanded)
  }
  if (typeof expanded === 'boolean') {
    return expanded
  }
  return computeExpandable(attributes)
}

export const computeExpandable = (attributes?: PageHeaderAttributeInfo | PageHeaderAttributeInfo[]) => {
  return Boolean(attributes && (!Array.isArray(attributes) || attributes.length))
}
