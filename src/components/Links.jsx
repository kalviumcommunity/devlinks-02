const links = [
  // BUG (issue #3): broken URL ("htps" instead of "https")
  { label: 'GitHub', url: 'htps://github.com/kalviumcommunity' },
  { label: 'Twitter', url: 'https://twitter.com' },
]

export default function Links() {
  return (
    <section className="links">
      {links.map((l) => (
        // BUG (issue #9): missing "key" prop on the mapped element
        <a className="btn btn-primary" href={l.url}>{l.label}</a>
      ))}
      {/* BUG (issue #6 partner): this button has no onClick handler wired */}
      <button id="copy-btn" className="btn btn-primary">Copy profile link</button>
    </section>
  )
}
