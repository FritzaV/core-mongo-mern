import { useMutation } from "@tanstack/react-query";
import axios from "axios"
import { deleteSong } from '../../services/songs';

const useDeleteSongs = () => {
  const mutation = useMutation({
    mutationFn: (id) => deleteSong({ restClient: axios, id })
  })

  return mutation;
};

export default useDeleteSongs;