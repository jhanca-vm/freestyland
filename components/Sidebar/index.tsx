import Link from 'next/link'
import { useRouter } from 'next/router'
import countries from 'lib/utils/countries'
import styles from './styles.module.scss'

export default function Sidebar() {
  const { asPath } = useRouter()

  return (
    <nav className={styles.container}>
      <h2>Competiciones</h2>
      <ul>
        {Array.from(countries)
          .filter(([country]) => country !== 'international')
          .map(([country, [name, emoji]]) => (
            <li key={country}>
              <Link href={`/fms/${country}`}>
                <a
                  style={{
                    display: asPath === `/fms/${country}` ? 'none' : 'block',
                  }}
                >
                  {emoji} FMS {name}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
