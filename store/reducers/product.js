import PRODUCTS from '../../data/dummyData'
const initialState={
    availableProducts:PRODUCTS,
    useProducts:PRODUCTS.filter((product)=>product.ownerId=='u1')
}


export default (state=initialState,action)=>{
    return state;  
}