import {
  useQuery,
} from '@tanstack/react-query'
import axios from "axios"
import { getAllPlaylists } from '../../services/playlists';

const useGetAllPlaylists = () => {
  const allSongs = useQuery({
    queryKey: ['ALL_PLAYLISTS'],
    queryFn: () => getAllPlaylists({ restClient: axios })
  })

  return allSongs;
};

export default useGetAllPlaylists;