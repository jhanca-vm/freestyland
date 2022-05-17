import type { Matchday } from 'lib/types'
import Dropdown from 'components/Dropdown'
import styles from './styles.module.scss'

interface Props {
  data: Matchday[]
}

const Matchdays = ({ data }: Props) => (
  <section className={styles.container}>
    <h2>Jornadas</h2>
    {data.map(({ battles, ...rest }) => (
      <Dropdown data={rest} key={rest.id}>
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
      </Dropdown>
    ))}
  </section>
)

export default Matchdays
