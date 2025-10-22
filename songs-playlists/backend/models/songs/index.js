import mongoose from "mongoose";

const songsSchema = new mongoose.Schema({
  titulo: {
    type: String,
    require: true,
    minLength: [6, "El mínimo de carácteres es de 6"],
    maxLength: [255, "El máximo de carácteres es de 255"]
  },
  artista: {
    type: String,
    require: true,
    minLength: [10, "El mínimo de carácteres es de 10"],
    maxLength: [255, "El máximo de carácteres es de 255"]
  },
  anioLanzamiento: {
    type: Number,
    min: [1000, "Debe tener 4 dígitos"],
    max: [9999, "Debe tener 4 dígitos"]
  },
  genero: {
    type: String,
    require: true,
    validate: {
      validator: function (v) {
        return v && v.trim().length > 0;
      },
      message: "El genero no puede estar vacío"
    },
  },
},
  {
    timestamps: true
  }
);
// Nombre del modelo / Esquema del modelo / Nombre de la colección
const Songs = mongoose.model("Songs", songsSchema, "songs");

// Aquí exportamos la puerta de enlace a la conexión usuarios de la BD
export default Songs;