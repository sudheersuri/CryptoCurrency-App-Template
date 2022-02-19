import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import {CustomCard} from './CustomCard';
import { Ionicons } from '@expo/vector-icons';
import expandchevron from '../assets/images/expandchevron.png';
import {GREEN,LIGHTGREY,LIGHTBLACK} from '../Constants';
import { useRoute,useNavigation } from '@react-navigation/native';

export const WalletCoinCard = (props) => {

  const route = useRoute();

  const params = route.params;
  
  let {name,cryptobalance,imgsrc} = typeof props.item=="undefined"? params :props.item;
  
  return (
          <CustomCard style={styles.container}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
              <View style={{flexDirection:"row",alignItems:"center"}}>
              <Image style={{height:60,width:60}} source={imgsrc}></Image>
              <Text style={{color:LIGHTBLACK,fontWeight:"bold",marginLeft:10}}>{name}</Text>
              </View>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{color:LIGHTGREY}}>USD</Text>
                <Ionicons name="chevron-down-outline" size={20} color={LIGHTGREY}  />
              </View>
            </View>
            <View style={{flexDirection:"row", marginTop:10,justifyContent:"space-between"}}>
              <Text style={{fontSize:30,marginLeft:5,color:LIGHTBLACK}}>$33.212</Text>
              <View style={{borderRadius:20,backgroundColor:GREEN,height:25,paddingHorizontal:10,paddingVertical:5}}>
                <Text style={{color:"#fff",fontWeight:"bold",fontSize:12}}>+ 3.55%</Text>
              </View>
            </View>
            <Text style={{marginTop:5,color:LIGHTGREY,fontSize:20}}>7.2131231 BTC</Text>
            <View style={{flexDirection:"row",justifyContent:"center",marginBottom:20,height:20}}>
            <Image style={{marginTop:30}} source={expandchevron}></Image>
            </View>
          </CustomCard>
          );
}

const styles = StyleSheet.create({
  container:{
      padding:20,
      backgroundColor:"#fff",
      borderRadius:15
  }
});