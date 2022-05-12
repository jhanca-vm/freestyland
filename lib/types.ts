type Battle = {
  data: Record<
    string,
    null | {
      ptb: number
      points: number
    }
  >
}

export interface Matchday {
  id: string
  name: string
  league: string
  mvp?: string
  date: Date
  city: string
  battles: Battle[]
}

export interface MC {
  name: string
  battles: number
  ptb: number
  points: number
}
