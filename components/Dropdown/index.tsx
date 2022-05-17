import type { BaseSyntheticEvent, ReactNode } from 'react'
import type { MatchdayData } from 'lib/types'
import useDate from 'lib/hooks/useDate'
import styles from './styles.module.scss'

interface Props {
  data: MatchdayData
  children: ReactNode
}

export default function Dropdown({ data, children }: Props) {
  const { date } = useDate()

  const showHide = ({ target }: BaseSyntheticEvent) => {
    if (!target.className) {
      target.className = 'rotate'
      target.parentElement.nextSibling.style.display = 'block'
    } else {
      target.className = ''
      target.parentElement.nextSibling.style.display = 'none'
    }
  }

  return (
    <div className={styles.container}>
      <div>
        {data.name}
        <span>{data.city}</span>
        <button onClick={showHide} />
      </div>
      <div>
        <div className={styles.details}>
          <p>🌟 {data.mvp}</p>
          <p>{date(data.date)}</p>
        </div>
        {children}
      </div>
    </div>
  )
}
