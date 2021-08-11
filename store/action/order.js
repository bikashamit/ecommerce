export const ADD_ORDER='ADD_ORDER'

export const addOrder=(orderedItems)=>{
    return {type:'ADD_ORDER',orderedItems:orderedItems}
}