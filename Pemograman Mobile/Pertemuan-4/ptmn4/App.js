
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import TabNavigator from './navigation/TabNavigator';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const currentRoute =
    props.state.routes[props.state.index];

  const nestedState = currentRoute.state;
  const activeTab =
    nestedState?.routes?.[nestedState.index]?.name || 'Home';

  const navigateToTab = (screen) => {
    props.navigation.navigate('Main', {
      screen,
    });

    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Beranda"
        focused={activeTab === 'Home'}
        activeTintColor="#6C63FF"
        inactiveTintColor="#252A34"
        labelStyle={{
          fontSize: 14,
          fontWeight: '600',
        }}
        icon={() => <Text style={{ fontSize: 20 }}>🏠</Text>}
        onPress={() => navigateToTab('Home')}
      />

      <DrawerItem
        label="Profil"
        focused={activeTab === 'Profile'}
        activeTintColor="#6C63FF"
        inactiveTintColor="#252A34"
        labelStyle={{
          fontSize: 14,
          fontWeight: '600',
        }}
        icon={() => <Text style={{ fontSize: 20 }}>👤</Text>}
        onPress={() => navigateToTab('Profile')}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerContent={(props) => (
          <CustomDrawerContent {...props} />
        )}
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#252A34',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          drawerActiveTintColor: '#6C63FF',
          drawerLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          drawerStyle: {
            width: 280,
          },
        }}
      >
        <Drawer.Screen
          name="Main"
          component={TabNavigator}
          options={{
            title: 'Home',
            drawerLabel: 'Menu',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}