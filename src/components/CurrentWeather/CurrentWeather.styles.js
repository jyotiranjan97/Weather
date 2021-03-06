import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tempContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: '10%',
  },
  tempText: {
    fontSize: 60,
  },
  additionalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  feelsLikeContainer: {
    flexDirection: 'column',
    width: '40%',
    alignItems: 'center',
  },
  windContainer: {
    flexDirection: 'column',
    width: '40%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    color: 'grey',
  },
  valuesText: {
    fontSize: 22,
  },
});

export default styles;
