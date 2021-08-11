import React from 'react';
import { View,Text,StyleSheet,Image, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import ProductDetail from '../screens/shop/ProductDetail';
import { addToCart, ADD_TO_CART } from '../store/action/cart';
const Product = ({products,title,imgUrl,description,price,navigation}) => {
    //console.log(1,products)
    const dispatch=useDispatch();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetail',{title,description,imgUrl,price})}>
        <View style={styles.product}>
            <Image style={styles.img} source={{uri:imgUrl}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.action}>
           <Button title="view details" onPress={()=>navigation.navigate('ProductDetail',{title:title,products:products,description:description,imgUrl:imgUrl,price:price})}/>
           <Button title="add to cart" onPress={()=>{dispatch({type:ADD_TO_CART,products:products})}} /> 
                
            </View>
        </View>
        </TouchableOpacity>
    );
};
const styles=StyleSheet.create({
    title:{
        marginVertical:10,
        fontSize:20,
        color:'gray'
    },
    description:{
        alignItems:'center',
        fontSize:15,
        color:'gray'
    },
    price:{
        fontSize:30
    },
    product:{
        backgroundColor:'white',
        height:400,
        margin:20

    },
    img:{
        width: 320,
        height: 200,
    },
    action:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
export default Product;