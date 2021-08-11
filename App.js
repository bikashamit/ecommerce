import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/product'
import cartReducer from './store/reducers/cart'
import orderReducer from './store/reducers/order'
import ShopNavigation from './navigation/ShopNavigation';
const App = () => {
  const rootReducer=combineReducers({
    products:productsReducer,
    carts:cartReducer,
    orders:orderReducer

  })

  const store=createStore(rootReducer)
  return (
    <Provider store={store}>
    <ShopNavigation/>
    </Provider>
  );
};

export default App;