type Battle = {
  data: Record<string, { ptb: number | null; points: number | null }>
}

export interface MatchdayData {
  id: string
  name: string
  league: string
  mvp?: string
  date: Date
  city: string
}

export interface Matchday extends MatchdayData {
  battles: Battle[]
}

export interface MatchdaySummary extends MatchdayData {
  battles: Record<string, boolean>[]
}

export interface MC {
  name: string
  battles: number
  ptb: number
  points: number
}
