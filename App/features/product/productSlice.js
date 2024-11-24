const { asyncThunkCreator } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

const createSlice=require('@reduxjs/toolkit').createSlice
const asyncThunk= require('@reduxjs/toolkit').createAsyncThunk;

 const productData= asyncThunk('product/productData',async ()=>{
     const res= axios.get('https://fakestoreapi.com/products').then(res=>console.log(res));
     return res;
})
const initialState={
    loading:false,
    error:'',
    products:[],
}


const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(productData.pending,(state)=>{
                state.loading=true;
        },
        builder.addCase(productData.fulfilled,(state,action)=>{
                state.loading=false;
                state.products=action.payload;
        }),
        builder.addCase(productData.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;

        })

        )
     
    }
})
module.exports= {
    reducers:productSlice.reducer,
    actions:productSlice.actions,
    productData:productData,
}
