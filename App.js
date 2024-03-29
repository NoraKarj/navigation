import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native';
import SecondScreen from './SecondScreen';
import HomeScreen from './HomeScreen';
import React from 'react';
import 'react-native-gesture-handler';


export default function App() {

const Stack = createNativeStackNavigator();


  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      option={{      
          title: 'Home',
          headerTitle: 'Home',

      }}
      />
      <Stack.Screen
      name='Second'
      component={SecondScreen}
      option={{
        title: 'Second',
        headerTitle: 'Second'
      }}
      />
   </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
