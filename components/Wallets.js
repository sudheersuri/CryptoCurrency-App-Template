import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,FlatList,Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {WalletCoinCard} from './WalletCoinCard';
import {CoinCard} from './CoinCard';
import { useNavigation } from '@react-navigation/native';
import bitcoin from '../assets/images/bitcoin.png';
import ripple from '../assets/images/ripple.png';
import etherium from '../assets/images/etherium.png';
import wallet from '../assets/images/walletimg.png';

import {LIGHTGREY,LIGHTBLACK} from '../Constants';

export const Wallets = (props) => {
  const nav = useNavigation();
  const CRYPTOCURRENCIES = [
    {
      id:1,
      name:"Bitcoin",
      cryptobalance:"3.5290123123 BTC",
      actualbalance:"$19.53",
      percentage:"+ 4.32%",
      difference:"$ 5.44",
      decreased:false,
      imgsrc:bitcoin
    },
    {
      id:2,
      name:"Etherium",
      cryptobalance:"12.5290123123 ETH",
      actualbalance:"$19.53",
      percentage:"+ 4.32%",
      decreased:false,
      difference:"$ 3.44",
      imgsrc:etherium
    },
    {
      id:3,
      name:"Ripple",
      cryptobalance:"3.5290123123 XRP",
      actualbalance:"$19.53",
      percentage:"- 4.32%",
      decreased:true,
      difference:"$ 7.44",
      imgsrc:ripple
    }
  ];
  
  return (
          <View style={{height:"100%",backgroundColor:'#F5F8FF'}}>          
                <View style={styles.headerbar}>
                    <TouchableOpacity>
                      <View>
                          <View style={{color:LIGHTGREY,width:20,height:3,marginVertical:5,backgroundColor:LIGHTGREY}}></View>
                          <View style={{color:LIGHTGREY,width:15,height:3,backgroundColor:LIGHTGREY}}></View>
                          <View style={{color:LIGHTGREY,width:10,height:3,marginVertical:5,backgroundColor:LIGHTGREY}}></View>
                      </View>
                    </TouchableOpacity>
                    <Text style={{fontSize:25,fontWeight:"500",color:LIGHTBLACK}}>Wallets</Text>
                    <TouchableOpacity><Ionicons name="wallet" size={26} color={LIGHTGREY}/></TouchableOpacity>
                </View>
                <View style={{marginHorizontal:20}}>
                    <View>
                    <WalletCoinCard item={{name:"Total Wallet Balance",cryptobalance:"$39.584",imgsrc:wallet}}/>
                    <View style={styles.filters}>
                      <Text style={{color:LIGHTGREY}}>Sorted by higher %</Text>
                      <View style={{flexDirection:"row",alignItems:"center"}}>
                      <Text style={{color:LIGHTGREY}}>24 H</Text>
                      <Ionicons name="chevron-down-outline" size={18} color={LIGHTGREY}/>
                      </View>
                    </View>
                    </View>
                    <View style={{marginTop:10,backgroundColor:"#F5F8FF",overflow:"hidden",marginBottom:100}}>
                     <FlatList
                        data={CRYPTOCURRENCIES}
                        style={{height:(Dimensions.get('window').height/2)-60}}
                        ItemSeparatorComponent = {()=><View style={{marginVertical:8}}></View>}
                        renderItem={({item})=><CoinCard item={item} onPress={()=>nav.navigate("walletdetails",item)}/>}
                        keyExtractor={(item) => item.id}
                      />
                    </View>
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