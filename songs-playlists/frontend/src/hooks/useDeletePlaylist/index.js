import { useMutation } from "@tanstack/react-query";
import axios from "axios"
import { deletePlaylist } from '../../services/playlists';

const useDeletePlaylist = () => {
  const mutation = useMutation({
    mutationFn: (id) => deletePlaylist({ restClient: axios, id })
  })

  return mutation;
};

export default useDeletePlaylist;