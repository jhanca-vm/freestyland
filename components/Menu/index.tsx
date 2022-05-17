import type { SetStateAction } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import countries from 'lib/utils/countries'
import styles from './styles.module.scss'

interface Props {
  menuIsHidden: boolean
  hideMenu: () => void
}

export default function Menu({ menuIsHidden, hideMenu }: Props) {
  const { query } = useRouter()

  return (
    <nav
      className={styles.container}
      style={{ display: menuIsHidden ? 'none' : 'block' }}
    >
      <ul>
        {Array.from(countries).map(([country, [name, emoji]]) => (
          <li
            className={
              query.country === country ? styles['bg-dark'] : undefined
            }
            key={country}
          >
            <Link
              href={`/fms${country === 'international' ? '-' : '/'}${country}`}
            >
              <a aria-disabled={query.country === country} onClick={hideMenu}>
                {emoji} FMS {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
