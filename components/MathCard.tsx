type Props = {
  question: string
}

export default function MathCard({ question }: Props) {
  return (
    <div className="text-4xl font-semibold p-6 border rounded-xl shadow-sm">
      {question}
    </div>
  )
}