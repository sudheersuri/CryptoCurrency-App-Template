import * as React from 'react';
import  {View,StyleSheet,Image,Text,Pressable} from 'react-native';
import bitcoin from '../assets/images/bitcoin.png';
import {CustomCard} from './CustomCard';
import {LIGHTGREY,GREEN,RED,LIGHTBLACK} from '../Constants';

export const CoinCard = (props) => {
  let {name,cryptobalance,actualbalance,decreased,percentage,difference,imgsrc} = props.item;
  
  return (
          <Pressable onPress={props.onPress}>
          <CustomCard style={{flexDirection:"row",alignItems:"center",backgroundColor:"#fff",borderRadius:15,paddingHorizontal:10,paddingVertical:20}}>
            <View>
             <Image style={{height:60,width:60}} source={imgsrc}></Image>
            </View>
            <View style={{flex:2,marginLeft:15,marginRight:8}}>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{fontWeight:"600",color:LIGHTBLACK}}>{cryptobalance}</Text>
                <Text>{actualbalance}</Text>
              </View>
              <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
                <Text style={{color:LIGHTGREY,fontWeight:"600"}}>{difference}</Text>
                <Text style={{color:decreased?RED:GREEN,fontWeight:"600"}}>{percentage}</Text>
              </View>
            </View>
          </CustomCard>
          </Pressable>);
}

const styles = StyleSheet.create({
  
});