import axios from 'axios';

const getListSongs = async () => {
  try {
    const response = await axios.get('http://localhost:3000/musica/canciones');
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

const postNewSong = async (title, artist, genre) => {
  try {
    const response = await axios.post("http://localhost:3000/musica/canciones", {
      titulo: title, artista: artist, genero: genre
    })
    return response?.data;
  } catch (error) {
    console.log(error.response.data.message)
  }
}

export { getListSongs, postNewSong }