import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'

export default class Category extends Component{
    render(){
        const {match} = this.props;
        return(
            <div>
                <ul>
                    <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
                    <li><Link to={`${match.url}/boots`}>Boots</Link></li>
                    <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>
                </ul>
                <Route path={`${match.path}/:name`} render={({match})=><div>{match.params.name}</div>}/>
            </div>
        )
    }
}