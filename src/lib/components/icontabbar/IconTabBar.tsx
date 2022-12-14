import React, { ReactNode } from 'react'
// Constants
import { IconTabBarDesign } from '../../constants/IconTabBarDesign'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { IconTabBarItem, IconTabBarItemProperties } from '../../components/icontabbar/IconTabBarItem'

import './IconTabBar.css'

export interface IconTabBarInfo {
  compact?: boolean
  design?: IconTabBarDesign
  process?: boolean
  selectedTab?: string
  tabs?: IconTabBarItemProperties[]

  onTabSelect?: (id: string) => void

  children?: ReactNode
}
export interface IconTabBarProperties extends
  FioriComponentProperties,
  IconTabBarInfo { }

export const IconTabBar = ({
  className,
  style,

  compact,
  design,
  process,
  selectedTab,
  tabs,

  onTabSelect,

  children,
}: IconTabBarProperties) => {

  // Rendering //

  const classes = ['fd-icon-tab-bar']
  if (className) {
    classes.push(className)
  }
  if (compact) {
    classes.push('fd-icon-tab-bar--compact')
  }
  if (design) {
    classes.push(`fd-icon-tab-bar--${design}`)
  }
  if (process) {
    classes.push('fd-icon-tab-bar--process')
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <ul
        className='fd-icon-tab-bar__header'
        role='tablist'
      >
        {tabs?.map((tab, index) => {
          return (
            <IconTabBarItem
              key={tab.id}
              selected={selectedTab === tab.id}
              {...tab}
              process={index < tabs.length - 1 ? process || tab.process : false}
              design={design || tab.design}
              onTabSelect={onTabSelect}
            />
          )
        })}
        {children}
      </ul>
    </div>
  )
}
