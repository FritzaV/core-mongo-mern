// express: librería de node.js utilizada para crear APIS y servicios web
import express from "express";
import { connectDB } from "./config/db.js";
import musicRouter from "./routes/musicRoutes.js";
import playlistRouter from "./routes/playlistRoutes.js";
import cors from "cors";

// Instancia de express
const app = express();

// Configuración que permite a nuestro servicio interprestar body en formado json
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

// Conexión a BD
connectDB()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

// Ruta principal
app.use('/musica', musicRouter)
app.use('/playlist', playlistRouter)

const port = 3000;

// Levantamos el servidor
app.listen(port, () => {
  console.log(`El servidor ha inicializado en el puerto ${port}`);
})
