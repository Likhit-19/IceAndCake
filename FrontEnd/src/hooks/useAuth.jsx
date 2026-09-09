import {useQuery} from "@tanstack/react-query";
import {getCurrentUser} from "../api/authApi.js";

  export function useAuth()
  {
     return useQuery({
        queryKey:["currentUser"],
        queryFn:getCurrentUser,
     })
  }