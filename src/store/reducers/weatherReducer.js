import {
  convertTempToCelcius,
  convertWindDirection,
  updateObject,
} from '../../utility/convertUtility';
import { SET_DATA, SET_ERROR, SET_LOADING } from '../actions/actionTypes';

const initialState = {
  currentTemp: '',
  feelsLikeTemp: '',
  windSpeed: '',
  windDirection: '',
  forecastDaily: null,
  cityName: '',
  isError: false,
  isLoading: true,
};

const setData = data => {
  const updatedData = initialState;
  updatedData.currentTemp = convertTempToCelcius(data.temp);
  updatedData.feelsLikeTemp = convertTempToCelcius(data.feels_temp);
  updatedData.windSpeed = data.wind_speed;
  updatedData.windDirection = convertWindDirection(data.wind_deg);
  updatedData.cityName = data.city;
  return updatedData;
};

const setError = isError => {
  const updatedData = initialState;
  updatedData.isError = isError;
  return updatedData;
};

const setLoading = isLoading => {
  const updatedData = initialState;
  updatedData.isLoading = isLoading;
  return updatedData;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return updateObject(state, setData(action.payLoad));
    case SET_ERROR:
      return setError(action.payLoad);
    case SET_LOADING:
      return updateObject(state, setLoading(action.payLoad));
    default:
      return initialState;
  }
};

export default reducer;