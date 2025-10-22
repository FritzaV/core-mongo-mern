import {
  useQuery,
} from '@tanstack/react-query'
import axios from "axios"
import { getAllSong } from '../../services/songs';

const useGetAllSongs = () => {
  const allSongs = useQuery({
    queryKey: ['ALL_SONGS'],
    queryFn: () => getAllSong({ restClient: axios })
  })

  return allSongs;
};

export default useGetAllSongs;