import React, { Component } from 'react';
import './../style.css';


class Quantity extends Component
{   
    constructor(props)
    {
        super(props);
        this.state={quant:1,price:this.props.itemData.price};
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    increment(){
        this.setState((state,props)=>({quant:state.quant+1}));
        this.props.itemData.quantity=this.state.quant+1;   
        this.props.itemData.price=((this.state.quant+1)*this.state.price);
        this.props.netChange();
    }
    decrement(){
        if(this.state.quant>0)
        {
            this.setState((state,props)=>({quant:state.quant-1}));
            this.props.itemData.quantity=this.state.quant-1;      
            this.props.itemData.price=((this.state.quant-1)*this.state.price);
            this.props.netChange();
        }
    }
    render()
    {
        
        const quan=(
            <div className="descriptionItem">
                <button onClick={this.increment} >
                    +
                </button>
                <div>
                    {this.state.quant}
                </div>
                <button onClick={this.decrement} >
                    -
                </button>

            </div>);
        return(
     
            <div>
                {quan}
            </div>
           
               
        );
    }

}

export default Quantity;