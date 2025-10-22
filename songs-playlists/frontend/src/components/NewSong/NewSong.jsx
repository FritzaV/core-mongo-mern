import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

import './NewSong.css'
import usePostNewSong from "../../hooks/usePostNewSong";

const NewSong = () => {
  const [formNewSong, setFormNewSong] = useState({
    titulo: "",
    artista: "",
    genero: "",
    album: "",
  });

  const navigate = useNavigate();
  const { mutate } = usePostNewSong();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormNewSong((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formNewSong);
    navigate('/')
  };

  return (
    <div className="new-song-wrapper">
      <Box display="flex" alignItems="center" mb={3} gap={1}>
        <Box
          sx={{
            bgcolor: "#1664C0",
            width: 40,
            height: 40,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddIcon sx={{ color: "#fff" }} />
        </Box>
        <Typography variant="h4" sx={{ color: "#333" }}>
          Agregar una canción
        </Typography>
      </Box>
      <div className="new-song-inputs">
        <TextField
          id="outlined-controlled"
          label="Titulo"
          name="titulo"
          value={formNewSong.titulo}
          onChange={handleChange}
        />
        <TextField
          id="outlined-controlled"
          label="Artista"
          name="artista"
          value={formNewSong.artista}
          onChange={handleChange}
        />
        <TextField
          id="outlined-controlled"
          label="Genero"
          name="genero"
          value={formNewSong.genero}
          onChange={handleChange}
        />
        <TextField
          id="outlined-controlled"
          label="Album"
          name="album"
          value={formNewSong.album}
          onChange={handleChange}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Agregar canción
      </Button>
    </div>
  );
};

export default NewSong;
