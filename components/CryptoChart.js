import React from 'react';
import {Dimensions, View,Text} from 'react-native';
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import {CustomCard} from './CustomCard';
import {GREEN,LIGHTBLACK} from '../Constants';

export const {width: SIZE} = Dimensions.get('window');

export const data = [
  {x: 1453075200, y: 1.47}, {x: 1453161600, y: 1.37},
  {x: 1453248000, y: 1.53}, {x: 1453334400, y: 1.54},
  {x: 1453420800, y: 1.52}, {x: 1453507200, y: 2.03},
  {x: 1453593600, y: 2.10}, {x: 1453680000, y: 2.50},
  {x: 1453766400, y: 2.30}, {x: 1453852800, y: 2.42},
  {x: 1453939200, y: 2.55}, {x: 1454025600, y: 2.41},
  {x: 1454112000, y: 2.43}, {x: 1454198400, y: 2.20},
];

const points = monotoneCubicInterpolation({data, range: 40});

export const CryptoChart = () => (
  <CustomCard style={{ backgroundColor: '#fff',overflow:"hidden",marginTop:10, borderRadius:15 }}>
    <View style={{position:"absolute",backgroundColor:"transparent",float:"10 10 10 10",marginVertical:10,width:"100%",height:"100%"}}>
      <View style={{justifyContent:"space-between",height:"100%",padding:20}}>
        <View style={{justifyContent:"space-between",flexDirection:"row"}}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={{backgroundColor:"red",borderRadius:5,height:10,width:10}}></View>
            <Text style={{marginLeft:10,color:LIGHTBLACK,fontweight:"600"}}>Lower:$4.562</Text>
          </View>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={{backgroundColor:GREEN,borderRadius:5,height:10,width:10}}></View>
            <Text style={{color:LIGHTBLACK,fontweight:"600",marginLeft:10}}>Higher:$4.562</Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={{backgroundColor:"red",borderRadius:5,height:10,width:10}}></View>
            <Text style={{color:LIGHTBLACK,fontweight:"600",marginLeft:10}}>1 BTC = $4.562</Text>
          </View>
        </View>
      </View>
    </View>
    <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
      <ChartPath height={SIZE / 2} stroke="red" width={SIZE} />
      <ChartDot style={{ backgroundColor: 'red' }} />
    </ChartPathProvider>
  </CustomCard>
);