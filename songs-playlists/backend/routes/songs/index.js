import express from "express";
import { getAllSongs, createSong, deleteSong, editSong, searchSongById } from "../../controllers/songs/index.js";

const router = express.Router();

router.get('/all', getAllSongs);
router.post('/new', createSong);
router.delete('/delete/:id', deleteSong);
router.put('/edit/:id', editSong);
router.get('/searchById/:id', searchSongById);

export default router;