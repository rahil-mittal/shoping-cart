import React, { Component } from 'react';

class Button extends Component{

    constructor(props)
    {
      super(props);
      this.state=({items:this.props.items});
      this.addToCart=this.addToCart.bind(this);
    }
    addToCart()
    {
          if(!this.props.items.includes(this.props.data))     
          {
            this.setState(
              {items:this.props.items.push(this.props.data)});
           localStorage.setItem("ItemsData",JSON.stringify(this.props.items));
          }
           console.log(this.props.items);
                
       
        //console.log(this.state.items);
    }
    render()
    {
      const addTo=(<button id={"addtoCart"+this.props.data.id}  onClick={this.addToCart}>
      Add to Cart
    </button>);
      return(
        <div>
          {addTo}
        </div>
      );
    }
  }

  export default Button;