export default function Ingredients({ items, scale }) {
  return (
    <section className="ingredients">
      <h2>Ingredients</h2>
      <ul>
        {items.map((it) => (
          <li key={it.name}>
            {scale(it.qty)} {it.unit} — {it.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
