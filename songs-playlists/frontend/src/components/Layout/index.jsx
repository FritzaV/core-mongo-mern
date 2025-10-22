import Grid from '@mui/material/Grid';
import Navigation from '../Navigation/Navigation.jsx';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Navigation />
      </Grid>
      <Grid size={12}>
        <Outlet />
      </Grid>
    </Grid>
  )
};

export default Layout;