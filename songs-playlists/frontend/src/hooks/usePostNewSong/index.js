import { useMutation } from "@tanstack/react-query";
import { postNewSong } from "../../services/songs";
import axios from "axios";

const usePostNewSong = () => {
  const mutation = useMutation({
    mutationFn: (newSong) => postNewSong({ restClient: axios, newSong })
  })

  return mutation;
}

export default usePostNewSong;