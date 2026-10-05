import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import Gastos from './pages/Gastos/Gastos'
import Receitas from './pages/Receitas/Receitas'
import Categorias from './pages/Categorias/Categorias'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/gastos" element={<Gastos />} />

        <Route path="/receitas" element={<Receitas />} />

        <Route path="/categorias" element={<Categorias />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App