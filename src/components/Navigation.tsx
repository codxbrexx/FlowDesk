import NavLink from './NavLink'

export default function Navigation() {
  return (
    <nav className="ui-navigation flex gap-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/dashboard">Dashboard</NavLink>
      <NavLink href="/tasks">Tasks</NavLink>
      <NavLink href="/time">Time</NavLink>
    </nav>
  )
}
