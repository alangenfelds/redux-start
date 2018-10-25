export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";


export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
}

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
}

// create action creator for thunk's dispatch method
export const saveResult = (counter) => {
    return {
        type: STORE_RESULT,
        counterValue: counter
    }
}

export const storeResult = (counter) => {
    return function (dispatch) {
        setTimeout( ()=> {
            dispatch(saveResult(counter));
        }, 100);
    }


    
}

export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        id: resElId
    }
}