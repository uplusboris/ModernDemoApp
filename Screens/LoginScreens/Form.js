import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Form = ({navigation}) => {

 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.textHeader}>Bienvenu sur Modern!</Text>
      </View>

      <Animatable.View
      animation= "fadeInUpBig"
      style={styles.footer}>
         <Text style={styles.textFooter}>Nom</Text>
         <View style={styles.action}>
             
                <MaterialCommunityIcons
                  name='account-outline'
                   color="black"
                   size={20}
                />
               <TextInput
               placeholder="Nom d'utilisateur"
               onChangeText={(val) =>textInputChange()}
               style={styles.textInput}
              />
               <MaterialCommunityIcons
                  name='check-circle-outline'
                   color='#73aff6'
                   size={20}
                />
                
         </View>

         <Text style={styles.textFooter}>Email</Text>
         <View style={styles.action}>
             
                <MaterialCommunityIcons
                  name='email'
                   color="black"
                   size={20}
                />
               <TextInput
               placeholder='votre email!'
               onChangeText={(val) =>textInputChange()}
               style={styles.textInput}
              />
               <MaterialCommunityIcons
                  name='check-circle-outline'
                   color='#73aff6'
                   size={20}
                />
                
         </View>

         <Text style={[styles.textFooter , {marginTop: 25}]}>Mot de passe</Text>
         <View style={styles.action}>
             
                <MaterialCommunityIcons
                  name='lock'
                   color="black"
                   size={20}
                />
               <TextInput
               placeholder='Mot de passe'
               secureTextEntry={true}
               style={styles.textInput}
              />
               <MaterialCommunityIcons
                  name='eye-off-outline'
                   color='#73aff6'
                   size={20}
                />
         </View>
            <Text style={styles.textFooter}>Numero de tel</Text>
         <View style={styles.action}>
             
             <MaterialCommunityIcons
               name= 'cellphone'
                color="black"
                size={20}
             />
            <TextInput
            placeholder='Mot de passe'
            keyboardType = 'numeric'
            style={styles.textInput}
           />
            <MaterialCommunityIcons
               name='cellphone-lock'
                color='#73aff6'
                size={20}
             />
      </View>

      <View style={styles.btn}>
             <TouchableOpacity onPress={() =>navigation.openDrawer() }
               style={styles.signIn}
                >
         
                <Text style={styles.Buton}>Entrer</Text>
                   <MaterialCommunityIcons  name='arrowright'
                     color="white"
                     size={18}
                     type='antdesign'
                     style={styles.icons} />
        
            </TouchableOpacity>
      </View>
      </Animatable.View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#2a2146',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer:{
  flex: 3,
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 30,
  },
  textHeader:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  action:{
    flexDirection: 'row',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#05375a',
    marginBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  textFooter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
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
    marginTop: 5,
    marginLeft: 5,
},
Buton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
},
 
})