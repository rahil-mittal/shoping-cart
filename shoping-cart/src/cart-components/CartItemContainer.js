
import React, { Component } from 'react';
import Quantity from './Quantity.js';
import SingleItemPrice from './SingleItemPrice';

import './../style.css';


class CartItemContainer extends Component{
    constructor(props)
    {
        super(props);
        this.state={data:this.props.data,netQuant:this.props.data.length,netPrice:0};
        this.netChange=this.netChange.bind(this);
        this.removeFromCart=this.removeFromCart.bind(this);
    }

     removeFromCart=(itemDataId)=>
    {
          let Newdata=this.state.data.filter((data)=>{
            return data.id!==itemDataId
          });   
          console.log("removed");
          this.setState({data:Newdata});
          this.netChange();
          
    }

    netChange(){
      console.log("change");
      let totalQ=0;
      this.state.data.forEach((item) => {
        totalQ+=item.quantity;});

    let totalP=0;
      this.state.data.forEach((item) => {
        totalP+=(item.price);});

    this.setState({netQuant:totalQ,netPrice:totalP});
    }
    
    render(){
        const item=this.state.data.map((data)=>
        <div key={data.id} className="itemDescription">
            <img className="itemImage"
              src={data.image}
              alt='itemImage'
            />
            <div className="descriptionValue">
              <div className="details">
                <b>{data.name}</b>
              </div>
              <div className="price">
                ${(data.pricePerItem).toFixed(2)}
              </div>
              <div className="size">
                {data.size}
              </div>
            </div>
            <div className="descriptionValue">
                  <Quantity mainData={this.state.data} itemData={data} netChange={this.netChange}/>
              </div>
              <div className="descriptionValue">
                <SingleItemPrice itemData={data}/>
              </div>
              <div className="descriptionValue">
                  <button onClick={()=>this.removeFromCart(data.id)}>Remove</button>
              </div>

        </div>);
       
        return(
            <div className="contenet">
                <div className="conentBasket">
                    <span className="contentHome">Home/cart</span>
                    <span><b>YOUR BASKET</b></span>
                </div>
                <hr></hr>
              <div className="contentHomePage">
                {item}
             </div>
               <div className="bill">
                  <div className="billItem">
                      <div>NET QUANTITY</div>
                      <div id="displayNetQuan">
                            {this.state.netQuant}
                      </div>
                      <div>NET COST</div>
                      <div id="displayTotal">
                            ${(this.state.netPrice).toFixed(2)}
                      </div>
                  </div>
                </div>
                <button className="button" id="checkOut">
                          PROCEED TO CHECKOUT
                </button>
             </div>
        );
    }
}



export default CartItemContainer;