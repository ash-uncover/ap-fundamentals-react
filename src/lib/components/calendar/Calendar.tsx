import React, { useEffect, useState } from 'react'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { CalendarDays } from '../../components/calendar/CalendarDays'
import { CalendarMonths } from '../../components/calendar/CalendarMonths'
import { CalendarYears } from '../../components/calendar/CalendarYears'

export const DISPLAY_MODE = {
  DAYS: 'DAYS',
  MONTHS: 'MONTHS',
  YEARS: 'YEARS'
}

export interface CalendarInfo {
  date?: Date
  selectedDate?: Date
  compact?: boolean
  onSelectedDateChange?: (arg: Date) => void
}
export interface CalendarProperties extends
  FioriComponentProperties,
  CalendarInfo {
}

export const Calendar = ({
  className,
  style,

  date = new Date(),
  selectedDate,
  compact,
  onSelectedDateChange,
}: CalendarProperties) => {

  // Hooks //

  let previousMode = DISPLAY_MODE.DAYS

  const [displayDate, setDisplayDate] = useState(date)
  const [displayMode, setDisplayMode] = useState(DISPLAY_MODE.DAYS)

  useEffect(() => {
    if (displayMode !== DISPLAY_MODE.YEARS) {
      previousMode = displayMode
    }
  }, [displayMode])

  // Events //

  const onDisplayDateChange = (newDisplayDate: Date) => {
    setDisplayDate(newDisplayDate)
  }

  const onDisplayModeChangeDays = (newDisplayMode: string) => {
    setDisplayMode(newDisplayMode)
  }

  const onDisplayModeChangeMonths = (newDisplayMode: string) => {
    setDisplayMode(newDisplayMode)
  }

  const onDisplayModeChangeYears = (newDisplayMode: string) => {
    if (previousMode) {
      setDisplayMode(previousMode)
    } else {
      setDisplayMode(newDisplayMode)
    }
  }

  // Rendering //

  switch (displayMode) {
    case DISPLAY_MODE.MONTHS: {
      return (
        <CalendarMonths
          className={className}
          style={style}
          date={displayDate}
          onDisplayDateChange={onDisplayDateChange}
          onDisplayModeChange={onDisplayModeChangeMonths}
        />
      )
    }
    case DISPLAY_MODE.YEARS: {
      return (
        <CalendarYears
          className={className}
          style={style}
          date={displayDate}
          onDisplayDateChange={onDisplayDateChange}
          onDisplayModeChange={onDisplayModeChangeYears}
        />
      )
    }
    default: {
      return (
        <CalendarDays
          className={className}
          style={style}
          date={displayDate}
          selectedDate={selectedDate}
          compact={compact}
          onDisplayDateChange={onDisplayDateChange}
          onDisplayModeChange={onDisplayModeChangeDays}
          onSelectedDateChange={onSelectedDateChange}
        />
      )
    }
  }
}