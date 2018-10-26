import * as actionTypes from './actionTypes';

// create action creator for thunk's dispatch method
export const saveResult = (counter) => {
    // CHANGE DATA - Can run ASYNC code here in Actions
    // Actions shouldn't update the state
    return {
        type: actionTypes.STORE_RESULT,
        counterValue: counter
    }
}

// create REDUX-THUNK dipatcher that will return action
export const storeResult = (counter) => {
    return function (dispatch, getState) {
        setTimeout( ()=> {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(counter));
        }, 2000 );
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: resElId
    }
}