import { Level } from '@/types/math'

export function getRange(level: Level) {
  switch (level) {
    case 'SD':
      return 10
    case 'SMP':
      return 30
    case 'SMA':
      return 100
  }
}