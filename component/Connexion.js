import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View,StyleSheet, StatusBar,Image ,TextInput} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Connexion =({navigation})=> {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} />
        <View style={{flex: 1}}>
            <View style={{flex: 2,justifyContent: 'center',alignItems: 'center'}}>
                <View style={styles.containerImage}>
                    <Image source={require('../assets/logo_uac2.png')} resizeMode="cover" style={styles.image}/>
                </View>
            </View>
            <View style={{flex:2,flexDirection:'column',alignItems:'center'}}>
                <View style={{}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Bienvenue ici</Text>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <TextInput style={styles.input}  placeholder={'Your Username'}/>
                </View>
                <View style={{marginHorizontal: 10,}}>
                    <TextInput style={styles.input}  placeholder={'Your Password'}/>
                </View>
                <View style={{flexDirection:'row',marginTop: 6}}>
                    <View style={{flexDirection:'row',marginHorizontal: 50}}>
                        <View></View>
                        <View><Text style={{color:'white'}}>Remember me</Text></View>
                    </View>
                    <View style={{marginHorizontal: 30}}><Text style={{color: 'white'}}>Lost your Password</Text></View>
                </View>
                <View style={{marginVertical: 40}}>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('HomeScreen')}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Connexion</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    )
}
export default Connexion;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#128800'
    },
    containerImage: {
        marginTop: 100,
        width: 200,
        height: 205,
        marginVertical: 80
      },
      image: {
        width:'100%',
        height:'100%',
      },
      input:{
        padding: 10,
        width: 350,
        height: 50,
        elevation:5,
        backgroundColor:'#fff',
        borderRadius: 10,
        marginVertical: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        elevation: 3,
        backgroundColor: 'red',
        borderRadius: 5
    ,  }
})