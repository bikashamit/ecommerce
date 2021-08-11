import {ADD_ORDER} from '../action/order'
import order from '../../model/order'


const initialState={
    orders:[]
}

export default (state=initialState,action)=>{
    //console.log('am i executing')
    //console.log(action.type)
 // console.log(action.orderedItems);
    switch(action.type){
        case ADD_ORDER:
           // console.log('am i executing...')
        const newOrder=new order(
            new Date().toString(),
            action.orderedItems.cartItems,
            action.orderedItems.totalAmount,
           new Date()   
        );
        
       // console.log({orders:state.orders.concat(newOrder)})
        return {...state,orders:state.orders.concat(newOrder)}
    }
return {...state}
}