// express: librería de node.js utilizada para crear APIS y servicios web
import express from "express";
import { connectDB } from "./config/db.js";
import musicRouter from "./routes/musicRoutes.js";

// Instancia de express
const app = express();

// Configuración que permite a nuestro servicio interprestar body en formado json
app.use(express.json());

// Conexión a BD
connectDB()

// Ruta principal
app.use('/musica', musicRouter)

const port = 3000;

// Levantamos el servidor
app.listen(port, () => {
  console.log(`El servidor ha inicializado en el puerto ${port}`);
})
