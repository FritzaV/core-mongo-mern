import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NewSong from './components/NewSong';
import Playlists from './components/Playlists';
import NewPlaylists from './components/NewPlaylists';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add/song" element={<NewSong />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/add/playlists" element={<NewPlaylists />} />
      </Routes>
    </>
  )
}

export default App
