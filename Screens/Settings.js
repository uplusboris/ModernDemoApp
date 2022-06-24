import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style={styles.container}>
    <ScrollView contentInsetAdjustmentBehavior='automatic'
        showsVerticalScrollIndicator= {false}>
  <View  style={styles.section}>
      <View style={styles.imageContain}>
          <Image source={{uri: "https://www.ariseiip.com/wp-content/uploads/2021/06/photo22b-scaled.jpg",
 
        }}
        style={styles.infoImage}
        />
      </View>
      <View style= {styles.textContain}>
         <Text style={styles.infoText}>
             Recrutement des operateurs a la PIA : les resultats partiels disponibles.
             les candidat retenus continuerons les activites dans les locaux de PIA  
             dans les jours a venir. ils ont priés a se presenté dans la semaine du 15
             Mai 2022 à 8h00.
         </Text>
         
      </View>
  </View>

  <View  style={styles.section}>
      <View style={styles.imageContain}>
          <Image source={{uri: "https://www.ariseiip.com/wp-content/uploads/2021/06/photo22b-scaled.jpg",
 
        }}
        style={styles.infoImage}
        />
      </View>
      <View style= {styles.textContain}>
         <Text style={styles.infoText}>
             Recrutement des operateurs a la PIA : les resultats partiels disponibles.
             les candidat retenus continuerons les activites dans les locaux de PIA  
             dans les jours a venir. ils ont priés a se presenté dans la semaine du 15
             Mai 2022 à 8h00.
         </Text>
         
      </View>
  </View>

  <View  style={styles.section}>
      <View style={styles.imageContain}>
          <Image source={{uri: "https://www.ariseiip.com/wp-content/uploads/2021/06/photo22b-scaled.jpg",
 
        }}
        style={styles.infoImage}
        />
      </View>
      <View style= {styles.textContain}>
         <Text style={styles.infoText}>
             Recrutement des operateurs a la PIA : les resultats partiels disponibles.
             les candidat retenus continuerons les activites dans les locaux de PIA  
             dans les jours a venir. ils ont priés a se presenté dans la semaine du 15
             Mai 2022 à 8h00.
         </Text>
         
      </View>
  </View>

  <View  style={styles.section}>
      <View style={styles.imageContain}>
          <Image source={{uri: "https://www.ariseiip.com/wp-content/uploads/2021/06/photo22b-scaled.jpg",
 
        }}
        style={styles.infoImage}
        />
      </View>
      <View style= {styles.textContain}>
         <Text style={styles.infoText}>
             Recrutement des operateurs a la PIA : les resultats partiels disponibles.
             les candidat retenus continuerons les activites dans les locaux de PIA  
             dans les jours a venir. ils ont priés a se presenté dans la semaine du 15
             Mai 2022 à 8h00.
         </Text>
         
      </View>
  </View>

  <View  style={styles.section}>
      <View style={styles.imageContain}>
          <Image source={{uri: "https://www.ariseiip.com/wp-content/uploads/2021/06/photo22b-scaled.jpg",
 
        }}
        style={styles.infoImage}
        />
      </View>
      <View style= {styles.textContain}>
         <Text style={styles.infoText}>
             Recrutement des operateurs a la PIA : les resultats partiels disponibles.
             les candidat retenus continuerons les activites dans les locaux de PIA  
             dans les jours a venir. ils ont priés a se presenté dans la semaine du 15
             Mai 2022 à 8h00.
         </Text>
         
      </View>
  </View>

  <View style={styles.section}>
      <View style={styles.imageContain}>
          <Image source={{uri: "https://www.ariseiip.com/wp-content/uploads/2021/06/photo22b-scaled.jpg",
 
        }}
        style={styles.infoImage}
        />
      </View>
      <View style= {styles.textContain}>
         <Text style={styles.infoText}>
             Recrutement des operateurs a la PIA : les resultats partiels disponibles.
             les candidat retenus continuerons les activites dans les locaux de PIA  
             dans les jours a venir. ils ont priés a se presenté dans la semaine du 15
             Mai 2022 à 8h00.
         </Text>
         
      </View>
  </View>
  </ScrollView>
</View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    
},
imageContain:{
    alignSelf: 'center',
    marginTop: -60,
    marginBottom: -60,
},
infoImage:{
    width: 300,
    height: 300,
    resizeMode: 'contain',
    
},
textContain:{
    margin: 20,
},
infoText:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
},
section:{
  backgroundColor: '#e9e9e9',
  borderRadius: 10,
   margin: 15,
    shadowColor: 'black',
    shadowOffset:{
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
},
})