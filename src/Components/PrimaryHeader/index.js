import { View ,StyleSheet,Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function PrimaryHeader(props) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='arrow-back-ios' size={24} color='#fff' type='ionIcons' onPress={props.backButtonHandler}/>
                <Text style={[styles.textStyle]}>
                    {props.ScreenName}
                </Text>
            </View>
            <Icon name='shopping-bag' type='materialIcons' color='#fff' size={24}/>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:10
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
    },
});
