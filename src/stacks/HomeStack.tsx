import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard';
import Stats from '../screens/stats';
import Calendar from '../screens/calendar';
import User from '../screens/user';
import {Image} from 'react-native';
import DashboardIcon from '../assets/dashboard.png';
import StatsIcon from '../assets/graph.png';
import CalendarIcon from '../assets/calendar.png';
import UserIcon from '../assets/user.png';

const Tab = createBottomTabNavigator();

const renderIcon = (route: any, color: any, size: any) => {
  let iconName;

  switch (route.name) {
    case 'Dashboard':
      iconName = DashboardIcon;
      break;
    case 'Stats':
      iconName = StatsIcon;
      break;
    case 'Calendar':
      iconName = CalendarIcon;
      break;
    case 'User':
      iconName = UserIcon;
      break;
    default:
      iconName = UserIcon;
  }

  return (
    <Image
      source={iconName}
      style={{width: size, height: size, tintColor: color}}
    />
  );
};

export default function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 90,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
        tabBarIcon: ({color, size}) => renderIcon(route, color, size),
        tabBarLabel: () => null,
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
