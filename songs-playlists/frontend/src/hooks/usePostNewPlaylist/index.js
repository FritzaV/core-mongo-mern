import { useMutation } from "@tanstack/react-query";
import { updatePlaylist } from "../../services/playlists";
import axios from "axios";

const usePostNewPlaylist = () => {
  const mutation = useMutation({
    mutationFn: ({ id, playlist }) => updatePlaylist({ restClient: axios, id, playlist })
  })

  return mutation;
}

export default usePostNewPlaylist;