import Header from './components/Header.jsx'
import Bio from './components/Bio.jsx'
import Links from './components/Links.jsx'
import Footer from './components/Footer.jsx'
// BUG (issue #10): unused import left in the file
import { useEffect } from 'react'

export default function App() {
  // BUG (issue #6): leftover debug console.log
  console.log('debug: App rendered')
  return (
    <main className="card">
      <Header />
      <Bio />
      <Links />
      <Footer />
    </main>
  )
}
