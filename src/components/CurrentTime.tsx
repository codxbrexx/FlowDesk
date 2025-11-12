import { useEffect, useState } from 'react'

export default function CurrentTime() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="ui-current-time">
      <time dateTime={time.toISOString()}>{time.toLocaleTimeString()}</time>
    </div>
  )
}
