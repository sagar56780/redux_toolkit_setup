const store= require('./App/store');
const pizzSlice= require('./App/features/pizza/pizzaSlice')
const pizzaAction= pizzSlice.actions;
const burgerAction= require('./App/features/burgger/burgerSlice').actions;


console.log('initalstate',store.getState().piazza);


store.subscribe(()=>console.log('updated state',store.getState()));


store.dispatch(pizzaAction.pizzaOrder())
store.dispatch(pizzaAction.pizzaOrder())

store.dispatch(pizzaAction.pizzaOrder())

store.dispatch(pizzaAction.pizzaOrder())
store.dispatch(burgerAction.orderBurger());


