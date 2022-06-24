import React from 'react';
import ReactNative from 'react-native';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from './Screens/DrawerContent';
import { NavigationContainer } from '@react-navigation/native';
import RootScreen from './Screens/RootScreen/RootScreen';
import Settings from './Screens/Settings';
import Home from './Screens/LoginScreens/Home';
import Form from './Screens/LoginScreens/Form';
import Nav from './Navigator/Nav';
import Lfrii from './Screens/Lfrii';
import Formation from './Screens/Formation';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Ddd () {
  return(
    <View>
      
    <Drawer.Navigator  initialRouteName= 'Lfrii'
     drawerContent={props => <DrawerContent{...props}  />}
       screenOptions={{ 
           drawerStyle:{ 
           width: 300,
         },
       }}
      
      >
        <Drawer.Screen name='Lfrii' component={Lfrii} options={{
          title: "Yop L'Frii",
          headerStyle: {
           backgroundColor: '#4a9bd4',
           
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
         },
        }}
        
        />
        
        <Drawer.Screen name='Settings' component={Settings}/>
         
      </Drawer.Navigator>
      
    </View>
  );
}

 function App() {  
  return (
    
    <NavigationContainer>
     {/*
       */}

<Stack.Navigator>
   
   <Stack.Screen name="Home" component={Home} options={{ headerShown: false,}} />

   <Stack.Screen name="Form" component={Form} options={{headerShown: false,}} />

   <Stack.Screen name="Lfrii" component={Ddd }  />
   
</Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

export default App