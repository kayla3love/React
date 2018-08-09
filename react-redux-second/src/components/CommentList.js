import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'


export default class CommentList extends Component{
    static propTypes = {
        comments: PropTypes.array
    }
    render(){
        const {comments,handleOnDelete} = this.props
        return(
            <div>
                {comments.map((comment,index)=>
                    <Comment comment={comment} key={index} index={index} handleOnDelete={handleOnDelete}/>
                )}
            </div>
        )
    }
}