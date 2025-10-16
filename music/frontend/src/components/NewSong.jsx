import { useState } from 'react';
import './NewSong.css'
import { useNavigate } from "react-router";
import { postNewSong } from '../services/songs';


const NewSong = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  const navigate = useNavigate();

  const handleOnSubmit = async () => {
    await postNewSong(title, artist, genre)
    navigate("/");
  };

  return (
    <div className="new-song-wrapper">
      <h1>New Song</h1>
      <div class="input-group">
        <span class="input-group-text">Title</span>
        <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" placeholder="Agregar un titulo" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="input-group">
        <span class="input-group-text">Artist</span>
        <input name="artist" type="text" value={artist} onChange={(e) => setArtist(e.target.value)} class="form-control" placeholder="Agregar artista" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="input-group">
        <span class="input-group-text">Genre</span>
        <input name="genre" type="text" value={genre} onChange={(e) => setGenre(e.target.value)} class="form-control" placeholder="Agregar género" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="input-group">
        <span class="input-group-text">Album</span>
        <input name="album" type="text" class="form-control" placeholder="Agregar album" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <button type="submit" onClick={handleOnSubmit} class="btn btn-success">Add Song</button>
    </div>
  )
}

export default NewSong;