import type { Matchday } from 'lib/types'
import useDate from 'lib/hooks/useDate'
import styles from './styles.module.scss'

interface Props {
  matchdays: Matchday[]
}

export default function NextMatchdays({ matchdays }: Props) {
  const { date, time } = useDate()

  return (
    <section className={styles.container}>
      <h1>Próximas jornadas</h1>
      <div>
        {matchdays.map(
          ({ id, league, name, city, date: timestamp, battles }) => (
            <section className={styles.matchday} key={id}>
              <h2>{league}</h2>
              <div>
                <p>
                  {name}
                  <br />
                  {city}
                </p>
                <p>
                  {date(timestamp)}
                  <br />
                  {time(timestamp)}
                </p>
              </div>
              <div>
                {battles
                  .map(({ data }) => Object.keys(data))
                  .map(([mc, rival]) => (
                    <p className={styles.battle} key={`${mc}-${rival}`}>
                      {mc} vs {rival}
                    </p>
                  ))}
              </div>
            </section>
          )
        )}
      </div>
    </section>
  )
}
