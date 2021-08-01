import {
  convertTempToCelcius,
  convertWindDirection,
  updateObject,
} from '../../utility/convertUtility';
import {
  SET_CITY,
  SET_DATA,
  SET_ERROR,
  SET_LOADING,
  SET_LOCATION,
} from '../actions/actionTypes';

const initialState = {
  location: null,
  currentTemp: '',
  feelsLikeTemp: '',
  windSpeed: '',
  windDirection: '',
  forecastDaily: [],
  cityName: '',
  isError: false,
  isLoading: true,
};

const setLocation = location => {
  const updatedData = initialState;
  updatedData.location = location;
  return updatedData;
};

const setData = data => {
  const updatedData = initialState;
  updatedData.currentTemp = convertTempToCelcius(data.temp);
  updatedData.feelsLikeTemp = convertTempToCelcius(data.feels_temp);
  updatedData.windSpeed = data.wind_speed;
  updatedData.windDirection = convertWindDirection(data.wind_deg);
  updatedData.forecastDaily = data.daily;
  updatedData.isLoading = data.isLoading;

  return updatedData;
};

const setCityName = city => {
  const updatedData = initialState;
  updatedData.cityName = city;
  return updatedData;
};

const setError = isError => {
  const updatedData = initialState;
  updatedData.isError = isError;
  updatedData.isLoading = false;
  return updatedData;
};

const setLoading = isLoading => {
  const updatedData = initialState;
  updatedData.isLoading = isLoading;
  return updatedData;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return updateObject(state, setLocation(action.payLoad));
    case SET_DATA:
      return updateObject(state, setData(action.payLoad));
    case SET_CITY:
      return updateObject(state, setCityName(action.payLoad));
    case SET_ERROR:
      return setError(action.payLoad);
    case SET_LOADING:
      return updateObject(state, setLoading(action.payLoad));
    default:
      return initialState;
  }
};

export default reducer;
