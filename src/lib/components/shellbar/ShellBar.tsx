import React, { ReactElement } from 'react'

import { Sizes } from '../../constants/Size'

import { FioriComponentProperties } from '../../components/FioriBase'

import { Avatar } from '../../components/avatar/Avatar'
import { Menu } from '../../components/menu/Menu'
import { MenuItemInfo } from '../../components/menu/MenuItem'
import { Popover } from '../../components/popover/Popover'

import './ShellBar.css'

export interface ShellBarInfo {
  logo: string
  logoAlt: string
  title: string
  subTitle?: string
  actions?: ReactElement[]
  profile?: ShellBarProfileInfo
}

export interface ShellBarProfileInfo {
  name: string,
  initials: string,
  menu: MenuItemInfo[]
}

export interface ShellBarProperties extends
  FioriComponentProperties,
  ShellBarInfo { }


export const ShellBar = ({
  logo,
  logoAlt,
  title,
  subTitle,
  actions,
  profile,
}: ShellBarProperties) => {

  // Rendering //
  return (
    <div className='fd-shellbar'>
      <div className='fd-shellbar__group fd-shellbar__group--product'>
        <span className='fd-shellbar__logo'>
          <img
            src={logo}
            width='48'
            height='24'
            alt={logoAlt}
          />
        </span>
        <span className='fd-shellbar__title'>
          {title}
        </span>
        {subTitle ?
          <div className='fd-shellbar__subtitle'>
            {subTitle}
          </div>
          : null}
      </div>
      <div className='fd-shellbar__group fd-shellbar__group--actions'>
        {actions?.map((action, index) => {
          return (
            <div
              key={`action-${index}`}
              className='fd-shellbar__action fd-shellbar__action--desktop'
            >
              {action}
            </div>
          )
        })}
        {profile ?
          <div className='fd-shellbar__action'>
            <Popover
              alignRight
              control={(
                <Avatar
                  ariaLabel={profile.name}
                  initials={profile.initials}
                  size={Sizes.X_SMALL}
                  circle
                />
              )}
            >
              <Menu
                items={profile.menu}
                noShadow={true}
              />
            </Popover>
          </div>
          : null}
      </div>
    </div>
  )
}