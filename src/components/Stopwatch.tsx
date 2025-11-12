import { useEffect, useRef, useState } from 'react'

export default function Stopwatch() {
  const [running, setRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    let id: number | undefined
    if (running) {
      startRef.current = Date.now() - elapsed
      id = window.setInterval(() => setElapsed(Date.now() - (startRef.current ?? 0)), 100)
    }
    return () => {
      if (id) clearInterval(id)
    }
  }, [running])

  return (
    <div className="ui-stopwatch">
      <div className="text-lg font-mono">{(elapsed / 1000).toFixed(1)}s</div>
      <div className="mt-2 flex gap-2">
        <button onClick={() => setRunning(true)} className="px-2 py-1 bg-green-500 text-white rounded">Start</button>
        <button onClick={() => setRunning(false)} className="px-2 py-1 bg-yellow-500 text-white rounded">Stop</button>
        <button onClick={() => { setElapsed(0); startRef.current = null }} className="px-2 py-1 bg-gray-500 text-white rounded">Reset</button>
      </div>
    </div>
  )
}
