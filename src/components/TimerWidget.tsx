import { useEffect, useState } from 'react'

export default function TimerWidget() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])
  return <div className="ui-timer">{seconds}s</div>
}
