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
import { useParams } from "react-router";

import './EditPlaylist.css'
import useGetPlaylistById from "../../hooks/useGetPlaylistById";
import { useEffect } from "react";
import usePostNewPlaylist from "../../hooks/usePostNewPlaylist";

const EditPlaylist = () => {
  const { id } = useParams();
  const [namePlaylist, setNamePlaylist] = useState('');
  const [checked, setChecked] = useState([]);
  const { data, isFetching, isError } = useGetPlaylistById(id);

  const navigate = useNavigate();
  const { mutate } = usePostNewPlaylist();

  useEffect(() => {
    setNamePlaylist(data?.name || '')
  }, [data]);

  console.log('namePlaylist', namePlaylist)


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
    mutate({ id, playlist: newPlaylist });
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
          {data?.songs?.map((s) => {
            const labelId = `list-item-${s.titulo}-label`;

            return (
              <ListItemButton
                key={s._id}
                role="listitem"
                onClick={() => handleToggle(s._id)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={checked.includes(s._id)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`List item ${s.titulo + 1}`} />
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
        Editar playlist
      </Button>
    </div>
  );
};

export default EditPlaylist;
