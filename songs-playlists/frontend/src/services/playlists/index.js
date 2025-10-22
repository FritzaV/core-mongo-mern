const URL = 'http://localhost:3000/playlists';

const getAllPlaylists = async ({ restClient }) => {
  const response = await restClient.get(`${URL}/all`);
  return await response.data
};

const postNewPlaylist = async ({ restClient, newPlaylist }) => {
  const response = await restClient.post(`${URL}/new`, newPlaylist);
  return await response.data
};

const deletePlaylist = async ({ restClient, id }) => {
  const response = await restClient.delete(`${URL}/delete/${id}`);
  return await response.data
};

const updatePlaylist = async ({ restClient, id, playlist }) => {
  const response = await restClient.put(`${URL}/edit/${id}`, playlist);
  return await response.data
};

const getPlaylistById = async ({ restClient, id }) => {
  const response = await restClient.get(`${URL}/searchById/${id}`);
  return await response.data
};

export { getAllPlaylists, postNewPlaylist, deletePlaylist, getPlaylistById, updatePlaylist }