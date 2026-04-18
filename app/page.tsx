import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Calm Math</h1>
      <p className="text-gray-500">Practice math at your own pace</p>

      <Link href="/practice">
        <button className="px-6 py-3 bg-black text-white rounded">
          Start Practice
        </button>
      </Link>
    </div>
  )
}