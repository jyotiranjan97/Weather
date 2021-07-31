import { SET_DATA, SET_ERROR, SET_LOADING } from './actionTypes';

export const setData = data => ({
  type: SET_DATA,
  payLoad: data,
});

export const setError = isError => ({
  type: SET_ERROR,
  payLoad: isError,
});

export const setLoading = isLoading => ({
  type: SET_LOADING,
  payLoad: isLoading,
});
