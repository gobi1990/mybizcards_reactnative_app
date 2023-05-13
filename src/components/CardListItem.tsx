import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import BusinessCard from '../models/BusinessCard';
import React from 'react';
import {MaterialIcon} from './Icons';
import AppStrings from '../constants/AppStrings';
import {NavigationProp} from '@react-navigation/native';

const cardItemClickHandler = (
  cardItem: BusinessCard,
  navigation: NavigationProp<any>,
) => {
  navigation.navigate('BusinessCard Details', {item: cardItem});
};

interface Props {
  item: BusinessCard;
  navigation: any;
}

type CardListItemProps = {
  item: BusinessCard;
  navigation: NavigationProp<any>;
};

const CardListItem: React.FC<Props> = ({
  item,
  navigation,
}: CardListItemProps): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => cardItemClickHandler(item, navigation)}>
      <View style={[styles.card, styles.elevation]}>
        <Image
          source={{
            uri:
              item.image != null ? item.image : AppStrings.sample_profile_image,
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.occupation}>{item.occupation}</Text>
          <Text style={styles.company}>{item.company}</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialIcon
            size="medium"
            color="black"
            name="cards-heart-outline"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#315476',
    shadowOffset: {width: 2, height: 3},
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  occupation: {
    fontSize: 16,
    color: '#666',
  },
  company: {
    fontSize: 16,
    color: '#666',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 2,
  },
});

export default CardListItem;
