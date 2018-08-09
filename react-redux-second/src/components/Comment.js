import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../index.css'

export default class Comment extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired,
        handleOnDelete:PropTypes.func,
        index: PropTypes.number
    }
    constructor(props) {
        super(props);
        this.state = {timeString: ''}
    }
    componentWillMount () {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount () {
        clearInterval(this._timer)
    }

    _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    handleOnDelete(index){
        if(this.props.handleOnDelete){
            this.props.handleOnDelete(index);
        }
    }
    render(){
        const {comment,index}= this.props;
        return(
            <div className='commentItem'>
                <span className='username'>{comment.username}:</span>
                <span className='content'>{comment.content}</span>
                <span className='deleteComment' onClick={this.handleOnDelete.bind(this,index)}>删除</span>
                <div className='recordTime'>
                    {this.state.timeString}
                </div>
            </div>
        )
    }
}