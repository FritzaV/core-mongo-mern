import Songs from "../../models/songs/index.js";

const getAllSongs = async (req, res) => {
  try {
    const songs = await Songs.find({})
    return res.status(201).json(songs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createSong = async (req, res) => {
  try {
    const body = req.body;
    console.log('body', body)
    const newSong = await Songs.create(body);
    return res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message }); console.log(error)
  }
};

const deleteSong = async (req, res) => {
  try {
    const id = req.params.id;
    await Songs.findByIdAndDelete(id)
    return res.status(200).json("Se elimnó exitosamente")
  } catch (error) {
    res.status(400).json({ message: error.message }); console.log(error);
  }
};

const editSong = async (req, res) => {
  try {
    const id = req.params.id;
    console.log('id', id);
    const body = req.body;
    console.log('body', body);
    const editedSong = await Songs.findByIdAndUpdate(id, body, { new: true });
    return res.status(200).json(editedSong);
  } catch (error) {
    res.status(400).json({ message: error.message }); console.log(error);
  }
}

const searchSongById = async (req, res) => {
  try {
    const id = req.params.id;
    const songById = await Songs.findById(id);
    return res.status(200).json(songById);
  } catch (error) {
    res.status(400).json({ message: error.message }); console.log(error);
  }
}


export { getAllSongs, createSong, deleteSong, editSong, searchSongById }