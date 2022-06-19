import type { PostgrestResponse } from '@supabase/postgrest-js'
import type { Battle, Matchday } from 'types'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async event => {
  const client = serverSupabaseClient(event)
  const { data }: PostgrestResponse<Matchday<Battle>> = await client
    .from('matchday')
    .select('id,name,league,date,city,battles(data)')
    .is('mvp', null)
    .order('date')
    .order('order', { foreignTable: 'battles' })

  return data
})
