import express from "express";

import { playlistList, createPlaylist, deletePlaylist } from "../controllers/playlistController.js";

// Permite crear rutas 
const router = express.Router();

// Rutas
router.get('/canciones', playlistList);
router.post('/canciones', createPlaylist);
router.delete('/canciones/:id', deletePlaylist)


export default router;