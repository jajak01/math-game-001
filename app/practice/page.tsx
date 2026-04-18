'use client'

import { useEffect, useState } from 'react'
import { generateQuestion } from '@/lib/generateQuestion'
import { Category, Level, Question } from '@/types/math'
import MathCard from '@/components/MathCard'
import ChoiceButtons from '@/components/ChoiceButtons'
import CategorySelector from '@/components/CategorySelector'
import ProgressBar from '@/components/ProgressBar'
import { getSuggestion } from '@/lib/getSuggestion'
import { getNextLevel } from '@/lib/adaptiveLevel'

export default function PracticePage() {
  const TOTAL = 10

  const [level, setLevel] = useState<Level>('SD')
  const [category, setCategory] = useState<Category>('arithmetic')
  const [question, setQuestion] = useState<Question | null>(null)

  const [progress, setProgress] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [finished, setFinished] = useState(false)
  const [wrongMap, setWrongMap] = useState<Record<string, number>>({})
  const [locked, setLocked] = useState(false)

  const load = () => {
    const q = generateQuestion(level, category)
    setQuestion(q)
  }

  useEffect(() => {
    setProgress(0)
    setCorrectCount(0)
    setFinished(false)
    setWrongMap({})
    load()
  }, [level, category])

  const handleSelect = (index: number) => {
    if (!question || finished || locked) return

    setLocked(true)

    const isCorrect = index === question.correctIndex

    if (isCorrect) {
      setFeedback('Correct 👍')
      setCorrectCount((c) => c + 1)
    } else {
      setFeedback(`Wrong ❌ (Answer: ${question.answer})`)
      setWrongMap((prev) => ({
        ...prev,
        [question.operation]: (prev[question.operation] || 0) + 1,
      }))
    }

    setProgress((prev) => {
      const next = prev + 1

      if (next >= TOTAL) {
        setFinished(true)
        setLocked(false)
      } else {
        const delay = isCorrect ? 400 : 900

        setTimeout(() => {
          setFeedback('')
          load()
          setLocked(false)
        }, delay)
      }

      return next
    })
  }

    const restart = () => {
    const accuracy = correctCount / TOTAL
    const nextLevel = getNextLevel(level, accuracy)

    setLevel(nextLevel)
    setProgress(0)
    setCorrectCount(0)
    setFinished(false)
    setWrongMap({})
    setFeedback('')
    setLocked(false)
    load()
    }

  if (!question) return <div>Loading...</div>

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">

      {/* Level */}
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value as Level)}
        className="border p-2"
      >
        <option value="SD">SD (Elementary)</option>
        <option value="SMP">SMP (Middle)</option>
        <option value="SMA">SMA (High)</option>
      </select>

      {/* Category */}
      <CategorySelector value={category} onChange={setCategory} />

      {/* Progress */}
      <ProgressBar current={progress} total={TOTAL} />

      {finished ? (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl">Finished 🎉</h2>

          <p>Score: {correctCount} / {TOTAL}</p>

          <p>Nilai: {Math.round((correctCount / TOTAL) * 100)}</p>

          <p className="text-center text-gray-600 max-w-md">
            {getSuggestion(wrongMap)}
          </p>

          <button
            onClick={restart}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Restart
          </button>
        </div>
      ) : (
        <>
          <MathCard question={question.question} />

          <ChoiceButtons
            choices={question.choices}
            onSelect={handleSelect}
          />
        </>
      )}

      {/* Feedback */}
      <p className="text-lg">{feedback}</p>
    </div>
  )
}