import {Header, Icon, ListItem} from "react-native-elements";
import React from 'react'
import {IconButton} from 'react-native-paper'
import { StatusBar, Text, View,StyleSheet,Image,ScrollView,TouchableOpacity,SafeAreaView } from 'react-native'

let actu = [
    {
        id: 1,
        name: 'IFRI',
        like: 24,
        imgPath: require('../assets/1.jpg'),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit'
    },
    {
        id: 2,
        name: 'EPAC',
        like: 20,
        imgPath: require('../assets/2.jpg'),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit'
    },
    {
        id: 3,
        name: 'FSA',
        like: 14,
        imgPath: require('../assets/3.jpg'),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing el,Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit'
    },
    {
        id: 4,
        name: 'ENAM',
        like: 54,
        imgPath: require('../assets/4.jpg'),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit'
    },
    {
        id: 5,
        name: 'FADESP',
        like: 104,
        imgPath: require('../assets/5.jpg'),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit'
    },
    {
        id: 6,
        name: 'FASEG',
        like: 3000,
        imgPath: require('../assets/6.jpg'),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit'
    },
    {
        id: 7,
        name: 'ENEAM',
        like: 1524,
        imgPath: require('../assets/7.jpg'),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit'
    },
    {
        id: 8,
        name: 'FLLAC',
        like: 55,
        imgPath: require('../assets/8.jpg'),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit'
    },
]

const title =()=>{
    return(
        <View>
            <Text style={styles.title}>UAC</Text>
        </View>
    )
}
const leftComponent =()=>{
    return(
        <View>
            <IconButton icon={"menu"} size={25} color={'white'} onPress={()=>{}}/>
        </View>
    )
}

const rightComponent =()=>{
    return(
        <View>
            <IconButton icon={"menu"} size={25} color={'white'} onPress={()=>{}}/>
        </View>
    )
}

const Actualite =(props)=>{
    return(
        <View style={styles.contain}>
            <View style={{marginVertical:15,flexDirection:'row'}}>
                <Text style={{fontWeight: 'bold',fontSize:19,marginLeft:5,color:"#FF0000"}}>{props.name}</Text>
            </View>
            <TouchableOpacity style={{width:400,height: 250}}>
                <Image source={props.imgPath} style={{width:'100%',height:'100%',borderRadius:2}} resizeMode="cover" />
            </TouchableOpacity>
            <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"row",alignItems:'center',justifyContent: 'center'}}>
                    <IconButton icon={'heart'} color={"#FF0000"} size={25} onPress={()=>{}}/>
                    <Text>{props.like} likes</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:'center',justifyContent: 'center'}}>
                    <IconButton icon={'comment'} color={"#FF0000"} size={25} onPress={()=>{}}/>
                    <Text style={{justifyContent: 'center',alignItems:'center'}}>124 comments</Text>
                </View>
            </View>
            <View style={{margin: 10}}>
                <Text style={{color: 'grey'}}>{props.desc}</Text>
            </View>
            <TouchableOpacity style={{marginLeft: 10}}>
                <Text style={{color:'blue',fontWeight:'bold'}}>Lire plus de commentaires .....</Text>
            </TouchableOpacity>
        </View>
    )
}

const HomeScreen =()=>{
    return(
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={"transparent"} translucent/>
            <Header centerComponent={title} leftComponent={leftComponent} rightComponent={rightComponent} backgroundColor={'#128800'} />
            <ScrollView style={{flex: 1,backgroundColor:"#FF0000"}} showsHorizontalScrollIndicator={false}>
                <SafeAreaView style={{flex:1,alignItems:'center',backgroundColor:"#FF0000"}}>
                   <View>
                    {
                        actu.map((item,id)=>(
                            <ListItem>
                                <Actualite imgPath={item.imgPath} name={item.name} desc={item.desc} like = {item.like}/>
                            </ListItem>
                         ))
                     }
                   </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#FF0000"
    },
    title:{
        fontWeight: "bold",
        fontSize: 25 ,
        color: 'white'
    },
    contain:{
        width: 390,
        height: 460,
        borderRadius: 10,
        elevation: 5,
        backgroundColor:'white',
    }
  })