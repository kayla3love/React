import React, {Component} from 'react'
import CommentList from '../components/CommentList'
import {connect} from 'react-redux'
import {initialDispatch,deleteDispatch} from "../reducers/comments";
import PropTypes from 'prop-types';

class CommentListContainer extends Component{
    static propTypes = {
        comments: PropTypes.array,
        onInitialComments: PropTypes.func,
        onDeleteComment:PropTypes.func
    }
    componentWillMount(){
        this._loadComments();
    }
    _loadComments () {
        let comments = localStorage.getItem('comments')
        comments = comments ? JSON.parse(comments) : []
        this.props.onInitialComments(comments)
    }
    handleOnDelete(index){
        const {comments} = this.props;
        const newComments = [...comments.slice(0,index),...comments.slice(index+1)];
        localStorage.setItem('comments', JSON.stringify(newComments))
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index);
        }
    }
    render(){
        const {comments} = this.props;
        return(
            <CommentList comments={comments} handleOnDelete={this.handleOnDelete.bind(this)}/>
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
        onInitialComments:(comments)=>{
            dispatch(initialDispatch(comments))
        },
        onDeleteComment:(index)=>{
            dispatch(deleteDispatch(index))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentListContainer);