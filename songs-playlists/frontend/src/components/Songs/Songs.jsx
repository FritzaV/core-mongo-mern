import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useGetAllSongs from "../../hooks/useGetAllSongs";
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import './Songs.css'
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import useDeleteSongs from "../../hooks/useDeleteSongs";
import { useNavigate } from "react-router-dom";

const Songs = () => {
  const [filterSong, setFilterSong] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const { data, isError, isFetching, refetch } = useGetAllSongs();
  const { mutate: deleteMutate, isSuccess: isDeleted } = useDeleteSongs();
  const navigate = useNavigate();

  const filterSongs = data?.filter(song =>
    song?.titulo?.toLowerCase().includes(filterSong?.toLowerCase())
  );

  const handleListClick = (song) => {
    setSelectedSong(song);
    setOpen(true);
  };

  const handleDeletedSong = (id) => {
    deleteMutate(id, {
      onSuccess: () => {
        setOpen(false);
        refetch();
      },
    });
  };

  const handleEditSong = (id) => {
    navigate(`/songs/edit/${id}`)
  };

  return (
    <div className="songs-wrapper">
      <FormControl fullWidth>
        <OutlinedInput
          id="outlined-filter-songs"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Filtrar canciones..."
          value={filterSong}
          onChange={(e) => setFilterSong(e.target.value)}
        />
      </FormControl>
      <List>
        {
          isFetching && <CircularProgress />
        }
        {!isFetching && filterSongs?.map((song, index) => (
          <ListItemButton key={index} divider alignItems="flex-start" onClick={() => handleListClick(song)}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <LibraryMusicOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={song?.titulo}
              secondary={`${song?.artista} • ${song?.genero}`}
            />
          </ListItemButton>
        ))}
        {!isFetching && isError && <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          message="Listado de canciones no disponible"
        />}
      </List>
      <Dialog
        open={open}
        fullWidth
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{selectedSong?.titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <strong>Artista:</strong> {selectedSong?.artista || "Desconocido"}
            <br />
            <strong>Género:</strong> {selectedSong?.genero || "Desconocido"}
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleEditSong(selectedSong?._id)}>Editar</Button>
          <Button onClick={() => handleDeletedSong(selectedSong?._id)}>Eliminar</Button>
        </DialogActions>
      </Dialog>
      {isDeleted && <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        message="La canción se eliminó exitosamente"
      />}
    </div>
  );
};

export default Songs;
