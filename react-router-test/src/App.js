import React, {Component} from 'react';
import {Link, Route,Switch} from 'react-router-dom'
import Category from './component/Category'
import Products from './component/Products'

export default class App extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/category">Category</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
                <Switch>
                    <Route path="/category" component={Category}/>
                    <Route path="/products" component={Products}/>
                </Switch>
            </div>
        )
    }
}
