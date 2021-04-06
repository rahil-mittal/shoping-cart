import React, { Component } from 'react';
import Button from './AddToCart.js';

class ItemContainer extends Component{

  constructor(props)
  {
    super(props);
    this.state={items:[]};
  }

  render(){ 
    const det=this.props.data.map((data)=>
        <div key={data.id} className="itemDescriptionHome">
            <img className="itemImage"
              src={data.image}
              alt='itemImage'
            />
            <div className="details">
              {data.name}
            </div>
            <div className="price">
              ${data.price}
            </div>
            <Button data={data} items={this.state.items} />
        </div>
        
    );     
  return(
      <div className="contentHomePage">
        {det}
      </div>
  );
  }
}

export default ItemContainer;


