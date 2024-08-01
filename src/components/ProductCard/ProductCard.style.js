import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#DEE2EC',
    margin: 10,
    borderRadius: 10,
    width: 160,
  },
  image: {
    height: 160,
    width: 140,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'gray',
    margin: 10,
  },
  inStock: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
    margin: 10,
  },
});
