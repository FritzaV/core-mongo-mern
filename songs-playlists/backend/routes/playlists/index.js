import express from "express";
import { getAllPlaylists, createPlaylist, deletePlaylist, editPlaylist, searchPlaylistById } from "../../controllers/playlists/index.js";

const router = express.Router();

router.get('/all', getAllPlaylists);
router.post('/new', createPlaylist);
router.delete('/delete/:id', deletePlaylist);
router.put('/edit/:id', editPlaylist);
router.get('/searchById/:id', searchPlaylistById);

export default router;