import { useEffect, useState } from "react";
import './Home.css';
import { getListSongs } from "../services/songs";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [filterSong, setFilterSong] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getListSongs();
      setSongs(data);
    };

    fetchSongs();
  }, []);

  const filterSongs = songs.filter(song =>
    song?.titulo?.toLowerCase().includes(filterSong?.toLowerCase())
  );

  return (
    <div className="home-wrapper">
      <h1 class="display-1">All Songs</h1>
      <div class="input-group input-group-lg">
        <input type="text" value={filterSong} onChange={(e) => setFilterSong(e.target.value)} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>
      <ul class="list-group">
        {filterSongs?.map((song) => (
          <li class="list-group-item"><p>{song.titulo} by {song.artista} ({song.genero})</p></li>
        ))}
      </ul>
    </div>
  )
};

export default Home;