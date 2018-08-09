import React, {Component} from "react";
import {connect} from 'react-redux'
class User extends Component {
    render () {
        const { user, deleteUser, index} = this.props;
        return (
            <div>
                <div>Name: {user.Username}</div>
                <div>Age: {user.Age}</div>
                <div>Gender: {user.Gender}</div>
                <button onClick={()=>deleteUser(index)}>删除</button>
            </div>
        )
    }
}
class UsersList extends Component {
    constructor(){
        super();
        this.state = {Username:'',Age: '', Gender: ''};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this)
    }
    handleAddUser(){
        this.props.addUser(this.state);
    }
    handleNameChange(e){
        this.setState({
            Username:e.target.value
        })
    }
    handleAgeChange(e){
        this.setState({
            Age:Number(e.target.value)
        })
    }
    handleGenderChange(e){
        this.setState({
            Gender: e.target.value
        })
    }
    render () {
        return (
            <div>
                {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
                <div className='add-user'>
                    <div>Username: <input type='text' onChange={this.handleNameChange} value={this.state.Username}/></div>
                    <div>Age: <input type='number' onChange={this.handleAgeChange} value={this.state.Age}/></div>
                    <div onChange={this.handleGenderChange}>Gender:
                        <label>Male: <input type='radio' name='gender' value='male'/></label>
                        <label>Female: <input type='radio' name='gender' value='female'/></label>
                    </div>
                    <button onClick={this.handleAddUser.bind(this)}>增加</button>
                </div>
                <div className='users-list'>
                    {this.props.users.map((user, index)=>
                        <User user={user} deleteUser={this.props.deleteUser} index={index} key={index}/>
                    )}
                </div>
            </div>
        )
    }
}
//需要注入的props
const mapStateToProps = (state) => {
    return {
        users: state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addUser: (user)=> {
            dispatch({type: 'ADD_USER', user: user})
        },
        deleteUser: (index)=>{
            dispatch({type: 'DELETE_USER', index: index})
        }
    }
}
UsersList = connect(mapStateToProps,mapDispatchToProps)(UsersList);
export default UsersList