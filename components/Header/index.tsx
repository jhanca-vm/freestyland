import type { MutableRefObject } from 'react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Menu from 'components/Menu'
import styles from './styles.module.scss'

export default function Header() {
  const [menuIsHidden, setMenuIsHidden] = useState(true)
  const mediaQuery: MutableRefObject<MediaQueryList | null> = useRef(null)

  const hideMenu = () => {
    if (!mediaQuery.current?.matches) setMenuIsHidden(true)
  }

  useEffect(() => {
    mediaQuery.current = matchMedia('(min-width: 1024px)')
    mediaQuery.current.onchange = ({ matches }: MediaQueryListEvent) => {
      matches ? setMenuIsHidden(false) : setMenuIsHidden(true)
    }
    mediaQuery.current.matches ? setMenuIsHidden(false) : setMenuIsHidden(true)
  }, [])

  return (
    <header
      className={styles.container}
      style={{ position: menuIsHidden ? 'static' : 'sticky' }}
    >
      <Link href="/">
        <a onClick={hideMenu}>Freestyland</a>
      </Link>
      <button
        className={styles[`icon-${menuIsHidden ? 'menu' : 'close'}`]}
        onClick={() => setMenuIsHidden(!menuIsHidden)}
      >
        <span />
        <span />
      </button>
      <Menu menuIsHidden={menuIsHidden} hideMenu={hideMenu} />
    </header>
  )
}
