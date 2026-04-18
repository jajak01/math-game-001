export function generateChoices(correct: number) {
  const choices = new Set<number>()
  choices.add(correct)

  // dynamic range based on number size
  const spread = Math.max(5, Math.floor(Math.abs(correct) * 0.2))

  let attempts = 0

  while (choices.size < 4 && attempts < 50) {
    const variation = Math.floor(Math.random() * spread * 2) - spread
    const fake = correct + variation

    if (fake !== correct && fake >= 0) {
      choices.add(fake)
    }

    attempts++
  }

  // fallback (guarantee no infinite loop)
  while (choices.size < 4) {
    choices.add(correct + choices.size + 1)
  }

  const shuffled = Array.from(choices).sort(() => Math.random() - 0.5)
  const correctIndex = shuffled.indexOf(correct)

  return { choices: shuffled, correctIndex }
}