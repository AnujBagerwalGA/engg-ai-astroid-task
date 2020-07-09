import axios from 'axios';
import { api_Key } from '../constains/apiKey';

export const getAstroidListUrl = () => {
  return axios.get(
    `${process.env.REACT_APP_GET_ASTROID_URL}/browse?api_key=${api_Key}`
  );
};

export const getAstroidDetailsUrl = (payload) => {
  return axios.get(
    `${process.env.REACT_APP_GET_ASTROID_URL}/${payload}?api_key=${api_Key}`
  );
};
