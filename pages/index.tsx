import type { GetServerSideProps, NextPage } from 'next'
import type { PostgrestResponse } from '@supabase/supabase-js'
import type { Matchday } from 'lib/types'
import Head from 'next/head'
import supabase from 'lib/utils/supabase'
import NextMatchdays from 'components/NextMatchdays'

const Home: NextPage<{ matchdays: Matchday[] }> = ({ matchdays }) => (
  <>
    <Head>
      <title>Freestyland</title>
      <meta
        name="description"
        content="Mantente al tanto de todas las fechas, jornadas, resultados, 
          posiciones, etc. De todas las ligas de FMS y FMS Internacional."
      />
      <meta name="keywords" content="FMS,batallas,fechas,jornada,tabla" />
    </Head>
    <NextMatchdays matchdays={matchdays} />
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: matchdays }: PostgrestResponse<Matchday> = await supabase
    .from('matchday')
    .select('id,name,league,date,city,battles(data)')
    .is('mvp', null)
    .order('date')
    .order('order', { foreignTable: 'battles' })

  return { props: { matchdays } }
}

export default Home
