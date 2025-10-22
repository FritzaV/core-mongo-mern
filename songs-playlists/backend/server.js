import express from "express";
import { connectDB } from "./config/db.js";
import songsRouter from "./routes/songs/index.js";
import playlists from "./routes/playlists/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use('/songs', songsRouter)
app.use('/playlists', playlists)


const port = 3000;
app.listen(port, () => {
  console.log(`El servidor ha inicializado en el puerto ${port}`);
});