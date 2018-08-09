import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './containers/Header'
import Content from './containers/Content'
import {Provider} from "./react-redux";

function createStore(reducer){
    let state = null;
    const listeners = [];
    const getState = ()=> state;
    const subscribe = (listener)=>listeners.push(listener);
    const dispatch = (action)=>{
        state = reducer(state, action);
        listeners.forEach((listener)=>listener());
    }
    dispatch({});
    return {getState, subscribe, dispatch};
}
const themeReducer = (state, action)=>{
    if(!state){
        return{
            themeColor: 'red'
        }
    }
    switch (action.type){
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor};
        default:
            return state;
    }
}
class Index extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}
const store = createStore(themeReducer)
ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('root')
);