import type { MC } from 'lib/types'
import styles from './styles.module.scss'

interface Props {
  data: MC[]
}

const Table = ({ data }: Props) => (
  <table className={styles.container}>
    <thead>
      <tr>
        <th />
        <th>Bts</th>
        <th>PTB</th>
        <th>Pts</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ name, battles, ptb, points }) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{battles}</td>
          <td>{ptb}</td>
          <td>{points}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default Table
