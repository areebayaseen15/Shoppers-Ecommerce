import { createSlice } from "@reduxjs/toolkit"
import { ProductData } from "../../type"

interface UserInfo{
    id:string,
    name:string,
    email:string
}

interface InitialState{
    cart:ProductData[],
    wishList:ProductData[],
    userInfo: UserInfo | null
}
const initialState : InitialState ={
    cart:[],
    wishList:[],
    userInfo:null,
}

export const shoppersSlice = createSlice({
    name:"shoppers",
    initialState,
    reducers:{
        addToCart:(state , action)=>{
            // state.cart = action.payload
            const existingProduct =state.cart.find((item)=> item._id ===action.payload._id)

            if(existingProduct){
                    existingProduct.quantity += 1
            }else{
                state.cart.push(action.payload)
            }
        },
        increaseQuantity : (state  , action)=>{
            const existingProduct = state.cart.find((item)=>
            item._id === action.payload)
            
            if(existingProduct){
                existingProduct.quantity += 1
            }
        },

        decreaseQuantity : (state  , action)=>{
            const existingProduct = state.cart.find((item)=>
            item._id === action.payload)
            
            if(existingProduct){
                existingProduct.quantity -= 1
            }
        },
        removeFromCart :(state , action)=>{
               state.cart = state.cart.filter((item)=>item._id !== action.payload)
        },
        resetCart:(state)=>{
            state.cart =[]
        },

        addToWishList:(state , action)=>{
            // state.cart = action.payload
             const existingProduct =state.wishList.find((item)=> item._id ===action.payload._id)

                 state.cart.push(action.payload)
         },
         resetWishList:(state)=>{
            state.wishList = []
         },
         addUser:(state , action)=>{
            state.userInfo = action.payload
         },
        removeUser:(state )=>{
            state.userInfo = null
         }
    }
})

export const {addToCart , increaseQuantity , decreaseQuantity , removeFromCart , resetCart
    ,removeUser , addToWishList , addUser , resetWishList ,
} = shoppersSlice.actions;
export default shoppersSlice.reducer;