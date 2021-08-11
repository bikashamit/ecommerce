import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import CartItems from '../../components/CartItems';
import CartItem from '../../model/cart-item';
import {ADD_ORDER} from '../../store/action/order'
const renderSeparator=()=>{
   
  return (
    <View
    style={{
      backgroundColor: 'red',
      height: 0.5,
    }}
  />
  )
}

const ListHeaderComponent=()=>{
    return (
        <View style={{flex:1,flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:15}}>items</Text>
        <Text style={{fontSize:15}}>title</Text>
        <Text style={{fontSize:15}}>price</Text>
        <Text style={{fontSize:15}}>quantity</Text>
        </View>
    )
}

const Carts = ({ navigation }) => {
    const dispatch=useDispatch();
    const carts = useSelector((state) => { return state.carts })
    const cartItems = useSelector((state) => {
        const transfromedCartItems = []
        for (const key in state.carts.items) {
            transfromedCartItems.push(
                {
                    productId: key,
                    productTitle: state.carts.items[key].productTitle,
                    productPrice: state.carts.items[key].productPrice,
                    quantity: state.carts.items[key].quantity,
                    sum: state.carts.items[key].sum

                }
            )
        }

        return transfromedCartItems;
    })
    // console.log(cartItems)

    const renderItem = ({ item, index }) => {
     
        return <CartItems  index={index} productId={item.productId} productTitle={item.productTitle} productPrice={item.productPrice} quantity={item.quantity} sum={item.sum} />
    }
    const updatedCartItems={cartItems:cartItems,totalAmount:carts.totalAmount}
    return (
        <View style={styles.screen}>
            <View style={styles.summery}>
                <Text style={styles.summeryText}>
                    Total:
                    <Text style={styles.amount}> ${carts.totalAmount}</Text>

                </Text>
                <Button title="order now" disabled={cartItems.length === 0}
                    onPress={() => {dispatch({type:ADD_ORDER,orderedItems:updatedCartItems})} }/>
                <Button title='goto order' onPress={()=>{navigation.navigate('Order')}}/>
            </View>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => { return item.productId }}
                ListHeaderComponent={ListHeaderComponent}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summery: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        padding: 10,
    },
    summeryText: {
        fontSize: 18
    },
    amount: {
        color: 'red'
    }
})

export default Carts;