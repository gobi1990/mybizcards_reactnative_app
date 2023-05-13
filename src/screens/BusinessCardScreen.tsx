import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Text,
} from 'react-native';
import BusinessCard from '../models/BusinessCard';

import AppStrings from '../constants/AppStrings';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: BusinessCardScreenRouteProp;
};

type RootStackParamList = {
  'BusinessCard Details': {item: BusinessCard};
};

type BusinessCardScreenRouteProp = RouteProp<
  RootStackParamList,
  'BusinessCard Details'
>;

const BusinessCardScreen: React.FC<Props> = ({route}: Props) => {
  const {item} = route.params;
  return (
    <ScrollView>
      <View style={styles.header} />
      <Image
        style={styles.avatar}
        source={{
          uri:
            item?.image != null ? item?.image : AppStrings.sample_profile_image,
        }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{item != null ? item.name : 'name'}</Text>
          <Text style={styles.occupation}>
            {item != null ? item.occupation : 'occupation'}
          </Text>
          <Text style={styles.company}>{item?.company}</Text>
          <View style={styles.info}>
            <Text style={styles.email}>{item?.email}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.phone}>{item?.phone}</Text>
          </View>
          <View style={styles.info}>
            <TouchableOpacity onPress={() => Linking.openURL(item?.linkedUrl)}>
              <Text style={styles.linkedinUrl}>{item?.linkedUrl}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  occupation: {
    fontSize: 16,
    color: '#666',
  },
  company: {
    fontSize: 16,
    color: '#666',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  phone: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  linkedinUrl: {
    fontSize: 16,
    color: '#0077B5',
    marginLeft: 10,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
});

export default BusinessCardScreen;
