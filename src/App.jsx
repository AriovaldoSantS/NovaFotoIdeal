import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Rastrear from './pages/Rastrear'
import Promocao from './pages/Promocao'
import Fale from './pages/Fale'
import Conta from './pages/Conta'
import Categoria from './pages/Categoria'
import Cart from './pages/Cart'
import Atendimento from './pages/Atendimento'

import './components/Home.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/atendimento' element={<Atendimento />} />
        <Route path='/carrinho' element={<Cart />} />
        <Route path='/categoria' element={<Categoria />} />
        <Route path='/conta' element={<Conta />} />
        <Route path='/fale' element={<Fale />} />
        <Route path='/promocao' element={<Promocao />} />
        <Route path='/rastrear' element={<Rastrear />} />
      </Routes>
    </>
  )
}

export default App
