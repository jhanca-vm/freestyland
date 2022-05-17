import type { MatchdaySummary } from 'lib/types'
import Dropdown from 'components/Dropdown'
import styles from './styles.module.scss'

interface Props {
  matchdays: MatchdaySummary[]
}
export default function MatchdaysSummary({ matchdays }: Props) {
  const loserStyle = { textDecoration: 'line-through from-font', opacity: 0.6 }

  return (
    <section className={styles.container}>
      <h2>Jornadas</h2>
      {matchdays.map(({ battles, ...rest }) => (
        <Dropdown data={rest} key={rest.id}>
          <ul className={styles.battles}>
            {battles
              .map(({ data }) => Object.entries(data))
              .map(([mc, rival]) => (
                <li key={`${mc[0]}-${rival[0]}`}>
                  <span style={!mc[1] ? loserStyle : undefined}>{mc[0]}</span>{' '}
                  vs{' '}
                  <span style={!rival[1] ? loserStyle : undefined}>
                    {rival[0]}
                  </span>
                </li>
              ))}
          </ul>
        </Dropdown>
      ))}
    </section>
  )
}
