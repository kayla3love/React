//因为内部要调用smart组件themeSwitch，所以content组件作为smart组件
import React, {Component} from 'react'
import ThemeSwitch from './ThemeSwitch'
import PropTypes from 'prop-types'
import {connect} from '../react-redux'

class Content extends Component{
    static propTypes={
        themeColor:PropTypes.string
    }
    render(){
        return(
            <div>
                <p style={{color: this.props.themeColor}}>小书内容</p>
                <ThemeSwitch/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        themeColor: state.themeColor
    }
}
Content = connect(mapStateToProps)(Content);
export default Content