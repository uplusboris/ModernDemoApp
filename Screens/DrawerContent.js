import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'; 
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';




export function DrawerContent(props){
    return(
        <View style={{flex:1}}>
           <DrawerContentScrollView>
               <View style={styles.headerBorder}>
               <ImageBackground source={require("../assets/images/bgg.png")} 
               style={styles.headerBg}>
                    
                    <Image source={require("../assets/images/logo.png")} style={styles.profil} />
                     <Text style={styles.name}>Yop L' FRII</Text>
               </ImageBackground>
               </View>
    
          <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size})=>(
                    <MaterialCommunityIcons
                    name="home-city"
                    color={color}
                    size={size} />
                )}
                label="Acceuil"
                onPress={() => {props.navigation.navigate('Lfrii')}}
                
              />


             <DrawerItem
                icon={({color, size})=>(
                    <MaterialCommunityIcons
                    name="chart-pie"
                    color={color}
                    size={size} />
                )}
                label="Les Offres"
                onPress={() => {props.navigation.navigate('Settings')}}
              />
              
              <DrawerItem
                icon={({color, size})=>(
                    <MaterialCommunityIcons
                    name="certificate-outline"
                    color={color}
                    size={size} />
                )}
                label="Formations et Concours"
                onPress={() => {props.navigation.navigate ('')}}
              />
              
              <DrawerItem
                icon={({color, size})=>(
                    <MaterialCommunityIcons
                    name="charity"
                    color={color}
                    size={size} />
                )}
                label="Astuces"
                onPress={() => {}}
              />
               <DrawerItem
                icon={({color, size})=>(
                    <MaterialCommunityIcons
                    name="chart-multiple"
                    color={color}
                    size={size} />
                )}
                label="Conseils"
                onPress={() => {}}
              />

               <DrawerItem
                icon={({color, size})=>(
                    <MaterialCommunityIcons
                    name="account-tie-voice"
                    color= {color}
                     size={size} />
                )}
                label="Contacts"
                onPress={() => {}}
                
              />

          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
                
          <DrawerItem
                icon={({color, size})=>(
                    <Icon
                    name="person-add-outline"
                    color= {color}
                     size={size} />
                )}
                label="invité des amis"
                onPress={() => {}}
                
              />
       
            <DrawerItem
                icon={({color, size})=>(
                    <Icon
                    name="ios-bulb-outline"
                    color= {color}
                     size={size} />
                )}
                label="Faire un Don"
                onPress={() => {}}
                
              />

          </Drawer.Section>
           </DrawerContentScrollView>

         
          
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    headerBorder:{
        
    },
    headerBg:{
        width: undefined,
        padding: 16,
        paddingTop: 60,
    },
    profil:{
        width: 160,
        height: 70,
        alignSelf: 'center',
    },
    drawerSection:{
        marginTop: 0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
     },
    
    name:{
       fontWeight: 'bold',
       alignSelf: 'center',
    },
});

