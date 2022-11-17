import React, { ReactElement } from 'react'


import { CardHeader, CardHeaderProperties } from '../../components/card/CardHeader'
import { CardFooter, CardFooterProperties } from '../../components/card/CardFooter'
import { InfoLabel, InfoLabelProperties } from '../../components/infolabel/InfoLabel'

export interface CardProperties {
  badge?: InfoLabelProperties
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
      {badge ? <InfoLabel {...badge} /> : null}
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


