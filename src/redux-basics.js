const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (currentState = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + 1
        };
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter += action.value
        };
    }
    // if (action.type === 'ADD_COUNTER') {
    //     initialState.counter += action.value;
    // }
    return currentState;
}

// Store
const store = createStore(rootReducer);
console.log("createStore =", store.getState());

// Subscription
store.subscribe( ()=> {
    console.log("SUBSCRIPTION =", store.getState());
} );

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log("dispatch =", store.getState());

