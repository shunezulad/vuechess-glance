import type { PlayerProfile } from '@/types/chessApi'

export const useChessApi = () => {
  const headers = { 'User-Agent': 'VueChessAnalyzer/1.0 (your-email@gmail.com)' }
  const fetchPlayer = async (username: string): Promise<PlayerProfile> => {
    const res = await fetch(`https://api.chess.com/pub/player/${username}`, { headers })
    if (!res.ok) throw new Error(`API error: ${res.status}`)
    const data = await res.json()
    // Optional: Validate with zod or manual checks for runtime safety
    localStorage.setItem(`profile_${username}`, JSON.stringify(data))
    return data
  }

  // const fetchStats = async (username: string): Promise<PlayerStats> => {
  //   const res = await fetch(`https://api.chess.com/pub/`)
  // }
  // Similar typed fns for fetchStats(username): Promise<PlayerStats>, fetchRecentGames(username): Promise<Game[]>
  // For games: First fetch archives, select latest, then fetch specific month
  return { fetchPlayer }
}
