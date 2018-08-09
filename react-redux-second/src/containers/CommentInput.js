import React, {Component} from 'react'
import CommentInput from '../components/CommentInput'
import {connect} from 'react-redux'
import {addDispatch} from "../reducers/comments";
import PropTypes from 'prop-types'


class CommentInputContainer extends Component{
    static propTypes = {
        comments: PropTypes.array,
        onAddComment: PropTypes.func
    }
    constructor(props){
        super(props);
        this.state={username:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
       this._loadUsername();
    }
    _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }
    _saveUsername (username) {
        localStorage.setItem('username', username)
    }
    handleSubmit(comment){
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const { comments } = this.props
        const newComments = [...comments,comment];
        localStorage.setItem('comments', JSON.stringify(newComments));
        if(this.props.onAddComment){
            this.props.onAddComment(comment);
        }
    }
    render(){
        return(
            <CommentInput
                username={this.state.username}
                handleSubmit ={this.handleSubmit}
                onUserNameInputBlur = {this._saveUsername.bind(this)}
            />
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        comments: state.comments
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onAddComment:(comment)=>{
            dispatch(addDispatch(comment))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentInputContainer);