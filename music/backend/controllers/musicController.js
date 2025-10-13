import Music from "../models/musicModel.js";

const songList = async (req, res) => {
  try {
    const songs = await Music.find({});
    return res.status(201).json(songs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createSong = async (req, res) => {
  try {
    const body = req.body;
    const newSongs = await Music.insertOne(body);
    return res.status(201).json(newSongs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const searchSongById = async (req, res) => {
  try {
    const id = req.params.id;
    const songById = await Music.findById(id);
    return res.status(200).json(songById);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSong = async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body
    const musicDestination = await Music.findByIdAndUpdate(id, body, { new: true })
    return res.status(200).json(musicDestination)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};

const deleteSong = async (req, res) => {
  try {
    const id = req.params.id
    await Music.findByIdAndDelete(id)
    return res.status(200).json("Se elimnó exitosamente")
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};

export { songList, createSong, searchSongById, updateSong, deleteSong }