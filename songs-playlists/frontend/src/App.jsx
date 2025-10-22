import { BrowserRouter, Route, Routes } from "react-router-dom";
import Songs from "./components/Songs/Songs";
import Layout from "./components/Layout";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Playlists from "./components/Playlists/Playlists";
import NewSong from "./components/NewSong/NewSong";
import NewPlaylist from "./components/NewPlaylist/NewPlaylist";
import EditSong from "./components/EditSong/EditSong";
import EditPlaylist from "./components/EditPlaylist/EditPlaylist";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Songs />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/songs/new" element={<NewSong />} />
            <Route path="/songs/edit/:id" element={<EditSong />} />
            <Route path="/playlists/new" element={<NewPlaylist />} />
            <Route path="/playlists/edit/:id" element={<EditPlaylist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
