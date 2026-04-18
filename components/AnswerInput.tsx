type Props = {
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
}

export default function AnswerInput({ value, onChange, onSubmit }: Props) {
  return (
    <div className="flex gap-2">
      <input
        className="border p-2 text-center rounded w-32"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSubmit()
        }}
      />

      <button
        className="px-4 py-2 bg-black text-white rounded"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  )
}