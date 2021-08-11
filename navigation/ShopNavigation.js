import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductOverview from '../screens/shop/ProductOverview';
import ProductDetail from '../screens/shop/ProductDetail';
import Cart from '../screens/shop/Cart'
import Order from '../screens/shop/Order'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const ShopNavigation = () => {
  const carts = useSelector((state) => { return state.carts })
  const cartNum = Object.keys(carts.items).length;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="productOverview" component={ProductOverview}
          options={({ navigation }) => ({
            title: 'product overview',
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <>
                <Icon name="cart-plus" size={30} color="blue" onPress={() => {
                  navigation.navigate('Cart')
                }} />
                <Text >{cartNum}</Text>
              </>
            )
          })}
        />

        <Stack.Screen name="ProductDetail" component={ProductDetail}
          options={({ route }) =>
          ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

          })
          } />

        <Stack.Screen name='Cart' component={Cart}
          options={{
            headerStyle: {
              backgroundColor: 'gray',
            },
          }} />

        <Stack.Screen name='Order' component={Order}
          options={{
            headerStyle: {
              backgroundColor: 'gray'
            },
          }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigation;