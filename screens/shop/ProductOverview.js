import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Product from '../../components/Product';
import product from '../../store/reducers/product';
import { combineReducers } from 'redux';
const ProductOverview = ({navigation}) => {
    const products=useSelector((state)=>{return state.products.availableProducts})
    const carts=useSelector((state)=>{return state.carts })
   // console.log(products)
  // console.log(Object.keys(carts.items).length)
    const renderItem=({item})=>{
       
      return  <Product products={item}  title={item.title} imgUrl={item.imgUrl} description={item.description} price={item.price} navigation={navigation} />
    }
    return (
      
     <FlatList
     data={products}
     renderItem={renderItem}
     keyExtractor={((item)=>item.id)}
     />
    );
};

export default ProductOverview;