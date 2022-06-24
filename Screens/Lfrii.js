import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import categuoriesData from '../assets/data/categuoriesData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import flashInfoData from '../assets/data/flashInfoData';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Lfrii = () => {

    const renderCateguoryItem = ({item}) => {
        return(
            <View style={styles.categuoriesContain} >
                <View>
                    <Image source={item.image} style={styles.categoriesImage} />
                </View>
                <View>
                    <Text style={styles.categuoriesTitle} >{item.title} </Text>
                </View>
                <View>
                    <Text style={styles.categuoriesPara}>{item.paragraphe} </Text>
                </View>
                <View style={styles.categuoriesIconsCont}>
                   <MaterialCommunityIcons name='arrow-right-thick' 
                   size={25} 
                   color={'#fff'}
                   style={styles.categuoriesIcons} />
                </View>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior='automatic'
            showsVerticalScrollIndicator= {false}>

                <View>
                    <FlatList
                      data={categuoriesData}
                      renderItem={renderCateguoryItem}
                      keyExtractor={item => item.id}
                      horizontal={true}
                    />
                </View>
      <View  style={styles.section}>
          <View style={styles.imageContain}>
              <Image source={{uri: "https://www.ariseiip.com/wp-content/uploads/2021/06/photo22b-scaled.jpg",
     
            }}
            style={styles.infoImage}
            />
          </View>
          <View style= {styles.textContain}>
              <Text style= {styles.textContainTitle}>Titre 1 </Text>
             <View style={{borderBottomColor: '#c7c7c7',
              borderBottomWidth: 2,
              marginBottom: 10,
              paddingBottom: 5,
              }}>
                <Text style={styles.infoText}>
                    Recrutement des operateurs a la PIA : les resultats partiels disponibles.
                    les candidat retenus continuerons les activites dans les locaux de PIA  
               </Text>
             </View>

             <View style={styles.etatDate}>
                 <View style={styles.dateContain}>
                     <Text style={styles.date}> Vendredi 20 aout 2022</Text>
                 </View>
                 <View>
                     <Text style={styles.infoGeo}>ses évènements se passe a ADETIKOPE au</Text>
                     <Text style={{
                         marginLeft: 10,
                         fontSize: 12,
                     }}>TOGO</Text>
                 </View>
             </View>

             <TouchableOpacity>
             <View style={styles.plusInfo}>
                 <View style={{
                     paddingRight: 10,
                     borderRightColor: '#c7c7c7',
                     borderRightWidth: 2,
                     paddingTop: 5,
                 }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'red',
                        alignItems: 'center',
                        paddingTop: 10,
                        borderRadius: 30,
                        
                    }}>
                        <MaterialCommunityIcons name='book-open-page-variant' size={25} 
                        color={'#e3e3e3'}
                        />
                    </View>
                 </View>
                    <View style={{
                          marginLeft: 10,
                          alignItems: 'center',
                          paddingRight: 50,
                     }}>

                       <Text style={{
                           color: 'blue',
                           fontSize: 15,
                           fontWeight: 'bold',
                       }}>Pour plus de détails veuillez cliquez!</Text>

                       
                  </View>
                
                </View>
             </TouchableOpacity>
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
              <Text style= {styles.textContainTitle}>Titre 1 </Text>
             <View style={{borderBottomColor: '#c7c7c7',
              borderBottomWidth: 2,
              marginBottom: 10,
              paddingBottom: 5,
              }}>
                <Text style={styles.infoText}>
                    Recrutement des operateurs a la PIA : les resultats partiels disponibles.
                    les candidat retenus continuerons les activites dans les locaux de PIA  
               </Text>
             </View>

             <View style={styles.etatDate}>
                 <View style={styles.dateContain}>
                     <Text style={styles.date}> Vendredi 20 aout 2022</Text>
                 </View>
                 <View>
                     <Text style={styles.infoGeo}>ses évènements se passe a ADETIKOPE au</Text>
                     <Text style={{
                         marginLeft: 10,
                         fontSize: 12,
                     }}>TOGO</Text>
                 </View>
             </View>

             <TouchableOpacity>
             <View style={styles.plusInfo}>
                 <View style={{
                     paddingRight: 10,
                     borderRightColor: '#c7c7c7',
                     borderRightWidth: 2,
                     paddingTop: 5,
                 }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'red',
                        alignItems: 'center',
                        paddingTop: 10,
                        borderRadius: 30,
                        
                    }}>
                        <MaterialCommunityIcons name='book-open-page-variant' size={25} 
                        color={'#e3e3e3'}
                        />
                    </View>
                 </View>
                    <View style={{
                          marginLeft: 10,
                          alignItems: 'center',
                          paddingRight: 50,
                     }}>

                       <Text style={{
                           color: 'blue',
                           fontSize: 15,
                           fontWeight: 'bold',
                       }}>Pour plus de détails veuillez cliquez!</Text>

                       
                  </View>
                
                </View>
             </TouchableOpacity>
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
              <Text style= {styles.textContainTitle}>Titre 1 </Text>
             <View style={{borderBottomColor: '#c7c7c7',
              borderBottomWidth: 2,
              marginBottom: 10,
              paddingBottom: 5,
              }}>
                <Text style={styles.infoText}>
                    Recrutement des operateurs a la PIA : les resultats partiels disponibles.
                    les candidat retenus continuerons les activites dans les locaux de PIA  
               </Text>
             </View>

             <View style={styles.etatDate}>
                 <View style={styles.dateContain}>
                     <Text style={styles.date}> Vendredi 20 aout 2022</Text>
                 </View>
                 <View>
                     <Text style={styles.infoGeo}>ses évènements se passe a ADETIKOPE au</Text>
                     <Text style={{
                         marginLeft: 10,
                         fontSize: 12,
                     }}>TOGO</Text>
                 </View>
             </View>

             <TouchableOpacity>
             <View style={styles.plusInfo}>
                 <View style={{
                     paddingRight: 10,
                     borderRightColor: '#c7c7c7',
                     borderRightWidth: 2,
                     paddingTop: 5,
                 }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'red',
                        alignItems: 'center',
                        paddingTop: 10,
                        borderRadius: 30,
                        
                    }}>
                        <MaterialCommunityIcons name='book-open-page-variant' size={25} 
                        color={'#e3e3e3'}
                        />
                    </View>
                 </View>
                    <View style={{
                          marginLeft: 10,
                          alignItems: 'center',
                          paddingRight: 50,
                     }}>

                       <Text style={{
                           color: 'blue',
                           fontSize: 15,
                           fontWeight: 'bold',
                       }}>Pour plus de détails veuillez cliquez!</Text>

                       
                  </View>
                
                </View>
             </TouchableOpacity>
           </View>
      </View>

    
    
      {flashInfoData.map ((item)=>(
          <View>
              <View style= {styles.flashContain}>
                  <View>
                      <Image source={item.image} style={styles.flashImage} />
                  </View>
                  <View style= {styles.flashTextCont}>
                      <Text style={styles.flashTitle}> {item.title} </Text>
                      <Text style={styles.flashPara}> {item.paragraphe} </Text>
                  </View>
              </View>
          </View>
      ) )}



