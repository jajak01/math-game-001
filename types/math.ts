export type Operation = '+' | '-' | '*' | '/' | 'algebra' | 'factor'

export type Category = 'arithmetic' | 'algebra' | 'factor'

export type Level = 'SD' | 'SMP' | 'SMA'

export type Question = {
  question: string
  answer: number
  choices: number[]
  correctIndex: number
  category: Category
  operation: Operation
}