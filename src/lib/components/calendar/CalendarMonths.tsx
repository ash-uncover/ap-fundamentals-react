import React, { useEffect, useState } from 'react'
// Utils
import { StringUtils } from '@uncover/js-utils'
// Constants
import { ButtonDesigns } from '../../constants/ButtonDesign'
import { DISPLAY_MODE } from '../../components/calendar/Calendar'
// Components
import { FioriComponentProperties } from '../../components/FioriBase'
import { Button } from '../../components/button/Button'

export interface CalendarMonthsInfo {
  date: Date
  onDisplayDateChange: (arg: Date) => void
  onDisplayModeChange: (arg: string) => void
}

export interface CalendarMonthsProperties extends
  FioriComponentProperties,
  CalendarMonthsInfo {

}

interface MonthData {
  month: number
  current: boolean
}

export const CalendarMonths = ({
  className,
  style,

  date,
  onDisplayDateChange,
  onDisplayModeChange,
}: CalendarMonthsProperties) => {

  // Hooks //

  const locale = 'en'
  const [months, setMonths] = useState<MonthData[][]>([])

  useEffect(() => {
    const now = new Date()
    const monthsData = []
    for (let i = 0; i < 4; i++) {
      const monthsRow: MonthData[] = []
      for (let j = 0; j < 3; j++) {
        const month = (4 * j) + i
        const isYear = date.getFullYear() === now.getFullYear()
        const isMonth = now.getMonth() === month
        monthsRow.push({
          month,
          current: isYear && isMonth
        })
      }
      monthsData.push(monthsRow)
    }
    setMonths(monthsData)
  }, [date])

  // Events //

  const onPrevious = () => {
    const newDate = new Date(date.getFullYear() - 1, date.getMonth(), 1)
    onDisplayDateChange(newDate)
  }

  const onYearPressed = () => {
    onDisplayModeChange(DISPLAY_MODE.YEARS)
  }

  const onNext = () => {
    const newDate = new Date(date.getFullYear() + 1, date.getMonth(), 1)
    onDisplayDateChange(newDate)
  }

  const onSelectMonth = (month: number) => {
    const newDate = new Date(date.getFullYear(), month, 1)
    onDisplayDateChange(newDate)
    onDisplayModeChange(DISPLAY_MODE.DAYS)
  }

  // Rendering //

  const formatMonth = (month: number) => {
    const monthDate = new Date(2000, month)
    const monthName = monthDate.toLocaleString(locale, { month: 'long' })
    return StringUtils.capitalize(monthName)
  }

  const classes = ['fd-calendar']
  if (className) {
    classes.push(className)
  }

  return (
    <section
      className={classes.join(' ')}
      style={style}
    >

      <header className='fd-calendar__header'>
        <div className='fd-calendar__navigation'>
          <div className='fd-calendar__action fd-calendar__action--arrow-left'>
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='slim-arrow-left'
              onClick={onPrevious}
            />
          </div>
          <div className='fd-calendar__action'>
            <Button
              design={ButtonDesigns.TRANSPARENT}
              text={date.getFullYear()}
              onClick={onYearPressed}
            />
          </div>
          <div className='fd-calendar__action fd-calendar__action--arrow-right'>
            <Button
              design={ButtonDesigns.TRANSPARENT}
              icon='slim-arrow-right'
              onClick={onNext}
            />
          </div>
        </div>
      </header>

      <div className='fd-calendar__content fd-calendar__content--months'>
        <table
          className='fd-calendar__table'
          role='grid'
        >
          <tbody className='fd-calendar__group'>
            {months.map((monthsRow, index) => {
              return (
                <tr
                  key={`'calendar-month-row-${index}`}
                  className='fd-calendar__row'
                >
                  {monthsRow.map((monthData) => {
                    return (
                      <CalendarMonthsItem
                        key={`'calendar-month-${monthData.month}`}
                        text={formatMonth(monthData.month)}
                        current={monthData.current}
                        onClick={() => onSelectMonth(monthData.month)}
                      />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div
        aria-live='polite'
        className='fd-calendar__content fd-calendar__content--screen-reader-only'
      >
        Use arrow keys to navigate dates
      </div>

    </section>
  )
}

type CalendarMonthsItemProperties = {
  text: string | number
  active?: boolean
  current?: boolean
  onClick: () => void
}
const CalendarMonthsItem = ({
  text,
  active,
  current,
  onClick,
}: CalendarMonthsItemProperties) => {

  // Rendering //

  const classes = ['fd-calendar__item']
  if (current) {
    classes.push('fd-calendar__item--current')
  }

  const classesButton = ['fd-button fd-button--transparent fd-calendar__item-button']
  if (active) {
    classesButton.push('is-active')
  }

  return (
    <td
      className={classes.join(' ')}
      role='gridcell'
    >
      <button
        className={classesButton.join(' ')}
        type='button'
        onClick={onClick}
      >
        <span className='fd-calendar__text'>
          {text}
        </span>
      </button>
    </td>
  )
}