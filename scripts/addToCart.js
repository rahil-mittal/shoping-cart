class Button extends React.Component{

    constructor(props)
    {
      super(props);
      this.state={items:[]};
      this.addToCart=this.addToCart.bind(this);
    }
    addToCart()
    {
          
            this.setState(state=>{
                    let item=state.items;
                    item=item.push(this.props.data);
                    return{item};
                  });
           localStorage.setItem("ItemsData",JSON.stringify(this.state.items));
           //console.log(data);
                
       
        console.log(this.state.items);
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