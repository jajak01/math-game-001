import { Question, Category, Level } from '@/types/math'
import { generateChoices } from './generateChoices'
import { getRange } from './levelConfig'

export function generateQuestion(level: Level, category: Category): Question {
  const range = getRange(level)

  const a = Math.floor(Math.random() * range) + 1
  const b = Math.floor(Math.random() * range) + 1

  let question = ''
  let answer = 0

if (category === 'arithmetic') {
  const ops: Operation[] = ['+', '-', '*']
  const op = ops[Math.floor(Math.random() * ops.length)]

  if (op === '+') {
    question = `${a} + ${b}`
    answer = a + b
  } else if (op === '-') {
    question = `${a} - ${b}`
    answer = a - b
  } else {
    question = `${a} × ${b}`
    answer = a * b
  }

  return {
    question,
    answer,
    ...generateChoices(answer),
    category,
    operation: op,
  }
}

  if (category === 'algebra') {
    const x = a
    const result = a + b
    question = `x + ${b} = ${result}`
    answer = x
  }

  if (category === 'factor') {
    const product = a * b
    question = `Which is a factor of ${product}?`
    answer = a
  }

  const { choices, correctIndex } = generateChoices(answer)

  return {
    question,
    answer,
    choices,
    correctIndex,
    category,
  }
}