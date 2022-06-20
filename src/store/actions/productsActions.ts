import axios from "axios";
import { FetchedProductProps } from "../../types/types";
export const fetchProducts = () => {
  axios
    .get<FetchedProductProps[]>(
      "https://my-json-server.typicode.com/drakulovski/dbplaceholder/products"
    )
    .then((response) => {
      console.log(response);
    });
};
