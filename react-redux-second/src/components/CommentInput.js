import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentInput extends Component{
    static defaultProps = {
        username:''
    }
    static propTypes={
        username: PropTypes.any,
        handleSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }
    constructor(props){
        super(props);
        this.state = {username:props.username, content:'' }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        if(this.props.handleSubmit){
            this.props.handleSubmit({...this.state, createdTime:+Date.now()})
        }
        this.setState({
            content: ''
        })
    }
    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }
    handleContentChange(e){
        this.setState({
            content: e.target.value
        })
    }
    handleUsernameBlur(e){
        if (this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(e.target.value)
        }
    }
    render(){
        return(
            <div className='commentInput'>
                <div className='inputItem'>
                    <span className='inputLabel'>用户名：</span>
                    <div className='inputContent'>
                        <input type='text' value={this.state.username} onChange={this.handleUsernameChange} onBlur={this.handleUsernameBlur}/>
                    </div>
                </div>
                <div className='inputItem'>
                    <span className='inputLabel'>评论内容：</span>
                    <div className='inputContent'>
                        <textarea value={this.state.content} onChange={this.handleContentChange}/>
                    </div>
                </div>
                <div className='buttonItem'>
                    <button className='submitButton' onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        )
    }
}