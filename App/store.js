const reduxtoolkit = require('@reduxjs/toolkit');
const configureStore= reduxtoolkit.configureStore;
const pizzaSlice = require('./features/pizza/pizzaSlice');
const burgerSlice= require('./features/burgger/burgerSlice');
const burgerReducer= burgerSlice.reducers;
const pizzaReducer= pizzaSlice.reducers;
const productReducer= require('./features/product/productSlice').reducers;
 
const store=configureStore({
    reducer:{
        piazza:pizzaReducer,
        burger:burgerReducer,
        product:productReducer,
    }
});

module.exports = store;