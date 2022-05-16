import type { BaseSyntheticEvent } from 'react'
import type { Matchday } from 'lib/types'
import useDate from 'lib/hooks/useDate'
import styles from './styles.module.scss'

interface Props {
  data: Matchday[]
}

export default function Matchdays({ data }: Props) {
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
    <section className={styles.container}>
      <h2>Jornadas</h2>
      {data.map(({ id, name, city, mvp, date: timestap, battles }) => (
        <div className={styles.matchday} key={id}>
          <div>
            {name}
            <span>{city}</span>
            <button onClick={showHide} />
          </div>
          <div>
            <div className={styles.details}>
              <p>🌟 {mvp}</p>
              <p>{date(timestap)}</p>
            </div>
            <ul className={styles.battles}>
              {battles.map(({ data }) => (
                <li key={Object.keys(data).join('-')}>
                  <span>{data[Object.keys(data)[0]].points ?? '-'}</span>
                  <p>
                    {Object.keys(data)[0]}
                    <br />
                    {data[Object.keys(data)[0]].ptb ?? '-'}
                  </p>
                  vs
                  <p>
                    {Object.keys(data)[1]}
                    <br />
                    {data[Object.keys(data)[1]].ptb ?? '-'}
                  </p>
                  <span>{data[Object.keys(data)[1]].points ?? '-'}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
