import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from '../screens/BusinessCardListScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Color} from '@react-native-material/core';
import {MaterialIcon} from '../components/Icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddCardScreen from '../screens/AddCardScreen';
import AppStrings from '../constants/AppStrings';
import BusinessCardScreen from '../screens/BusinessCardScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BusinessCardsStackScreens = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}>
    <Stack.Screen name="BusinessCardList" component={ListScreen} />
    <Stack.Screen name="Create BusinessCard" component={AddCardScreen} />
    <Stack.Screen name="BusinessCard Details" component={BusinessCardScreen} />
  </Stack.Navigator>
);

const screenOptions = (route: any, color: Color) => {
  let iconName = '';

  switch (route.name) {
    case 'BusinessCards':
      iconName = AppStrings.icon_list_view;
      break;
    case 'Favorites':
      iconName = AppStrings.icon_favourite;
      break;
    default:
      break;
  }

  return <MaterialIcon name={iconName} color={color} size={'medium'} />;
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="BusinessCards"
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOptions(route, color),
          headerTitleAlign: 'center',
        })}>
        <Tab.Screen
          name="BusinessCards"
          component={BusinessCardsStackScreens}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
