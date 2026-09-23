import { useState } from 'react'
import Header from './components/Header.jsx'
import Meta from './components/Meta.jsx'
import Ingredients from './components/Ingredients.jsx'
import Steps from './components/Steps.jsx'
import Footer from './components/Footer.jsx'

const recipe = {
  title: 'Spaghetti Aglio e Olio',
  baseServings: 4,
  prepMinutes: 10,
  cookMinutes: 15,
  image: '/dish.svg',
  ingredients: [
    { name: 'Spaghetti', qty: 400, unit: 'g' },
    { name: 'Garlic cloves, thinly sliced', qty: 6, unit: '' },
    { name: 'Extra-virgin olive oil', qty: 60, unit: 'ml' },
    { name: 'Red pepper flakes', qty: 1, unit: 'tsp' },
    { name: 'Fresh parsley, chopped', qty: 1, unit: 'handful' },
  ],
  steps: [
    'Boil the spaghetti in salted water until al dente.',
    'Warm the olive oil and gently fry the sliced garlic.',
    'Add red pepper flakes, then toss the drained pasta.',
    'Finish with parsley and a splash of pasta water.',
  ],
}

export default function App() {
  const [servings, setServings] = useState(recipe.baseServings)

  const scale = (qty) => {
    const s = Number(servings)
    if (!recipe.baseServings || !s || s <= 0 || isNaN(s)) return 0
    const scaled = (qty * s) / recipe.baseServings
    return Number(scaled.toFixed(2).replace(/\.00$/, ''))
  }

  return (
    <main className="card">
      <Header title={recipe.title} image={recipe.image} />
      <Meta
        prep={recipe.prepMinutes}
        cook={recipe.cookMinutes}
        servings={servings}
        onServings={setServings}
      />
      <Ingredients items={recipe.ingredients} scale={scale} />
      <Steps steps={recipe.steps} />
      <Footer />
    </main>
  )
}
