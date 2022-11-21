import React, { ReactElement } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { CardHeader, CardHeaderProperties } from '../../components/card/CardHeader'
import { CardFooter, CardFooterProperties } from '../../components/card/CardFooter'
import { InfoLabel, InfoLabelProperties } from '../../components/infolabel/InfoLabel'

export interface CardInfo {
  badge?: InfoLabelProperties
  header: CardHeaderProperties
  footer?: CardFooterProperties
  children?: ReactElement | ReactElement[],
  onClick?: () => void
}

export interface CardProperties extends
  FioriComponentProperties,
  CardInfo {
}

export const Card = ({
  className,
  style,

  badge,
  header,
  footer,
  children,
}: CardProperties) => {

  // Events //


  // Rendering //

  const classes = ['fd-card']
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      style={style}
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


