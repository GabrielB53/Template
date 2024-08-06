import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Navbar from '../../components/Navbar/Navegacao'
import Slide from '../../components/Carrousel/Carrousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>

      <Navbar />

      <footer>
        <Link to={'/login'}
          className='btn btn-sm btn-warning'>
          Acesso Restrito
        </Link>
      </footer>
    </div>
  )
}

export default App
