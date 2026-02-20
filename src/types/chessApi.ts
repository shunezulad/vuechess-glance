export interface PlayerProfile {
  username: string
  player_id: number
  joined: number
}

export interface PlayerStats {
  chess_blitz?: { last: { rating: number; date: number } }
}

export interface Game {
  pgn: string
  white: { username: string; result: string; rating: number }
  black: { username: string; result: string; rating: number }
  time_control: string
  end_time: number
}
