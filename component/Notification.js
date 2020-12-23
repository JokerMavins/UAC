import React, { Component } from 'react'
import { StatusBar, Text, View,StyleSheet,ScrollView,SafeAreaView,TouchableOpacity,Image} from 'react-native'
import {Header,ListItem} from 'react-native-elements'
import Swipeout from 'react-native-swipeout';

var swipeoutBtns=[
    {
        text: 'Delete',
        type:'delete',
    },
    {
        text: 'Read',
        type:'primary',
    }
]

let notif = [
    {
        id: 1,
        name: 'John Doe',
        imgPath: require('../assets/1.jpg'),
        message: "Accept your request!",
        time: "8 mins ago ",
        new: "NEW"
    },
    {
        id: 2,
        name: 'Rosaline Macrove',
        imgPath: require('../assets/2.jpg'),
        message: "reject your request",
        time: "4 mins ago ",
        new: "NEW"
    },
    {
        id: 3,
        name: 'tia Sarah',
        imgPath: require('../assets/3.jpg'),
        message: "reject your request",
        time: "3 mins ago ",
    },
    {
        id: 4,
        name: 'Naomie Marlene',
        imgPath: require('../assets/4.jpg'),
        message: "reject your request",
        time: "10 mins ago "
    },
    {
        id: 5,
        name: 'Jessica sanchez',
        imgPath: require('../assets/5.jpg'),
        message: "Accepte your request",
        time: "14 mins ago ",
        new: "NEW"
    },
    {
        id: 6,
        name: 'Patrice Kebab',
        imgPath: require('../assets/6.jpg'),
        message: "reject your request",
        time: "3 mins ago"
    },
    {
        id: 7,
        name: 'Mike Lelouche',
        imgPath: require('../assets/7.jpg'),
        message: "reject your request",
        time: "30 mins ago ",
        new: "NEW",
    },
    {
        id: 8,
        name: 'Esther Thomson',
        imgPath: require('../assets/8.jpg'),
        message: "Accepte your request",
        time: "1 min ago"
    },
]

const title =()=>{
    return(
        <View>
            <Text style={styles.title}>Notification</Text>
        </View>
    )
}

const Message =(props)=>{
    return(
        <View style={{flexDirection:'row',elevation:5,backgroundColor:"white",width:380,height:80,borderWidth:1,borderColor:'white',borderRadius:5}} onPress={()=>{}}>
            <View style={{flex:2}}>
                <Image source={props.imgPath} style={{width:'100%',height:'100%',borderRadius:5}} resizeMode="cover"/>
            </View>
           <View style={{flexDirection:'column',flex:5,padding:5}}>
                <View style={{flexDirection:'row',}}>
                    <Text style={{fontWeight:'bold'}}>{props.name} </Text>
                    <Text>{props.message}</Text>
                </View>
                <View>
                    <Text>{props.time}</Text>
                </View>
            </View>
            <View style={{flex:1,padding:5}}>
                <Text style={{color:'#ff6347'}}>{props.new}</Text>
            </View>
        </View>
    )
}

const Notification =()=>{
    return(
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={"transparent"} translucent/>
            <Header centerComponent={title} leftComponent={{}} rightComponent={{}} backgroundColor={'#128800'} />
            <ScrollView style={{flex: 1}}>
                <SafeAreaView style={{flex: 1,alignItems:'center'}}>
                    <View>
                         {
                            notif.map((item,index) => (
                                <ListItem>
                                    <Swipeout right={swipeoutBtns} autoClose={true}>
                                      <Message imgPath={item.imgPath} name={item.name} message={item.message} time={item.time} new={item.new} />
                                    </Swipeout>
                                </ListItem>
                            ))
                        }
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View> 
    )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey',
      flex:1,
    },
    title:{
        fontWeight: "bold",
        fontSize: 25 ,
        color: 'white'
    }
  })