import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header akan dibuat oleh Drawer
        headerShown: false,

        tabBarActiveTintColor: '#6C63FF',
        tabBarInactiveTintColor: '#9CA3AF',

        tabBarStyle: {
          height: 65,
          paddingTop: 7,
          paddingBottom: 8,

          backgroundColor: '#FFFFFF',

          borderTopWidth: 0,

          elevation: 10,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >

      {/* ================= HOME ================= */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Beranda',

          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 22 }}>
              {focused ? '🏠' : '⌂'}
            </Text>
          ),
        }}
      />

      {/* ================= PROFILE ================= */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profil',

          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 22 }}>
              {focused ? '👤' : '○'}
            </Text>
          ),
        }}
      />

    </Tab.Navigator>
  );
}