import express from "express";

import { songList, createSong, searchSongById, updateSong, deleteSong } from "../controllers/musicController.js";

// Permite crear rutas 
const router = express.Router();

// Rutas
router.get('/canciones', songList);
router.post('/canciones', createSong);
router.put('/canciones/:id', updateSong);
router.get('/canciones/:id', searchSongById);
router.delete('/canciones/:id', deleteSong);

export default router;