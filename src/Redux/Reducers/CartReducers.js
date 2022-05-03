import { ADDTOCART } from "../Constans/CartConstans";

export const cartReducers=(state={cartItems:[]},action)=>{
    switch (action.type) {
        case ADDTOCART:
                const item=action.payload;
                const existItem=state.cartItems.find(x=>x.id===item.id);
                if(existItem){
                       return{
                           ...state,
                           cartItems:state.cartItems.map(x=>x.id===existItem.id ?item:x)
                       }
                }
                else{
                    return{
                        ...state,
                        cartItems:[...state.cartItems,item]
                    }
                }
        default:
            return state;
    }
}
