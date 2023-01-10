import React, { Component } from 'react';
import { NativeBaseProvider, Icon, Text} from 'native-base' ; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { Navigationcontainer } from '@react-navigation/native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Home from './page/home'; 
import News from './page/NewsDetails.js';
import Profil from './page/about';


const Tab = createBottomTabNavigator(); 
const Stack = createNativeStackNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator 
    screenoptions={({ route }) => ({ 
      tabBarIcon: ({ focused, color, size }) => {
        let iconName; 
        if (route.name === 'Home' ) { 
          iconName = 'home-variant-outline';
         } else if (route.name === 'About') { 
           iconName = ' information-variant '
         }
         return (
            <Icon 
            as={MaterialCommunityIcons}
            name={iconName}
            size={30}
          	color={focused ? 'primary.600' : '#6E8FAD'}
            />
            );
           },
          tabBarIconStyle : { marginTop: 10 }, 
          tabBarLabel: ({ children, color, focused } ) => { 
            return (
	        <Text color={focused ? 'primary.600' : color} mb={2}>
          {children}
          </Text>
            );  
          },
        tabBarStyle: { 
          height: 50,
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen
        name='Home'
        Component={Home}
        options={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarLabel: () => {
         return null;
        },
        }}
      />
     <Tab.Screen
        name='About'
        Component={Profil}
        options={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarLabel: () => {
         return null;
        },
      }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
      return (
        <NativeBaseProvider>
        <Navigationcontainer>
        <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigator"
          Component={BottomNavigator}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name="NewsDetail"
          Component={News}
          options={{
            tittle: 'Detail Berita',
            headerStyle: {
              backgroundcolor: '#52ACFF',
            },
            headerTintColor: '#fff',
            headerTintStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        </Stack.Navigator>
      </Navigationcontainer>
      </NativeBaseProvider>
      );
    };

        export default App;
