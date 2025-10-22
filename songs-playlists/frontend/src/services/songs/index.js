const URL = 'http://localhost:3000/songs';

const getAllSong = async ({ restClient }) => {
  const response = await restClient.get(`${URL}/all`);
  return await response.data
};

const postNewSong = async ({ restClient, newSong }) => {
  const response = await restClient.post(`${URL}/new`, newSong);
  return await response.data
};

const updateSong = async ({ restClient, id, song }) => {
  const response = await restClient.put(`${URL}/edit/${id}`, song);
  return await response.data
};

const deleteSong = async ({ restClient, id }) => {
  const response = await restClient.delete(`${URL}/delete/${id}`);
  return await response.data
};

const getSongById = async ({ restClient, id }) => {
  const response = await restClient.get(`${URL}/searchById/${id}`);
  return await response.data
};

export { getAllSong, postNewSong, updateSong, deleteSong, getSongById }