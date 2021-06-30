import React, { useEffect } from 'react';
// import { BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EventPlan from './EventPlan';
import Profile from './Profile';
import ReferUI from './ReferUI';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='Eventplan'
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#fff',
        showLabel: false,
        style: {
          backgroundColor: '#009387',
        },
      }}
    >
      <Tab.Screen
        name='Eventplan'
        component={EventPlan}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='ReferCode'
        component={ReferUI}
        options={{
          tabBarLabel: 'Refer',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='users' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
