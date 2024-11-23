const reduxtoolkit= require('@reduxjs/toolkit')
const createSlice= reduxtoolkit.createSlice;
const initialState={
    pizzabase:100,
}

const pizzaSlice=createSlice({
    name:'pizza',
    initialState:initialState,
    reducers:{
        pizzaOrder:(state)=>{
            state.pizzabase--;
        }


    }

 

})
module.exports  = {
    reducers:pizzaSlice.reducer,
    actions:pizzaSlice.actions
}