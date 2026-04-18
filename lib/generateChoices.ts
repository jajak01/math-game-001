export function generateChoices(correct: number) {
  const choices = new Set<number>()
  choices.add(correct)

  while (choices.size < 4) {
    const variation = Math.floor(Math.random() * 10) - 5
    const fake = correct + variation

    if (fake !== correct && fake >= 0) {
      choices.add(fake)
    }
  }

  const shuffled = Array.from(choices).sort(() => Math.random() - 0.5)
  const correctIndex = shuffled.indexOf(correct)

  return { choices: shuffled, correctIndex }
}