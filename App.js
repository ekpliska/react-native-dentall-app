import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PatientScreen from './screens/PatientScreen';

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
		},
		Patient: {
			screen: PatientScreen,
		},
	},
	{
		initialRouteName: 'Home'
	}
);

export default createAppContainer(AppNavigator);