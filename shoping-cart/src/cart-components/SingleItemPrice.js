import React, { Component } from 'react';
import './../style.css';

class SingleItemPrice extends Component
{
    constructor(props)
    {
        super(props);
        this.state={quant:this.props.itemData.quantity};
        
    }
 
    componentDidUpdate(prevProps) {
        
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (prevProps.itemData.quantity !== this.props.itemData.quantity) {
          this.setState({ quant: this.props.itemData.quantity});
        }
      }
    render()
    {
        
        console.log("rerender");
        return(
            <div id="itee">
             ${(this.props.itemData.price).toFixed(2)}
            </div>
        );
    }
}

export default SingleItemPrice;