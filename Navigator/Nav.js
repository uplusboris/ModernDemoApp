import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../Screens/DrawerContent';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/LoginScreens/Home';
import Form from '../Screens/LoginScreens/Form';
import Lfrii from '../Screens/Lfrii';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Nav = () => {
  return (
    <View>
     
    
     <Stack.Navigator>
   
   <Stack.Screen name="Home" component={Home} options={
      {
        headerShown: false,
      }
    } 
   />

  <Stack.Screen name="Form" component={Form} options={
      {
         headerShown: false,
      }
    } 
   />

<Stack.Screen name="Nav" component={Nav} options={
      {
         headerShown: false,
      }
    } 
   />

</Stack.Navigator>
     
   
         
        
       
    </View>
  )
}

export default Nav

const styles = StyleSheet.create({})