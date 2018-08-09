import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import UsersList from './UserList'

const usersReducer = (state,action)=>{
    if(!state){
        return [];
    }
    switch (action.type){
        case 'ADD_USER':
            return [...state,action.user]
        case 'DELETE_USER':
            return [...state.slice(0,action.index), ...state.slice(action.index+1)]
        case 'UPDATE_USER':
            return state.map((user,index)=>{
                if(index === action.index){
                    return {...user, ...action.user};
                }else{
                    return user;
                }
            })
        default:
            return state // 没有修改，返回原来的对象
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                <UsersList/>
            </div>
        )
    }
}
const store = createStore(usersReducer);
ReactDOM.render(
   <Provider store = {store}>
        <Index/>
   </Provider>,
    document.getElementById('root')
);