<View  style={styles.section}>
          <View style={styles.imageContain}>
              <Image source={{uri: "https://www.ariseiip.com/wp-content/uploads/2021/06/photo22b-scaled.jpg",
     
            }}
            style={styles.infoImage}
            />
          </View>
          <View style= {styles.textContain}>
              <Text style= {styles.textContainTitle}>Titre 1 </Text>
             <View style={{borderBottomColor: '#c7c7c7',
              borderBottomWidth: 2,
              marginBottom: 10,
              paddingBottom: 5,
              }}>
                <Text style={styles.infoText}>
                    Recrutement des operateurs a la PIA : les resultats partiels disponibles.
                    les candidat retenus continuerons les activites dans les locaux de PIA  
               </Text>
             </View>

             <View style={styles.etatDate}>
                 <View style={styles.dateContain}>
                     <Text style={styles.date}> Vendredi 20 aout 2022</Text>
                 </View>
                 <View>
                     <Text style={styles.infoGeo}>ses évènements se passe a ADETIKOPE au</Text>
                     <Text style={{
                         marginLeft: 10,
                         fontSize: 12,
                     }}>TOGO</Text>
                 </View>
             </View>

             <TouchableOpacity>
             <View style={styles.plusInfo}>
                 <View style={{
                     paddingRight: 10,
                     borderRightColor: '#c7c7c7',
                     borderRightWidth: 2,
                     paddingTop: 5,
                 }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'red',
                        alignItems: 'center',
                        paddingTop: 10,
                        borderRadius: 30,
                        
                    }}>
                        <MaterialCommunityIcons name='book-open-page-variant' size={25} 
                        color={'#e3e3e3'}
                        />
                    </View>
                 </View>
                    <View style={{
                          marginLeft: 10,
                          alignItems: 'center',
                          paddingRight: 50,
                     }}>

                       <Text style={{
                           color: 'blue',
                           fontSize: 15,
                           fontWeight: 'bold',
                       }}>Pour plus de détails veuillez cliquez!</Text>

                       
                  </View>
                
                </View>
             </TouchableOpacity>
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
              <Text style= {styles.textContainTitle}>Titre 1 </Text>
             <View style={{borderBottomColor: '#c7c7c7',
              borderBottomWidth: 2,
              marginBottom: 10,
              paddingBottom: 5,
              }}>
                <Text style={styles.infoText}>
                    Recrutement des operateurs a la PIA : les resultats partiels disponibles.
                    les candidat retenus continuerons les activites dans les locaux de PIA  
               </Text>
             </View>

             <View style={styles.etatDate}>
                 <View style={styles.dateContain}>
                     <Text style={styles.date}> Vendredi 20 aout 2022</Text>
                 </View>
                 <View>
                     <Text style={styles.infoGeo}>ses évènements se passe a ADETIKOPE au</Text>
                     <Text style={{
                         marginLeft: 10,
                         fontSize: 12,
                     }}>TOGO</Text>
                 </View>
             </View>

             <TouchableOpacity>
             <View style={styles.plusInfo}>
                 <View style={{
                     paddingRight: 10,
                     borderRightColor: '#c7c7c7',
                     borderRightWidth: 2,
                     paddingTop: 5,
                 }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'red',
                        alignItems: 'center',
                        paddingTop: 10,
                        borderRadius: 30,
                        
                    }}>
                        <MaterialCommunityIcons name='book-open-page-variant' size={25} 
                        color={'#e3e3e3'}
                        />
                    </View>
                 </View>
                    <View style={{
                          marginLeft: 10,
                          alignItems: 'center',
                          paddingRight: 50,
                     }}>

                       <Text style={{
                           color: 'blue',
                           fontSize: 15,
                           fontWeight: 'bold',
                       }}>Pour plus de détails veuillez cliquez!</Text>

                       
                  </View>
                
                </View>
             </TouchableOpacity>
           </View>
      </View>

      
      </ScrollView>
    </View>
  )
}

