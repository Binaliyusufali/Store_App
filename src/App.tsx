import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import product_data from './store_product.json';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>UKSTORE</Text>
      <TextInput
        style={styles.input}
        placeholder="Aramak istediğiniz ürün?"
        placeholderTextColor={'black'}
      />

      <FlatList
        data={product_data}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abdbe3',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: '#873e23',
    marginTop: 10,
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F7FFF7',
  },
});

export default App;
