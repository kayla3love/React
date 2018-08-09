import React, {Component} from 'react';

class Product extends Component{
    render(){
        const {match,data}=this.props;
        let product = data.find(p=>p.id == match.params.productId);
        let productData;
        if(product){
            productData = (
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <hr/>
                    <h4>{product.status}</h4>
                </div>
            )
        }else{
            productData = (
                <p>Sorry.product doesn't exist</p>
            )
        }
        return(
            <div>
                {productData}
            </div>
        )
    }
}
export default Product