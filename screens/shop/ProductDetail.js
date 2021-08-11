import React from 'react';
import { View,Text,Image,StyleSheet, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProductDetail = ({route,navigation}) => {
    //{console.log(navigation.route.params)}
    const {products,imgUrl,title,description,price}=route.params;
   // console.log(products)
    return (
        <ScrollView>
        <View style={styles.container}>
        <Image style={styles.image} source={{uri:imgUrl}} />
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
        <Button title="add to cart" onPress={()=>{alert('working')}}/>
      <Icon name="cart-plus" size={30} color="blue" />
        </View>
        </ScrollView>
    );
};
const styles=StyleSheet.create({
    container:{
        margin:10
    },
    image:{
        height:300,
        width:300
    }

})
export default ProductDetail;