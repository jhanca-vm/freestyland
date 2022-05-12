import Link from 'next/link'
import { useState } from 'react'
import countries from 'lib/utils/countries'
import styles from './styles.module.scss'

export default function Header() {
  const [menuIsHidden, setMenuIsHidden] = useState(true)

  return (
    <header
      className={styles.container}
      style={{ position: menuIsHidden ? 'static' : 'sticky' }}
    >
      <Link href="/">
        <a onClick={() => setMenuIsHidden(true)}>Freestyland</a>
      </Link>
      <button
        className={styles[`icon-${menuIsHidden ? 'menu' : 'close'}`]}
        onClick={() => setMenuIsHidden(!menuIsHidden)}
      >
        <span />
        <span />
      </button>
      <nav style={{ display: menuIsHidden ? 'none' : 'block' }}>
        <ul>
          {Array.from(countries)
            .filter(([country]) => country !== 'international')
            .map(([country, [name, emoji]]) => (
              <li key={country}>
                <Link href={`/fms/${country}`}>
                  <a onClick={() => setMenuIsHidden(true)}>
                    {emoji} FMS {name}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}
