import { Category } from '@/types/math'

type Props = {
  value: Category
  onChange: (c: Category) => void
}

export default function CategorySelector({ value, onChange }: Props) {
  return (
    <select
      className="border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value as Category)}
    >
      <option value="arithmetic">Arithmetic</option>
      <option value="algebra">Algebra</option>
      <option value="factor">Factor</option>
    </select>
  )
}