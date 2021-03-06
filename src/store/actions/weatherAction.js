import Geolocation from '@react-native-community/geolocation';
import api from '../../api/openWeatherApi';
import { APP_ID } from '../../configs/locationConfig';
import {
  SET_CITY,
  SET_DATA,
  SET_ERROR,
  SET_LOADING,
  SET_LOCATION,
} from './actionTypes';

export const setLocation = location => ({
  type: SET_LOCATION,
  payLoad: location,
});

export const setData = data => ({
  type: SET_DATA,
  payLoad: data,
});

export const setCityName = cityName => ({
  type: SET_CITY,
  payLoad: cityName,
});

export const setError = isError => ({
  type: SET_ERROR,
  payLoad: isError,
});

export const setLoading = isLoading => ({
  type: SET_LOADING,
  payLoad: isLoading,
});

export const fetchWeatherData = location => {
  return dispatch => {
    if (location) {
      dispatch(setError(false));
      dispatch(setLoading(true));
      api
        .any({
          method: 'GET',
          url: '/data/2.5/onecall',
          params: {
            lat: location.lati,
            lon: location.longi,
            exclude: 'hourly,minutely',
            appid: APP_ID,
          },
        })
        .then(response => {
          const currentData = {};
          currentData.temp = response.data.current.temp;
          currentData.feels_temp = response.data.current.feels_like;
          currentData.wind_speed = response.data.current.wind_speed;
          currentData.wind_deg = response.data.current.wind_deg;
          currentData.daily = response.data.daily;
          currentData.isLoading = false;
          currentData.isError = false;
          dispatch(setData(currentData));
        })
        .catch(error => {
          dispatch(setError(true));
          console.log(error);
        });
    } else {
      dispatch(setError(true));
    }
  };
};

export const fetchCityName = location => {
  return dispatch => {
    if (location) {
      api
        .any({
          method: 'GET',
          url: '/geo/1.0/reverse',
          params: {
            lat: location.lati,
            lon: location.longi,
            limit: 1,
            appid: APP_ID,
          },
        })
        .then(response => {
          const cityName =
            response.data[0].local_names.ascii +
            ', ' +
            response.data[0].country;
          dispatch(setCityName(cityName));
        })
        .catch(error => {
          dispatch(setError(true));
          console.log(error);
        });
    } else {
      dispatch(setError(true));
    }
  };
};

export const fetchLocation = () => {
  return dispatch => {
    dispatch(setLoading(true));
    Geolocation.getCurrentPosition(
      info => {
        const location = {};
        location.lati = info.coords.latitude;
        location.longi = info.coords.longitude;
        dispatch(setLocation(location));
      },
      err => {
        console.log('getCurrentPosition.error', err);
        dispatch(setError(true));
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 3600000,
      },
    );
  };
};
