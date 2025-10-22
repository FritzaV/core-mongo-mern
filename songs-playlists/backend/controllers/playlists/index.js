import Playlists from "../../models/playlists/index.js";

const getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlists.find({}).populate("songs");
    return res.status(201).json(playlists);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createPlaylist = async (req, res) => {
  try {
    const body = req.body;
    const newSong = await Playlists.create(body);
    return res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message }); console.log(error)
  }
};

const deletePlaylist = async (req, res) => {
  try {
    const id = req.params.id;
    await Playlists.findByIdAndDelete(id)
    return res.status(200).json("Se elimnó exitosamente")
  } catch (error) {
    res.status(400).json({ message: error.message }); console.log(error);
  }
};

const editPlaylist = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const editedSong = await Playlists.findByIdAndUpdate(id, body, { new: true });
    return res.status(200).json(editedSong);
  } catch (error) {
    res.status(400).json({ message: error.message }); console.log(error);
  }
}

const searchPlaylistById = async (req, res) => {
  try {
    const id = req.params.id;
    const playlistById = await Playlists.findById(id).populate("songs");
    return res.status(200).json(playlistById);
  } catch (error) {
    res.status(400).json({ message: error.message }); console.log(error);
  }
}

export { getAllPlaylists, createPlaylist, deletePlaylist, editPlaylist, searchPlaylistById }