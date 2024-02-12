import { Router } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './index.css'
import Card from './components/cards'

function App() {


  return (
    <><div style={{width: "100vw",height: "100vh",padding: "0"}} className='tab'>
      <Navbar/>
      {/* <Home/> */}
      <Card/>
    </div>
    </>
  )
}

export default App
