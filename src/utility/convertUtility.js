/* eslint-disable curly */
export const convertTempToCelcius = kelvinTemp => {
  return Math.floor(kelvinTemp - 273.15);
};

export const convertWindDirection = deg => {
  if (deg === 0 || deg === 360) return 'N';
  else if (deg < 90 && deg > 0) return 'NE';
  else if (deg === 90) return 'E';
  else if (deg > 90 && deg < 180) return 'SE';
  else if (deg === 180) return 'S';
  else if (deg > 180 && deg < 270) return 'SW';
  else if (deg === 270) return 'W';
  else return 'NW';
};

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
