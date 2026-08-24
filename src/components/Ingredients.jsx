export default function Ingredients({ items, scale }) {
  return (
    <section className="ingredients">
      <h2>Ingredients</h2>
      <ul>
        {items.map((it) => (
          // BUG (issue #2): missing "key" prop on the mapped list item.
          <li>
            {scale(it.qty)} {it.unit} — {it.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
