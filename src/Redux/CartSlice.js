import { createSlice } from "@reduxjs/toolkit";




let initialState= {
    cartItems:[],
    totalAmount:0,
    totalQuantity:0
}

let CartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{


        delete: (state,action)=>{
            const id =action.payload
            const existingItem=state.cartItems.find((item)=>item.id===id)
            if(existingItem){
                state.cartItems=state.cartItems.filter((item)=> item.id ===!id)
                state.totalQuantity= state.totalQuantity - existingItem.quantity
    
            }
    
    
            state.totalAmount=state.cartItems.reduce((total,item)=> total+ Number(item.price)* Number(item.quantity),0);
    
        }, 


        addItem:(state,action)=>{
            const newItem= action.payload
            const existItem=state.cartItems.find(item=> item.id===newItem.id)
            state.totalQuantity++  
            if(!existItem){
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl:newItem.imgUrl,
                    quantity:1,
                    totalPrice: newItem.price,
                    price: newItem.price


                

                })
            }
                else{
                    existItem.quantity++
                    existItem.totalPrice=Number(existItem.totalPrice)+ Number(newItem.price)

                }

                state.totalAmount=state.cartItems.reduce((total,item)=> total+ Number(item.price)* Number(item.quantity),0);
            
        },


        

    



      
    },



   
})



export default CartSlice.reducer

export const CartAction= CartSlice.actions