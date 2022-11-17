import React from 'react'

import { Sizes } from '../../constants/Size'
import { Avatar } from '../avatar/Avatar'
import { MenuItemInfo } from '../menu/MenuItem'
import { Popover } from '../popover/Popover'

export interface ShellBarProperties {
  logo: string
  logoAlt: string
  title: string
  subTitle?: string
  profile?: ShellBarProfile
}

export interface ShellBarProfile {
  name: string,
  initials: string,
  menu: MenuItemInfo[]
}

export const ShellBar = ({
  logo,
  logoAlt,
  title,
  subTitle,
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
        <div className='fd-shellbar__action'>
          {profile ?
            <Popover
              alignRight
              items={profile.menu}
            >
              <Avatar
                ariaLabel={profile.name}
                initials={profile.initials}
                size={Sizes.X_SMALL}
                circle
              />
            </Popover>
            : null}
        </div>
      </div>
    </div>
  )
}