import {
  GET_POK_DATA_FAILURE,
  GET_POK_DATA_REQUEST,
  GET_POK_DATA_SUCCESS
} from "./actionType";

const initState = {
  pokemonData: [],
  isLoading: false,
  isError: false
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POK_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        pokemonData: []
      };
    case GET_POK_DATA_SUCCESS:
      return {
        ...state,
        pokemonData: action.payload,
        isLoading: false
      };
    case GET_POK_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};
