import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Index from '../LoginScreens/Home';
import Form from '../LoginScreens/Form';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const RootScreen = ({Navigation}) => {
  return (
    <View>
     <NavigationContainer>
         
      <Stack.Navigator>

             <Stack.Screen name="Index" component={Index} options={
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


      </Stack.Navigator>
     </NavigationContainer>
    </View>
  )
}

export default RootScreen

const styles = StyleSheet.create({})