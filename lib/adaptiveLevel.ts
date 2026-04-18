import { Level } from '@/types/math'

export function getNextLevel(level: Level, accuracy: number): Level {
  if (accuracy >= 0.8) {
    if (level === 'SD') return 'SMP'
    if (level === 'SMP') return 'SMA'
  }

  if (accuracy < 0.5) {
    if (level === 'SMA') return 'SMP'
    if (level === 'SMP') return 'SD'
  }

  return level
}