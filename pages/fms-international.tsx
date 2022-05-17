import type { GetServerSideProps, NextPage } from 'next'
import type { MatchdaySummary } from 'lib/types'
import Head from 'next/head'
import supabase, { getMatchdaysByCountry } from 'lib/utils/supabase'
import countries from 'lib/utils/countries'
import MatchdaysSummary from 'components/MatchdaysSummary'
import styles from 'styles/FMSInternational.module.scss'

interface Props {
  classified: { name: string; fms: string }[]
  matchdays: MatchdaySummary[]
}

const FMSInternational: NextPage<Props> = ({ classified, matchdays }) => {
  return (
    <>
      <Head>
        <title>FMS Internacional</title>
        <meta
          name="description"
          content="Todos los resultados y MCs clasificados a la FMS Internacional"
        />
        <meta
          name="keywords"
          content="FMS,internacional,clasificados,jornada,resultados"
        />
        <meta property="og:title" content="FMS Internacional" />
        <meta
          property="og:description"
          content="Todos los resultados y MCs clasificados a la FMS Internacional"
        />
      </Head>
      <section>
        <h2>Clasificados a la gran final</h2>
        <ul className={styles.classified}>
          {classified.map(({ name, fms }) => (
            <li key={name}>
              {countries.get(fms)![1]} {name}
            </li>
          ))}
        </ul>
      </section>
      <MatchdaysSummary matchdays={matchdays} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [matchdays, { data: classified }] = await Promise.all([
    getMatchdaysByCountry('international'),
    supabase
      .from('mc')
      .select('name,fms')
      .is('classified', true)
      .order('ptb', { ascending: false }),
  ])

  return { props: { matchdays, classified } }
}

export default FMSInternational
