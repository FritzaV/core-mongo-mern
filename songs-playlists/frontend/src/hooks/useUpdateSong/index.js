import { useMutation } from "@tanstack/react-query";
import axios from "axios"
import { updateSong } from '../../services/songs';

const useUpdateSongs = () => {
  const mutation = useMutation({
    mutationFn: ({ id, song }) => updateSong({ restClient: axios, id, song })
  })

  return mutation;
};

export default useUpdateSongs;