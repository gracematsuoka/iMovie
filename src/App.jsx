import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'
import TopRated from './pages/TopRated'

function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/top-rated" element={<TopRated/>}/>
          </Routes>
        </main>
      </div>
    </MovieProvider>
  )
}

export default App
