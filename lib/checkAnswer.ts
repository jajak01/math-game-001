export function checkAnswer(userInput: string, correctAnswer: number): boolean {
  if (userInput.trim() === '') return false

  const parsed = Number(userInput)
  if (isNaN(parsed)) return false

  return parsed === correctAnswer
}