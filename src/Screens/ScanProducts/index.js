import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Card } from "../../Components/Card";
import PrimaryHeader from "../../Components/PrimaryHeader";
import styles from "./style";
import axios from 'axios';


export const ScanProductsScreen=()=>{
    const [products,setProducts]=useState([]);
    const getProducts=async()=>{
        const response= await axios.get('https://api-dev.yeshtery.com/v1/yeshtery/products');
        setProducts(response.data.products)
    }
    useEffect(()=>{
        getProducts();
    },[])

    return( 
    <View style={{flex:1}}>

    <LinearGradient
        start={{x: 0.0, y: .25}} end={{x: .8, y: 1.0}}
        locations={[0,0.8,0.94]}
        style={{
            flex:.25,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
        }}
        colors={['#321383',  '#4B3191', '#1F3DC3']}
        
        >
            <SafeAreaView/>
          <PrimaryHeader ScreenName='Scan Products'/>
        </LinearGradient>
          <ScrollView style={styles.ProductsListStyle}>
           
            {products.map(item=>{
                return(
                    <Card product={item}/>
                )
            })}
          </ScrollView>
        </View>
        
        )
}