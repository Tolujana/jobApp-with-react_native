import { View,Text, ScrollView,SafeAreaView } from 'react-native'
import { useState } from 'react'
import { Stack,useRouter } from 'expo-router'
import {COLORS,icons, images, SIZES} from'../constants'
import {Nearbyjobs,
  Popularjobs,
  Company,
  ScreenHeaderBtn,
  Welcome,
  } from '../components'
// import React from 'react'

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1,
     backgroundColor:COLORS.lightWhite}}>
      <Text><Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite },
       headerShadowVisible:false, headerLeft:()=>(<ScreenHeaderBtn iconUrl={icons.menu} dimension='60%'/>), headerRight:()=>(<ScreenHeaderBtn iconUrl={icons.profile} dimension='100%'/>)}}/></Text>
    </SafeAreaView>
  )
}

export default Home;