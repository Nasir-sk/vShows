import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TVShows from './components/TVShows'
import Movies from './components/Movies'
import Settings from './components/Settings'
import Live from './components/Live'
import Sports from './components/Sports'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {


  return (
   <div>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/tv-shows' element={<TVShows/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
          <Route path='/live' element={<Live/>}></Route>
          <Route path='/sports' element={<Sports/>}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
