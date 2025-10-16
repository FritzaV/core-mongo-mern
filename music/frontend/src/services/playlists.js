import axios from 'axios';

const getListPlaylist = async () => {
  try {
    const response = await axios.get('http://localhost:3000/playlist/canciones');
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

const postNewPlaylist = async (name, idSongs) => {
  try {
    const response = await axios.post("http://localhost:3000/playlist/canciones", {
      name, songs: idSongs
    })
    return response?.data;
  } catch (error) {
    console.log(error.response.data.message)
  }
}

export { getListPlaylist, postNewPlaylist }