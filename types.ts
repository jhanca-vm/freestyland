export interface Matchday<T> {
  id: string
  name: string
  league: string
  mvp?: string
  date: Date
  city: string
  battles: T[]
}

export interface Battle {
  data: Record<string, { ptb: number | null; points: number | null }>
}

export interface MC {
  name: string
  battles: number
  ptb: number
  points: number
}
