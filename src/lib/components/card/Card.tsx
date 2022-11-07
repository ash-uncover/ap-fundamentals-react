import React, { ReactElement } from 'react'

import { Badge, BadgeProperties } from '../../components/badge/Badge'

import { CardHeaderProperties, CardHeader } from '../../components/card/CardHeader'
import { CardFooterProperties, CardFooter } from '../../components/card/CardFooter'

export interface CardProperties {
  badge?: BadgeProperties
  header: CardHeaderProperties
  footer?: CardFooterProperties
  children?: ReactElement | ReactElement[],
  onClick?: () => void
}

export const Card = ({
  badge,
  header,
  footer,
  children,
}: CardProperties) => {

  // Events //


  // Rendering //

  const classes = ['fd-card']

  return (
    <div
      className={classes.join(' ')}
    >
      {badge ? <Badge {...badge} /> : null}
      <CardHeader {...header} />
      {children ?
        <div
          className='fd-card__content'
          role='group'
          aria-label='Card Content'
        >
          {children}
        </div>
        : null}
      <CardFooter {...footer} />
    </div>
  )
}


