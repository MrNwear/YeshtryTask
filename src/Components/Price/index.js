import React from "react";
import { Text, View } from 'react-native';
import { PriceAfterDiscount } from "../../utils/helperFunctions";
import styles from "./style";
import { CURRENCY } from "../../utils/constants";
export const PriceComponent = (props) => {
    
    const {price,discount}=props;
    return (
        <View>
            {discount ?
                <View style={styles.container}>
                    <Text style={styles.pricestyle}>({( PriceAfterDiscount(price, discount))}{CURRENCY})</Text>
                    <Text style={styles.oldPriceifDiscountStyle}>{ price} {CURRENCY}</Text>
                </View>
                :
                <Text style={styles.pricestyle}>({ price}{CURRENCY})</Text>
            }
        </View>
    );
}