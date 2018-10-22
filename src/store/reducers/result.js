import * as actionTypes from '../actions';

const initialState = {
  results: []
};

// REDUCER
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_RESULT:
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: action.counterValue})
        };

    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter( (item) => item.id !== action.id)
      return {
        ...state,
        results: updatedArray
    };

    default:
      return state;
  }
  
};

export default reducer;
