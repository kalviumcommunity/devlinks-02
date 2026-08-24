export default function Meta({ prep, cook, servings, onServings }) {
  // BUG (issue #8): total time shows NaN when prep or cook is left blank/undefined (no fallback).
  const total = prep + cook

  return (
    <div className="meta">
      <span>Prep: {prep} min</span>
      <span>Cook: {cook} min</span>
      <span>Total: {total} min</span>
      <div className="servings">
        <label htmlFor="servings">Servings</label>
        <input
          id="servings"
          type="number"
          value={servings}
          onChange={(e) => onServings(Number(e.target.value))}
        />
      </div>
    </div>
  )
}
