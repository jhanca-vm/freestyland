import { createClient, PostgrestResponse } from '@supabase/supabase-js'
import { Matchday, MatchdaySummary } from 'lib/types'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Environment variables are not defined')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export const getMatchdaysByCountry = async (country: string) => {
  const { data } = await supabase
    .from('matchday')
    .select('id,name,mvp,date,city,battles(data)')
    .textSearch('id', country)
    .neq('mvp', null)
    .order('date', { ascending: false })
    .order('order', { foreignTable: 'battles' })

  return data || []
}

export default supabase
