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

import {
  getAstroidDetailsUrl,
  getAstroidListUrl,
} from '../services/astroidServices';

// Show Loader action
export const showLoaderAction = () => {
  return {
    type: SHOW_LOADER,
  };
};

// Hide Loader action
export const hideLoaderActioin = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const searchTextAction = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_TEXT,
      payload: payload,
    });
  };
};

export const submitBtnAction = () => {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_BTN,
    });
  };
};

export const randomBtnAction = () => {
  return (dispatch) => {
    dispatch({
      type: RANDOM_BTN,
    });
  };
};

export const resetBtnAction = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_BTN,
    });
  };
};

// Get Astoid Lists

export const getAstroidListAction = () => {
  return (dispatch) => {
    dispatch(showLoaderAction());
    getAstroidListUrl()
      .then((response) => {
        dispatch(hideLoaderActioin());
        dispatch({
          type: GET_ASTROID_LIST,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(hideLoaderActioin());
        alert('Something Went Wrong while Fetching Astroid List !!!');
      });
  };
};

// Get Astroid details payload is be astriod id

export const getAstroidDetialsAction = (payload) => {
  return (dispatch) => {
    dispatch(showLoaderAction());
    getAstroidDetailsUrl(payload)
      .then((response) => {
        dispatch(hideLoaderActioin());
        dispatch({
          type: GET_ASTROID_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(hideLoaderActioin());
        alert('Astroid Details not Found. Please try Another ID !!!');
      });
  };
};
