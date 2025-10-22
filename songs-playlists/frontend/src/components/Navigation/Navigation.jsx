import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AddIcon from '@mui/icons-material/Add';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={1}>
      <Grid size={10}>
        <Item>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, gap: 2 }}>
            <Button variant="contained" onClick={() => navigate("/")} ><MusicNoteIcon />CANCIONES</Button>
            <Button variant="contained" onClick={() => navigate("/songs/new")} color="success"><AddIcon />CREAR CANCIÓN</Button>
            <Button variant="contained" color="secondary" onClick={() => navigate("/playlists")}><PlaylistPlayIcon />PLAYLISTS</Button>
            <Button variant="contained" color="info" onClick={() => navigate("/playlists/new")}><AddCircleIcon />NUEVA PLAYLIST</Button>
          </Box>
        </Item>
      </Grid>
      <Grid size={2}>
        <Item>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, gap: 2 }}>
            <Button variant="contained" color="transparent">LOGIN</Button>
            <Button variant="contained">REGISTRAR</Button>
          </Box>
        </Item>
      </Grid>
    </Grid>
  )
};

export default Navigation;