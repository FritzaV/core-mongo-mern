import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import useGetAllPlaylists from "../../hooks/useGetAllPlaylists";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import './Playlists.css'
import { useState } from "react";
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";
import useDeletePlaylist from "../../hooks/useDeletePlaylist";

const Playlists = () => {
  const [filterPlaylist, setFilterPlaylist] = useState('');
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [open, setOpen] = useState(false);
  const { data, isError, isFetching, refetch } = useGetAllPlaylists();
  const { mutate: deleteMutate } = useDeletePlaylist();
  const navigate = useNavigate();

  const filterPlaylists = data?.filter(p =>
    p?.name?.toLowerCase().includes(filterPlaylist?.toLowerCase())
  );

  const handleListClick = (playlist) => {
    setSelectedPlaylist(playlist);
    setOpen(true);
  };

  const handleDeletedSong = (id) => {
    deleteMutate(id, {
      onSuccess: () => {
        setOpen(false);
        refetch();
      }
    });
  };

  const handleEditPlaylist = (id) => {
    navigate(`/playlists/edit/${id}`)
  };

  return (
    <div className="playlists-wrapper">
      <FormControl fullWidth>
        <OutlinedInput
          id="outlined-filter-playlists"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Filtrar playlists..."
          value={filterPlaylist}
          onChange={(e) => setFilterPlaylist(e.target.value)}
        />
      </FormControl>
      <List>
        {
          isFetching && <CircularProgress />
        }
        {!isFetching && filterPlaylists?.map((p, index) => (
          <ListItemButton key={index} divider alignItems="flex-start" onClick={() => handleListClick(p)}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <QueueMusicOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={p?.name}
              secondary={`${p?.songs?.map(s => `${s?.titulo} • ${s?.artista}`)}`}
            />
          </ListItemButton>
        ))}
        {!isFetching && isError && <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          message="Listado de playlists no disponible"
        />}
      </List>
      <Dialog
        open={open}
        fullWidth
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{selectedPlaylist?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* <strong>Artista:</strong> {selectedSong?.artista || "Desconocido"}
            <br />
            <strong>Género:</strong> {selectedSong?.genero || "Desconocido"}
            <br /> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleEditPlaylist(selectedPlaylist?._id)}>Editar</Button>
          <Button onClick={() => handleDeletedSong(selectedPlaylist?._id)}>Eliminar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Playlists;