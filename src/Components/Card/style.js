import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        backgroundColor:'#fff',
        borderRadius: 25,
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 10

    },
    imageStyle: {
        height: 80,
        width: 80,
        borderRadius: 20,
        margin: 8,
    },
    TextWrapper: {
        justifyContent: 'space-evenly',
        flex: 1,
        marginVertical: 10,
    },
    titleStyle: {
        fontWeight: '400',
        fontSize: 22,
        color:'#000'
    },
    iconWrapper: {
        backgroundColor: '#FAFAFA',
         paddingVertical: 5,
         borderRadius: 5,
         width:'30%',
         alignItems:'center'
    },
    productPriceText:{
        fontSize:20,
        color:'#1F54CF'
    }

});
export default styles;