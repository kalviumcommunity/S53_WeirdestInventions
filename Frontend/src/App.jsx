import { Route,Routes } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './index.css'
import Listings from './components/Listings'
import AddPost from './components/AddPost'
import EditPost from './components/EditPost'

function App() {


  return (
    <><div className='tab'>
      <Navbar/>
      <Routes>
        <Route element={<Home/>}  path="/" />
        <Route element={<Listings/>}  path="/listings" />
        <Route element={<AddPost/>}  path="/addpost" />
        <Route element={<EditPost/>}  path="/editpost/:id" />
      </Routes>
      
    </div>
    </>
  )
}

export default App
