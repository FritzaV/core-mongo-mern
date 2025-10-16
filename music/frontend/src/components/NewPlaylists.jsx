import { useState } from 'react';
import './NewPlaylists.css'
import { useEffect } from 'react';
import { getListSongs } from '../services/songs';
import { postNewPlaylist } from '../services/playlists';
import { useNavigate } from "react-router";

const NewPlaylists = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getListSongs();
      setSongs(data);
    };

    fetchSongs();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedSongs((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((songId) => songId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleCreatePlaylist = async () => {
    await postNewPlaylist(playlistName, selectedSongs);
    navigate("/playlists");
  };

  return (
    <div className='new-playlists-wrapper'>
      <h1>Create New Playlist</h1>
      <div class="input-group">
        <span class="input-group-text">Playlist Name</span>
        <input type="text" value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} class="form-control" placeholder="Agregar un titulo" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <h2>Choose Songs</h2>
      <div className='form-check-wrapper'>
        {
          songs?.map((song) => (
            <div class="form-check">
              <input class="form-check-input" type="checkbox" onChange={() => handleCheckboxChange(song._id)} value="" id="checkDefault" />
              <label class="form-check-label" for="checkDefault">
                {song.titulo}
              </label>
            </div>
          ))
        }
      </div>
      <button type="button" onClick={handleCreatePlaylist} class="btn btn-success">Create Playlist</button>
    </div>
  )

}

export default NewPlaylists