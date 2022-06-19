import type { PostgrestResponse } from '@supabase/postgrest-js'
import type { Battle, Matchday, MC } from 'types'
import { serverSupabaseClient } from '#supabase/server'

type Table = PostgrestResponse<MC>
type Matchdays = PostgrestResponse<Matchday<Battle>>

export default defineEventHandler(async event => {
  const client = serverSupabaseClient(event)
  const [table, matchdays]: [Table, Matchdays] = await Promise.all([
    client
      .from('mc')
      .select('name,battles,ptb,points')
      .eq('fms', event.context.params.country)
      .order('points', { ascending: false })
      .order('ptb', { ascending: false }),
    client
      .from('matchday')
      .select('id,name,mvp,date,city,battles(data)')
      .textSearch('id', event.context.params.country)
      .neq('mvp', null)
      .order('date', { ascending: false })
      .order('order', { foreignTable: 'battles' }),
  ])

  return { table: table.data, matchdays: matchdays.data }
})
