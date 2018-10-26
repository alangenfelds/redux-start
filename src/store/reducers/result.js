import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter( (item) => item.id !== action.id)
  return updateObject(state, {results: updatedArray});
}

// REDUCER
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_RESULT:
    // CHANGE DATA - ONLY PURE SYNC CODE HERE in reducers
    // Reducers - should be the only place to update the STATE
        return {
            ...state,
            results: state.results.concat({id: new Date().getTime(), value: action.counterValue})
        };

    case actionTypes.DELETE_RESULT:
      // const updatedArray = state.results.filter( (item) => item.id !== action.id)
      // return updateObject(state, {results: updatedArray});
      return deleteResult(state, action);

    default:
      return state;
  }
  
};

export default reducer;
