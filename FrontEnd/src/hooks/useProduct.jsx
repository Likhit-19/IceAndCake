import {useQuery} from "@tanstack/react-query";
import {getProduct} from "../api/getProduct";

  export function useProduct()
  {
     return useQuery({
        queryKey:["AllProduct"],
        queryFn:getProduct,
     })
  }