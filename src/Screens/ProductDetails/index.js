import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from "react-native";
import axios from 'axios';
import LinearGradient from "react-native-linear-gradient";
import PrimaryHeader from "../../Components/PrimaryHeader";
import styles from "./style";
import { ImageSlider } from 'react-native-image-slider-banner';
import { Base_Url } from "../../utils/constants";
import { PriceComponent } from "../../Components/Price";
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, sizes } from "../../utils/dummyData";
export const ProductDetails = ({ route, navigation }, props) => {
    const { product } = route.params;
    const [products, setProducts] = useState([]);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const getProductDetails = async () => {
        try {

            const response = await axios.get('https://api-dev.yeshtery.com/v1/yeshtery/product', { params: { product_id: product.id } });
            setProducts(response.data)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProductDetails();
    }, [])
    const renderSizes=()=>{
        return(<>
            <Text style={{ fontSize: 16, color: '#1F54CF', marginHorizontal: 20 }}>size</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>

                    {sizes.map((item) => {
                        return (
                            
                            <TouchableOpacity style={{
                                borderWidth:1 ,
                                borderColor:selectedSize === item ?'#737ade':'#d8d8d6',
                                width: 72,
                                height: 32,
                                borderRadius: 10,
                                marginEnd:10,
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                            onPress={() => { setSelectedSize(item) }}
                            >
                                    <Text style={{color:'#707070'}}>{item}</Text>
                                    </TouchableOpacity>
                        )
                    })}
                </View>
                    </>
        )
    }
    const renderColors=()=>{
        return(
            <>
            <Text style={{ fontSize: 16, color: '#1F54CF', marginHorizontal: 20 }}>color</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>

                    {colors.map((item) => {
                        return (
                            <View style={{ borderWidth: selectedColor === item ? 1 : 0,
                             marginEnd: 10,
                              borderRadius: 20,
                              borderColor:'#737ade',
                               padding: 2 }}>
                                <TouchableOpacity style={{
                                    backgroundColor: item,
                                    width: 30,
                                    height: 30,
                                    borderRadius: 15,
                                }}
                                    onPress={() => { setSelectedColor(item) }}
                                />
                            </View>
                        )
                    })}
                </View>
                </>
        )
    }
    return (
        <View style={{ flex: 1 }}>

            <LinearGradient
                start={{ x: 0.0, y: .25 }} end={{ x: .8, y: 1.0 }}
                locations={[0, 0.8, 0.94]}
                style={{
                    flex: .25,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 5,
                }}
                colors={['#31007e', '#754bde', '#1b50d5']}

            >
                <SafeAreaView />
                <PrimaryHeader ScreenName='Product Details' backButtonHandler={() => { navigation.goBack() }} />
            </LinearGradient>
            <ScrollView style={styles.ProductsListStyle}>
                {products.images &&
                    <TouchableOpacity style={{ padding: 5 }}>

                        <ImageSlider
                            data={products.images.map(item => {
                                return { img: Base_Url + item.url }
                            })}
                            preview={true}
                            style
                            caroselImageStyle={{ resizeMode: 'cover', borderRadius: 30 }}
                        />
                    </TouchableOpacity>
                }
                <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }}>
                    <View style={{ width: '60%' }}>
                        <Text style={{ color: '#000', fontSize: 18 }}>{products.name}</Text>
                    </View>
                    <PriceComponent price={products.price} discount={products.discount} />
                </View>
                <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>{products.description}</Text>
                {renderColors()}
                {renderSizes()}
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,alignItems:'center'}}>

                <View style={styles.iconWrapper}>
                        <Icon name='qrcode-scan' style={{fontSize:24,color:'#0255CC',marginEnd:5}}/>
                   <View>
                    <Text style={{color:'#0255CC'}}>
                         Scan
                         </Text>
                         <Text>& get 100 points</Text>
                   </View>
                </View>
                   <TouchableOpacity style={{minWidth:'25%',backgroundColor:'#0255CC',borderRadius:8,paddingVertical:10,alignItems:'center'}}>
                    <Text style={{color:'#fff'}}>Scan</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,alignItems:'center'}}>

                <View style={styles.iconWrapper}>
                        <Icon name='receipt' style={{fontSize:24,color:'#0255CC',marginEnd:5}}/>
                   <View>
                    <Text style={{color:'#0255CC'}}>
                    Buy & submit
                         </Text>
                         <Text>the receipt for 120 points </Text>
                   </View>
                </View>
                   <TouchableOpacity style={{minWidth:'25%',backgroundColor:'#0255CC',borderRadius:8,paddingVertical:10,alignItems:'center'}}>
                    <Text style={{color:'#fff'}}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}