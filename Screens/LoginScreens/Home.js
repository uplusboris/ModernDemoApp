import { StyleSheet, Text, View, Button, Dimensions, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';


const Home = ({navigation}) => {
   
  return (
    <View style={styles.container}>
     <View style={styles.header}>
         
         <View>
          
         </View>
    
     </View>

     <Animatable.View 
     animation= "fadeInUpBig"
     style={styles.footer}>
        <Text style={styles.title}>Restons bien connectez aux programmes de nos facultés !</Text>
        <Text style={styles.text}>Connection</Text>

        <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate('Form')}
               style={styles.signIn}
              >
         
                <Text style={styles.Buton}>S'Inscrire</Text>
                   <MaterialCommunityIcons  name='emoticon-cool'
                     color= "#f6f631"
                     size={28}
                     type='antdesign'
                     style={styles.icons} />
        
            </TouchableOpacity>
        </View>
     </Animatable.View>

     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#2a2146',
},
header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
},
logo:{
    width: 250,
    height: 250,
    borderWidth: 5, 
    borderColor: '#73aff6',
    
},
footer:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
},
title: {
    fontSize: 25,
    fontWeight: 'bold',
},
text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#bdbebd',
},
btn :{
    flex: 1,
    alignItems: 'flex-end',
},
signIn: {
     marginTop: 20,
     width: 150,
     height: 55,
     backgroundColor: '#322652',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 17,
    paddingRight:5,
     borderRadius: 10,
     fontWeight: 'bold',
     fontSize: 18,
     color: '#fff',
     flexDirection: 'row',
     
},
icons:{
    marginTop: -2,
    marginLeft: 10,
    
},
Buton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
},
 

})