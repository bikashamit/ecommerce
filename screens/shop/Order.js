import React from 'react';
import { View,Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const Order = () => {
   // console.log('am i executing..')
    const orders=useSelector((state)=>{
      return  state.orders;
    })
const date=orders.orders[0].date;
const items=orders.orders[0].items;


    const totalAmount=useSelector((state)=>{
       return state.orders.orders[0].totalAmount
    })
    const renderItem=({item})=>{
    return (
        <View style={{flex:1,flexDirection:'row'}}>
        <Text>{item.productTitle}</Text>
        <Text>{item.quantity}</Text>
        <Text>{item.productPrice}</Text>
        </View>
        )
    }
  
    return (
        <View>
        <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item)=>item.productId}
        />
        <Text>{totalAmount}</Text>
        <Text>{date.toString()}</Text>
        </View>
    );
};

export default Order;