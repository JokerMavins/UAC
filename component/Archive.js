import React, { useState } from 'react'
import { StatusBar, Text, View,StyleSheet } from 'react-native'
import {Header} from 'react-native-elements'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker } from 'react-native-maps';

const title =()=>{
    return(
        <View>
            <Text style={styles.title}>Explore</Text>
        </View>
    )
}


const Archive =()=>{

    const [region, setRegion] = useState({
        latitude: 6.4675104705434165,
        longitude: 2.3401995105726314,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      });

    return(
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'yransparent'} translucent/>
            <Header centerComponent={title} leftComponent={{}} rightComponent={{}} backgroundColor={'maroon'} />
            <View style={{flex:1}}>
                <MapView
                    style={{ flex: 1 }}
                    region={region}
                    provider={PROVIDER_GOOGLE}
                    onRegionChangeComplete={region => setRegion(region)}
                    showsUserLocation
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    zoomTapEnabled={true}
                    mapType={'hybrid'}
                    showsMyLocationButton={true}
                    showsTraffic={true}
                    showsCompass={true}
                    showsBuildings={true}
                    showsScale={true}
                    >
                    <Marker coordinate={{ latitude: 6.4675104705434165, longitude: 2.3401995105726314 }} pinColor="red"/>
                </MapView>
            </View>
        </View> 
    )
}

export default Archive

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    title:{
        fontWeight: "bold",
        fontSize: 25 ,
        color: 'white'
    }
  })