import {
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_TEXT,
  SUBMIT_BTN,
  RESET_BTN,
  RANDOM_BTN,
  GET_ASTROID_DETAILS,
  GET_ASTROID_LIST,
} from './action';
import { random } from 'lodash';

const initialState = {
  loader: false,
  searchText: '',
  astroidList: [],
  selectedAstroidDetails: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, loader: true };

    case HIDE_LOADER:
      return { ...state, loader: false };

    case SEARCH_TEXT:
      return { ...state, searchText: payload };

    case SUBMIT_BTN:
      return { ...state };

    case RANDOM_BTN: {
      const randomId = random(0, 19);
      return { ...state, selectedAstroidDetails: state.astroidList[randomId] };
    }

    case RESET_BTN:
      return {
        ...state,
        loader: false,
        searchText: '',
        astroidList: [],
        selectedAstroidDetails: {},
      };

    case GET_ASTROID_LIST:
      return { ...state, astroidList: payload.near_earth_objects };

    case GET_ASTROID_DETAILS:
      return { ...state, selectedAstroidDetails: payload };

    default:
      return state;
  }
};

export default reducer;
