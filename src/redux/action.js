import axios from "axios";
import {
  GET_POK_DATA_FAILURE,
  GET_POK_DATA_REQUEST,
  GET_POK_DATA_SUCCESS
} from "./actionType";

export const getPokData = (offset) => async (dispatch) => {
  try {
    dispatch({ type: GET_POK_DATA_REQUEST });

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=40&offset=${offset}https://www.msn.com/en-in/?pc=ACTE`
    );
    console.log(res, "dataafasfasdfas");
    dispatch({ type: GET_POK_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_POK_DATA_FAILURE, payload: error.message });
  }
};
