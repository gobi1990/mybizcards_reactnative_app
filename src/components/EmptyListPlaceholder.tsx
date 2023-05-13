import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyListPlaceholder: React.FC = (): JSX.Element => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Opps! Business Card List is empty</Text>
    </View>
  );
};

export default EmptyListPlaceholder;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
