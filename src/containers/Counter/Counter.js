import React, { Component } from 'react';
import { connect } from 'react-redux';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// import * as actionTypes from '../../store/actions/actions';
// import { increment } from '../../store/actions/actions';
// import { decrement } from '../../store/actions/actions';
// import { add } from '../../store/actions/actions';
// import { subtract } from '../../store/actions/actions';
import * as actionCreators from '../../store/actions/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub5Counter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ol>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ) )}
                    
                </ol>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch( actionCreators.increment() ),
        onDecrementCounter: () => dispatch( actionCreators.decrement() ),
        onAdd5Counter: () => dispatch( actionCreators.add(5) ),
        onSub5Counter: () => dispatch( actionCreators.subtract(5) ),
        onStoreResult: (counter) => dispatch(actionCreators.storeResult(counter)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);