export default function Steps({ steps }) {
  return (
    <section className="steps">
      <h2>Method</h2>
      <ol>
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </section>
  )
}
