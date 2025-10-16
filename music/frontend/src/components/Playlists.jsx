import { useEffect } from 'react';
import { getListPlaylist } from '../services/playlists';
import './Playlists.css'
import { useState } from 'react';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [filterPlaylist, setFilterPlaylist] = useState('');

  useEffect(() => {
    const fetchPlaylist = async () => {
      const data = await getListPlaylist();
      setPlaylists(data);
    };

    fetchPlaylist();
  }, []);

  const filterPlaylists = playlists?.filter(p =>
    p?.name?.toLowerCase().includes(filterPlaylist?.toLowerCase())
  );

  return (
    <div className="playlists-wrapper">
      <h1 class="display-1">All Playlists</h1>
      <div class="input-group input-group-lg">
        <input type="text" value={filterPlaylist} onChange={(e) => setFilterPlaylist(e.target.value)} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>
      <ul class="list-group">
        {filterPlaylists?.map((p) => (
          <li class="list-group-item"><p>{p.name}</p></li>
        ))}
      </ul>
    </div>
  )
};

export default Playlists;