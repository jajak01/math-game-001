type Props = {
  choices: number[]
  onSelect: (index: number) => void
}

export default function ChoiceButtons({ choices, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {choices.map((choice, i) => (
        <button
          key={i}
          className="border p-4 rounded hover:bg-gray-100"
          onClick={() => onSelect(i)}
        >
          {choice}
        </button>
      ))}
    </div>
  )
}