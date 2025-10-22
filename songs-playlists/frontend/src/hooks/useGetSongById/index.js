import {
  useQuery,
} from '@tanstack/react-query'
import axios from "axios"
import { getSongById } from '../../services/songs';

const useGetSongsById = (id) => {
  const song = useQuery({
    queryKey: ['SONG_BY_ID'],
    queryFn: () => getSongById({ restClient: axios, id })
  })

  return song;
};

export default useGetSongsById;