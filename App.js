import React from 'react';
import { NativeBaseProvider, Icon, Text } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './components/home';
import News from './components/NewsDetails';
import Profil from './components/About';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
        iconName = 'home-variant-outline';
          } else if (route.name === 'Praktikum') {
          iconName = 'clipboard-list';
         } else if (route.name === 'About') {
          iconName = 'information-variant';
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
          tabBarIconStyle: { marginTop: 10 }, 
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
        name="Home"
        component={Home}
        options={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarLabel: () => {
         return null;
        },
        }}
      />
     <Tab.Screen
        name="About"
        component={Profil}
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
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name="NewsDetail"
          component={News}
          options={{
            title: 'Detail Berita',
            headerStyle: {
              backgroundColor: '#52ACFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>  
      </NativeBaseProvider>
      );
    };

        export default App;
