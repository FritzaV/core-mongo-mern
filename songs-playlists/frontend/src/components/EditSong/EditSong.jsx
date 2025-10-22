
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import './EditSong.css'
import useGetSongsById from "../../hooks/useGetSongById";
import useUpdateSongs from "../../hooks/useUpdateSong";
import { useEffect } from "react";

const EditSong = () => {
  const { id } = useParams();
  const { data } = useGetSongsById(id);
  const [formNewSong, setFormNewSong] = useState({
    titulo: "",
    artista: "",
    genero: "",
    album: "",
  });

  useEffect(() => {
    setFormNewSong({
      titulo: data?.titulo,
      artista: data?.artista,
      genero: data?.genero,
      album: data?.album,
    })
  }, [data])

  const { mutate } = useUpdateSongs()
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormNewSong((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ id, song: formNewSong });
    navigate('/')
  };

  return (
    <div className="edit-song-wrapper">
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
          Editar una canción
        </Typography>
      </Box>
      <div className="edit-song-inputs">
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
        Editar canción
      </Button>


    </div>
  )
}

export default EditSong