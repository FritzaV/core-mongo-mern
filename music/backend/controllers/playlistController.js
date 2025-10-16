import Playlist from "../models/playlistModel.js";

const playlistList = async (req, res) => {
  try {
    const playlists = await Playlist.find({}).populate("songs");
    return res.status(201).json(playlists);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createPlaylist = async (req, res) => {
  try {
    const body = req.body;
    const newPlaylist = await Playlist.insertOne(body);
    return res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePlaylist = async (req, res) => {
  try {
    const id = req.params.id
    await Playlist.findByIdAndDelete(id)
    return res.status(200).json("Se elimnó exitosamente")
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export { playlistList, createPlaylist, deletePlaylist }