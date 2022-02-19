import * as React from 'react';
import  {View,ScrollView,StyleSheet,Image,Text,TouchableOpacity,FlatList,Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {WalletCoinCard} from './WalletCoinCard';
import {CoinCard} from './CoinCard';
import {CTACard} from './CTACard';
import bitcoin from '../assets/images/bitcoin.png';
import ripple from '../assets/images/ripple.png';
import etherium from '../assets/images/etherium.png';
import { useRoute,useNavigation } from '@react-navigation/native';
import {CryptoChart} from './CryptoChart';
import {LIGHTGREY,LIGHTBLACK} from '../Constants';

export const WalletDetails = (props) => {
    const route = useRoute();
    const nav = useNavigation();
    const params = route.params;
    let {name,cryptobalance,actualbalance,decreased,percentage,difference,imgsrc} = params;

  return (
          <View style={{height:"100%",backgroundColor:'#F5F8FF'}}>          
                <View style={styles.headerbar}>
                    <TouchableOpacity onPress={()=>nav.goBack()}>
                              <Ionicons name="chevron-back-outline" size={28} color={LIGHTBLACK}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:25,fontWeight:"500",color:LIGHTBLACK}}>{name}</Text>
                    <TouchableOpacity><Ionicons name="ellipsis-vertical" size={26} color={LIGHTGREY}/></TouchableOpacity>
                </View>
                <View style={{height:Dimensions.get('window').height-200}}>
                <ScrollView style={{marginHorizontal:20}}>
                    <WalletCoinCard/>
                    <View style={{flexDirection:"row",alignItems:"center",marginTop:10,marginHorizontal:5,justifyContent:"space-between"}}>
                      <View style={{backgroundColor:LIGHTGREY,borderRadius:10}}>
                        <Text style={{color:LIGHTGREY,padding:5,color:"#fff",fontWeight:"600"}}>Day</Text>
                      </View>
                      <Text style={{color:LIGHTGREY}}>Week</Text>
                      <Text style={{color:LIGHTGREY}}>Month</Text>
                      <Text style={{color:LIGHTGREY}}>Year</Text>
                    </View>
                    <CryptoChart />
                    <View style={{marginTop:10,flexDirection:"row",justifyContent:"space-between",backgroundColor:"#F5F8FF"}}>
                     <CTACard action="Buy"/>
                     <CTACard action="Sell"/>
                    </View>
                </ScrollView>
                </View>
                <View style={styles.footer}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingBottom:40}}>
                            <Ionicons name="wallet" size={28} color={LIGHTBLACK}/>
                            <Ionicons name="compass" size={28} color={LIGHTGREY}/>
                            <Ionicons name="notifications" size={28} color={LIGHTGREY}/>
                            <Ionicons name="settings-sharp" size={28} color={LIGHTGREY}/>
                        </View>
                </View>
          </View>);
}

const styles = StyleSheet.create({
   headerbar:{
        paddingTop:50,
        paddingBottom:20,
        paddingHorizontal:20,
        flexDirection:"row",
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20
    },
    filters:
    {
        flexDirection:"row",
        marginTop:10,
        marginHorizontal:5,
        justifyContent:"space-between"
    },
    footer:{
      position:"absolute",
      left:1,
      right:1,
      bottom:0,
      backgroundColor:"#fff",
      paddingHorizontal:25,
      paddingTop:20
    }
  
});