export default Lfrii

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        
    },
    imageContain:{
        borderRadius: 10,
        marginTop: -58,
        marginBottom: -60,
        
    },
    infoImage:{
        width: 330,
        height: 300,
        borderRadius: 15,
        resizeMode: 'contain',
        
    },
    textContain:{
        margin: 20,
    },
    textContainTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoText:{
        textAlign: 'justify',
        fontSize: 15,
        
    },
    section:{
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 15,
        
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    etatDate: {
        flexDirection: 'row',
    },
    dateContain:{
        width: 60,
        height: 50,
        resizeMode: 'contain',
        borderRightColor: '#c7c7c7',
        borderRightWidth: 2,
        marginRight: 5,
        
    },
    date:{
        fontSize: 12,
        paddingRight: 5,
    },
    infoGeo:{
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 30,
        marginLeft: 10,
        color: '#313131',
    },
    plusInfo:{
        flexDirection: 'row',
        borderBottomColor: '#c7c7c7',
        borderTopColor: '#c7c7c7',
        borderBottomWidth: 2,
        marginBottom: 10,
        paddingBottom: 5,
        borderTopWidth: 2,
        marginTop: 10,
        paddingTop: 5,
    },
    categuoriesContain:{
        backgroundColor: '#F5CA48',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        height: 350,
        width: 250,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset:{
            width: 0,
            height:2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    categoriesImage:{
        width: 200,
        height: 100,
        margin: 10,
    },
    categuoriesTitle:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    categuoriesPara:{
        fontSize: 15,
        textAlign: 'justify',
        margin: 10,
    },
    categuoriesIconsCont:{
        backgroundColor: 'red',
        width: 50,
        height: 50,
        marginTop: 15,
        borderRadius: 30,
    },
    categuoriesIcons:{
        alignSelf: 'center',
        paddingTop: 12,
    },
    flashContain: {
        flexDirection: 'row',
    },
    flashImage:{
        width: 150,
        height: 150,
        margin: 10,
    },
    flashTitle:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    flashPara:{
        marginRight: 10,
        paddingRight: 150,
        textAlign: 'left',
    },
    flashTextCont: {
        borderColor: 'black',
        marginRight: 10,
    },
})