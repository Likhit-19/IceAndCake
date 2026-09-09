import {createSlice} from "@reduxjs/toolkit";

const initialState={
    items:[]
}

const cartSlice=createSlice(
    {
        name:"cart",
        initialState,
        reducers:{
            addToCart:(state,action)=>{
                const found=state.items.find((item)=>(action.payload._id===item._id));
                if(found)
                {
                    found.quantity+=1;
                }else
                {
                  state.items.push({
                    ...action.payload,
                    quantity:1
                  });
                }
               
           } ,
            removeFromCart:(state,action)=>{
                 const found=state.items.find((item)=>(action.payload._id===item._id));
                 if(found.quantity===1)
                 {
                    state.items=state.items.filter((item)=>action.payload._id!==item._id);
                 }else
                 {
                    found.quantity-=1;
                 }
            },
            clearCart:(state,action)=>{
                state.items=[];
            },
        }
    }
)
export const {addToCart,removeFromCart,clearCart}=cartSlice.actions;
export default cartSlice.reducer;