import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
React;

interface Props {
  navigation: any;
}

const FavoritesScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
