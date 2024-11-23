const store= require('./App/store');
const pizzSlice= require('./App/features/pizza/pizzaSlice')
const action= pizzSlice.actions;


console.log('initalstate',store.getState().piazza);


store.subscribe(()=>console.log('updated state',store.getState()));


store.dispatch(action.pizzaOrder())
store.dispatch(action.pizzaOrder())

store.dispatch(action.pizzaOrder())

store.dispatch(action.pizzaOrder())


