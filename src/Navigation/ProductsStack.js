import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScanProductsScreen } from '../Screens/ScanProducts';
import { ProductDetails } from '../Screens/ProductDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export const ProductStack=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='ScanProducts' component={ScanProductsScreen}/>
            <Stack.Screen name='ProductDetails' component={ProductDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}