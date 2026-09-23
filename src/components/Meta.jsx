export default function Meta({ prep = 0, cook = 0, servings, onServings }) {
  const prepTime = Number(prep) || 0
  const cookTime = Number(cook) || 0
  const total = prepTime + cookTime

  return (
    <div className="meta">
      <span>Prep: {prepTime} min</span>
      <span>Cook: {cookTime} min</span>
      <span>Total: {total} min</span>
      <div className="servings">
        <label htmlFor="servings">Servings</label>
        <input
          id="servings"
          type="number"
          min="1"
          value={servings}
          onChange={(e) => {
            const val = e.target.value
            if (val === '') {
              onServings('')
            } else {
              const num = parseInt(val, 10)
              onServings(isNaN(num) ? '' : Math.max(1, num))
            }
          }}
          onBlur={() => {
            if (!servings || Number(servings) < 1) {
              onServings(1)
            }
          }}
        />
      </div>
    </div>
  )
}
