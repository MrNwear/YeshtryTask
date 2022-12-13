import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    ProductsListStyle:{
        backgroundColor:'#fff',
        flex:1,
        position:'absolute',
        top:'15%',
        right:0,
        left:0,
        borderTopEndRadius:10,borderTopStartRadius:10,
        bottom:0
    },
    iconWrapper: {
        flexDirection:'row',
         paddingVertical: 5,
         borderRadius: 5,
         alignItems:'center',
    },
})
export default styles;