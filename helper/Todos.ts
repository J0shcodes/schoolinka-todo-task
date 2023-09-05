import axios from "axios";

import { Todos } from "@/interfaces/Todos";

/* Fetches todos from the https://jsonplaceholder.typicode.com/todos endpoint 
   and returns an array of todos or an error message 
*/

const fetchTodos = async (): Promise<Todos[] | string> => {
  let result;
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    result = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 500) {
        result = "Something went wrong while trying to fetch todos";
      }

      if (error.response?.status === 404) {
        result = "This endpoint does not exist";
      }

      if (error.response?.status === 400) {
        result = "Invalid or bad request";
      }

      if (error.response?.status === 401) {
        result = "You do not have access to this endpoint";
      }
    }
  }

  return result;
};

export default fetchTodos;
