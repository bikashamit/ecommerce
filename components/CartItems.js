import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
//import { REMOVE_FROM_CART } from '../../store/action/cart';
import Icon from 'react-native-vector-icons/FontAwesome';
const CartItems = ({ index,productId,productTitle, productPrice, quantity, sum }) => {
    const dispatch=useDispatch();
    return (
        <View style={{ flex: 1, flexDirection: 'row', borderLeftWidth: 1, borderLeftColor: 'red',justifyContent:'space-between' }}>
        <Text>{index+1}</Text>
        <Text >{productTitle} </Text>
        <Text>{productPrice}</Text>
        <Text>{quantity}</Text>
        <Icon name='remove' size={20} color='red' onPress={()=>{dispatch({type:'REMOVE_FROM_CART',productId:productId})}}/>
    </View>
    );
}

export default CartItems;