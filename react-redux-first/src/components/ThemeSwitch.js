import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component{
    static propTypes={
        themeColor:PropTypes.string,
        onSwitchColor: PropTypes.func
    }
    handleClick(color){
        this.props.onSwitchColor(color);
    }
    render(){
        return(
            <div>
                <button style={{color: this.props.themeColor}} onClick={this.handleClick.bind(this,'blue')}>蓝色</button>
                <button style={{color: this.props.themeColor}} onClick={this.handleClick.bind(this,'red')}>红色</button>
            </div>
        )
    }
}
export default ThemeSwitch