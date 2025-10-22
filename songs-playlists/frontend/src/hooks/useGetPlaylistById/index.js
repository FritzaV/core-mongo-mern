import {
  useQuery,
} from '@tanstack/react-query'
import axios from "axios"
import { getPlaylistById } from '../../services/playlists';

const useGetPlaylistById = (id) => {
  const song = useQuery({
    queryKey: ['PLAYLIST_BY_ID'],
    queryFn: () => getPlaylistById({ restClient: axios, id })
  })

  return song;
};

export default useGetPlaylistById;