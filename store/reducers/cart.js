import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/cart"
import CartItem from "../../model/cart-item.js";

const initialState={
    items:{},
    totalAmount:0,
}

export default (state=initialState,action)=>{
    //console.log(action.type)
    switch(action.type){
        case ADD_TO_CART:
           // console.log('am i executing...')
            const addedProduct=action.products;
            const productPrice=addedProduct.price;
            const productTitle=addedProduct.title;

            if(state.items[addedProduct.id]){
                
                {
                    const updatedCartItem=new CartItem(
                        state.items[addedProduct.id].quantity+1,
                        productPrice,
                        productTitle,
                        state.items[addedProduct.id].sum+productPrice

                    )
                    return {...state,items:{...state.items,[addedProduct.id]:updatedCartItem},totalAmount:state.totalAmount+productPrice}
                }
            }else{
                //console.log('am i executing')
                const newCartItem=new CartItem(1,productPrice,productTitle,productPrice)
                return{
                    ...state,
                    items:{...state.items,[addedProduct.id]:newCartItem},
                    totalAmount:state.totalAmount+  productPrice
                }
            }
        case REMOVE_FROM_CART:
            const currentQuantity=state.items[action.productId].quantity;
            const seletedCartItem=state.items[action.productId];
            let updatedCartItems;
            if(currentQuantity>1){
                const updatedCartItem=new CartItem(
                    seletedCartItem.quantity-1,
                    seletedCartItem.productPrice,
                    seletedCartItem.productTitle,
                    seletedCartItem.sum-seletedCartItem.productPrice    
                    )
               updatedCartItems={...state.items,[action.productId]:updatedCartItem}
            }else{
                 updatedCartItems={...state.items}
                delete updatedCartItems[action.productId]
            }
            return{
                ...state,
                items:updatedCartItems,
                totalAmount:state.totalAmount-seletedCartItem.productPrice
            }

    }
   
    return state

}