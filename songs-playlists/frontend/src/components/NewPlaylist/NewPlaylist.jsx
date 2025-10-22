import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';

import './NewPlaylist.css'
import usePostNewPlaylist from "../../hooks/usePostNewPlaylist";
import useGetAllSongs from "../../hooks/useGetAllSongs";

const NewPlaylist = () => {
  const [namePlaylist, setNamePlaylist] = useState('');
  const [checked, setChecked] = useState([]);
  const { data, isError, isFetching } = useGetAllSongs();

  const navigate = useNavigate();
  const { mutate } = usePostNewPlaylist();

  const handleToggle = (id) => {
    setChecked((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = { name: namePlaylist, songs: checked }
    mutate(newPlaylist);
    navigate('/playlists')
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
          Agregar una playlist
        </Typography>
      </Box>
      <div className="new-song-inputs">
        <TextField
          id="outlined-controlled"
          label="Titulo"
          name="titulo"
          value={namePlaylist}
          onChange={(e) => setNamePlaylist(e.target.value)}
        />
        {
          isFetching && <CircularProgress />
        }
        {!isFetching && <List dense component="div" role="list">
          {data?.map((song) => {
            const labelId = `list-item-${song.titulo}-label`;

            return (
              <ListItemButton
                key={song._id}
                role="listitem"
                onClick={() => handleToggle(song._id)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={checked.includes(song._id)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`List item ${song.titulo + 1}`} />
              </ListItemButton>
            );
          })}
        </List>}
        {!isFetching && isError && <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          message="Listado de canciones no disponible"
        />}
      </div>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Agregar playlist
      </Button>
    </div>
  );
};

export default NewPlaylist;
