import React from "react";
import {TouchableOpacity ,Text,Image,View} from 'react-native';
import styles from "./style";
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Base_Url } from "../../utils/constants";
import { useNavigation } from '@react-navigation/native';
export const Card=(props)=>{
    const {product}=props;
    const Navigation =useNavigation();
    return(
        <TouchableOpacity style={styles.Container} onPress={()=>{
            Navigation.navigate('ProductDetails',{
                product:product
            });
        }}>
            <Image source={{uri:Base_Url+product.image_url}} style={styles.imageStyle}/>
            <View style={styles.TextWrapper}>
                <Text  style={[styles.titleStyle,{color:'#000'}]}>{product.name}</Text>
               <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
                <View style={styles.iconWrapper}>
                    <Text style={styles.productPriceText}>
                        <Icon name='qrcode-scan' size={20}/>
                         {100}
                         </Text>
                </View>
                <View style={styles.iconWrapper}>
                    <Text style={styles.productPriceText}>
                        <Icon name='receipt' size={20}/>
                        {product.price}
                        </Text>
                </View>

               </View>
            </View>
        </TouchableOpacity>
    );
}