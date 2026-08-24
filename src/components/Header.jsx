export default function Header() {
  return (
    <header>
      {/* BUG (issue #2): avatar image is missing alt text */}
      <img className="avatar" src="/avatar.png" />
      {/* BUG (issue #1): "Wecome" should be "Welcome" */}
      <h1>Wecome to DevLinks</h1>
    </header>
  )
}
