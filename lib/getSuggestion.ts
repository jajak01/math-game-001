import { Operation } from '@/types/math'

export function getSuggestion(wrongMap: Record<Operation, number>) {
  const suggestions: string[] = []

  if (wrongMap['+'] > 0) {
    suggestions.push('Kamu perlu belajar pertambahan lagi')
  }

  if (wrongMap['-'] > 0) {
    suggestions.push('Kamu perlu belajar pengurangan lagi')
  }

  if (wrongMap['*'] > 0) {
    suggestions.push('Kamu perlu latihan perkalian')
  }

  if (wrongMap['/'] > 0) {
    suggestions.push('Kamu perlu latihan pembagian')
  }

  if (wrongMap['algebra'] > 0) {
    suggestions.push('Kamu perlu memahami dasar aljabar')
  }

  if (wrongMap['factor'] > 0) {
    suggestions.push('Kamu perlu belajar faktor bilangan')
  }

  if (suggestions.length === 0) {
    return 'Bagus! Tidak ada kesalahan 🎉'
  }

  return suggestions.join(', ')
}