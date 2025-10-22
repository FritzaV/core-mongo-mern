import mongoose from "mongoose";

const playlistsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: [6, "El mínimo de carácteres es de 6"],
    maxLength: [255, "El máximo de carácteres es de 255"]
  },
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Songs"
  }]
},
  {
    timestamps: true
  }
);
// Nombre del modelo / Esquema del modelo / Nombre de la colección
const Playlists = mongoose.model("Playlists", playlistsSchema, "playlists");

// Aquí exportamos la puerta de enlace a la conexión usuarios de la BD
export default Playlists;