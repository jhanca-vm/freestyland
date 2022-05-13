import type { GetServerSideProps, NextPage } from 'next'
import type { PostgrestResponse } from '@supabase/supabase-js'
import type { Matchday, MC } from 'lib/types'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Error from 'next/error'
import countries from 'lib/utils/countries'
import supabase from 'lib/utils/supabase'
import Table from 'components/Table'
import Matchdays from 'components/Matchdays'

interface Props {
  errorCode?: number
  table: MC[]
  matchdays: Matchday[]
}

const FMS: NextPage<Props> = ({ errorCode, table, matchdays }) => {
  const { query } = useRouter()

  if (errorCode) return <Error statusCode={errorCode} />

  const country = countries.get(String(query.country))![0]

  return (
    <>
      <Head>
        <title>FMS {country}</title>
        <meta
          name="description"
          content={`Resultados y la tabla de posiciones de la FMS ${country}`}
        />
        <meta
          name="keywords"
          content={`FMS,${country},tabla,jornada,resultados`}
        />
      </Head>
      <Table data={table} />
      <Matchdays data={matchdays} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (
    !countries.has(String(params?.country)) ||
    params?.country === 'international'
  ) {
    return { props: { errorCode: 404 } }
  }

  const [{ data: table }, { data: matchdays }]: [
    PostgrestResponse<MC>,
    PostgrestResponse<Matchday>
  ] = await Promise.all([
    supabase
      .from('mc')
      .select('name,battles,ptb,points')
      .eq('fms', params?.country)
      .order('points', { ascending: false })
      .order('ptb', { ascending: false }),
    supabase
      .from('matchday')
      .select('id,name,mvp,date,city,battles(data)')
      .textSearch('id', String(params?.country))
      .neq('mvp', null)
      .order('date', { ascending: false })
      .order('order', { foreignTable: 'battles' }),
  ])

  return { props: { table, matchdays } }
}

export default FMS
