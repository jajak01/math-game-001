type Props = {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: Props) {
  const percent = (current / total) * 100

  return (
    <div className="w-full max-w-md">
      <p className="text-sm mb-1">
        {current} / {total}
      </p>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-black h-2 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}