import { useState } from 'react'

export default function TodoList() {
  const [items, setItems] = useState<string[]>([])
  const [value, setValue] = useState('')
  return (
    <div className="ui-todo-list">
      <h3 className="text-lg">Todo</h3>
      <div className="mt-2">
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="New item" className="border p-1" />
        <button onClick={() => { if (value.trim()) { setItems((s) => [...s, value.trim()]); setValue('') } }} className="ml-2 px-2 py-1 bg-blue-600 text-white rounded">Add</button>
      </div>
      <ul className="mt-3 list-disc pl-5">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  )
}
