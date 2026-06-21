import { Route, Routes } from 'react-router-dom'
import './App.css'
import Portfolio from '@/components/Portfolio'

const NotFound = () => (
  <main className="paper-bg sketch-text flex min-h-screen items-center justify-center px-6 text-pencil-dark">
    <section className="paper-surface max-w-md px-8 py-7 text-center shadow-sketch">
      <h1 className="sketch-heading text-4xl font-bold">Page not found</h1>
      <p className="mt-5 text-xl text-pencil-medium">This sketchbook page does not exist.</p>
    </section>
  </main>
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App