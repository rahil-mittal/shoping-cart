import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ItemContainer from './homepage.js';
import CartItemContainer from './cart-components/CartItemContainer.js';


let cartData=JSON.parse(localStorage.getItem("ItemsData"));

class Main extends React.Component
{

  render(){
    return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path="/index.html" exact component={() => <ItemContainer data={this.props.data} />} />
        <Route path="/cart" exact component={() => <CartItemContainer data={cartData}/>} />
    </Switch>
  );
}
}

export default Main;