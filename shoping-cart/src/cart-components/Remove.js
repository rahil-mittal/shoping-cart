import React, { Component } from 'react';
import './../style.css';

class Remove extends Component
{   
    constructor(props)
    {
        super(props);
        this.state={itemData:this.props.itemData};

    }
    render()
    {
        const button=<button onClick={this.props.removeFromCart(this.props.itemData)}>Remove</button>
        return(
            <div>
                {button}
            </div>
        );
    }

}

export default Remove;