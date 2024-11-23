const reduxtoolkit = require('@reduxjs/toolkit');
const configureStore= reduxtoolkit.configureStore;
const pizzaSlice = require('./features/pizza/pizzaSlice');
const pizzaReducer= pizzaSlice.reducers;
 
const store=configureStore({
    reducer:{
        piazza:pizzaReducer
    }
});

module.exports = store;