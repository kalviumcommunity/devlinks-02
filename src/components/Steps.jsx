export default function Steps({ steps }) {
  return (
    <section className="steps">
      <h2>Method</h2>
      {/* BUG (issue #5): steps are numbered but use <ul> (bullets) instead of an ordered <ol>. */}
      <ul>
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  )
}
