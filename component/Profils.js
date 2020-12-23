import React, { Component } from 'react'
import { StatusBar, Text, View,StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native'
import {Header} from 'react-native-elements'

const Profils =()=>{
    return(
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={"transparent"} translucent/>
        <View style={styles.container}>
            <Header options={{headerTransparent: true}} leftComponent={{}} rightComponent={{}} backgroundColor={'transparent'} />
            <View style={{alignItems: 'center'}}>
                <View style={{alignItems: 'center',marginTop:1}}>
                    <Image style={{height:120,width:120}} source={require('../assets/LOGO.png')} />
                </View>
                <View>
                    <Text style={{fontWeight: 'bold',fontSize: 20,marginVertical:5}}>Jordan BABADOUOU</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color: '#FF0000'}}>Edit profils</Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center',margin:15}}>
                    <Text style={{marginVertical:10,fontSize:11,textAlign: 'justify',color:'grey'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
                <View style={{flexDirection:"row",flexWrap:'wrap',justifyContent:'space-between'}}>
                    <View style={{marginHorizontal: 10}}>
                        <Text style={{color: '#FF0000',fontWeight: 'bold'}}>LANGUAGES</Text>
                        <Text style={{textAlign:'center',fontSize:11,color:'grey'}}>French,English</Text>
                    </View>
                    <View style={{marginHorizontal: 25}}>
                        <Text style={{color: '#FF0000',fontWeight: 'bold'}}>LOCATION</Text>
                        <Text style={{fontSize:11,textAlign: 'center',color:'grey'}}>Carlifonia,CN</Text>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Text style={{color: '#FF0000',fontWeight: 'bold'}}>MEMBER SINCE</Text>
                        <Text style={{fontSize:11,textAlign: 'center',color:'grey'}}>November 2014</Text>
                    </View>
                </View>
            </View>
            <View style={{position: 'absolute',flexDirection: 'row',padding:10,width:340,height:80,backgroundColor:"white",marginTop:430,elevation:2,borderRadius: 30,borderWidth:2,borderColor:'#FF0000'}}>
                <View style={{flex:1,padding:10}}>
                    <Image style={{width: '100%',height:'100%'}} resizeMode="cover" source={require('../assets/stamp.png')}/>
                </View>
                <View style={{flex:5}}>
                    <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold'}}>Get Verified</Text>
                        <Text style={{color:'#FF0000'}}>3 stops left &gt;</Text>
                    </View>
                    <View>
                        <Text style={{marginVertical:1,fontSize:11,textAlign: 'justify',color:'grey'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'#FF0000',height:'100%',width:395,marginTop: 70,padding:20}}>
                <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'white'}}>YOUR SPACES</Text>
                    <TouchableOpacity><Text style={{color:'white'}}>Edit &gt; </Text></TouchableOpacity>
                </View>
                <ScrollView horizontal style={{marginTop:10,flexDirection:'row'}}>
                    <TouchableOpacity style={{width: 140,height:140, backgroundColor:'white',borderRadius:20}}><Image style={{width:'100%',height:'100%',borderRadius:20}} resizeMode="cover" source={require('../assets/1.jpg')}/><View style={{position:'absolute',width:'100%',height:'20%',backgroundColor:'white',opacity:0.8,marginTop:90}}></View></TouchableOpacity>
                    <TouchableOpacity style={{width: 140,height:140, backgroundColor:'white',borderRadius:20,marginHorizontal:20}}><Image style={{width:'100%',height:'100%',borderRadius:20}} resizeMode="cover" source={require('../assets/2.jpg')}/><View style={{position:'absolute',width:'100%',height:'20%',backgroundColor:'white',opacity:0.8,marginTop:90}}></View></TouchableOpacity>
                    <TouchableOpacity style={{width: 140,height:140, backgroundColor:'white',borderRadius:20}}><Image style={{width:'100%',height:'100%',borderRadius:20}} resizeMode="cover" source={require('../assets/3.jpg')}/><View style={{position:'absolute',width:'100%',height:'20%',backgroundColor:'white',opacity:0.8,marginTop:90}}></View></TouchableOpacity>
                    <TouchableOpacity style={{width: 140,height:140, backgroundColor:'white',borderRadius:20,marginHorizontal:20}}><Image style={{width:'100%',height:'100%',borderRadius:20}} resizeMode="cover" source={require('../assets/4.jpg')}/><View style={{position:'absolute',width:'100%',height:'20%',backgroundColor:'white',opacity:0.8,marginTop:90}}></View></TouchableOpacity>
                    <TouchableOpacity style={{width: 140,height:140, backgroundColor:'white',borderRadius:20}}><Image style={{width:'100%',height:'100%',borderRadius:20}} resizeMode="cover" source={require('../assets/5.jpg')}/><View style={{position:'absolute',width:'100%',height:'20%',backgroundColor:'white',opacity:0.8,marginTop:90}}></View></TouchableOpacity>
                    <TouchableOpacity style={{width: 140,height:140, backgroundColor:'white',borderRadius:20,marginHorizontal:20}}><Image style={{width:'100%',height:'100%',borderRadius:20}} resizeMode="cover" source={require('../assets/6.jpg')}/><View style={{position:'absolute',width:'100%',height:'20%',backgroundColor:'white',opacity:0.8,marginTop:90}}></View></TouchableOpacity>
                    <TouchableOpacity style={{width: 140,height:140, backgroundColor:'white',borderRadius:20}}><Image style={{width:'100%',height:'100%',borderRadius:20}} resizeMode="cover" source={require('../assets/7.jpg')}/><View style={{position:'absolute',width:'100%',height:'20%',backgroundColor:'white',opacity:0.8,marginTop:90}}></View></TouchableOpacity>
                    <TouchableOpacity style={{width: 140,height:140, backgroundColor:'white',borderRadius:20,marginHorizontal:20}}><Image style={{width:'100%',height:'100%',borderRadius:20}} resizeMode="cover" source={require('../assets/8.jpg')}/><View style={{position:'absolute',width:'100%',height:'20%',backgroundColor:'white',opacity:0.8,marginTop:90}}></View></TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    </View> 
    )
}

export default Profils

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
      flex:1,
    },
    title:{
        fontWeight: "bold",
        fontSize: 25 ,
        color: 'white'
    }
  })