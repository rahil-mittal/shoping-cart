fetch('./data.json').then(response => {
  return response.json();
}).then(data => {
    buildPage(data)
}).catch(err => {
    console.log(err);
});

let items=[];
localStorage.setItem("ItemsData",JSON.stringify(items));

class ItemContainer extends React.Component{
  
  constructor(props)
  {
      super(props);
      this.state={items:[]};
      this.addToCart=this.addToCart.bind(this);
  }
  addToCart(data){
      if(!this.state.items.includes(data))
      {
          this.setState({items:items.push(data)});
          localStorage.setItem("ItemsData",JSON.stringify(this.state.items));
      }
      console.log(this.state.items);
  }
  render(){      
  return(
      <div className="itemDescriptionHome">
          <img className="itemImage"
              src={this.props.data.image}
          />
          <div className="details">
              {this.props.name}
          </div>
          <div className="price">
              {this.props.data.price}
          </div>
          <input
              type='button'
              onClick={this.addToCart(this.props.data)}
          />
      </div>
  );
  }
}
//var q=[];
function buildPage(data){
  
  let q=[];
  data.forEach((data) =>{
      q.push(data.quantity);
      ReactDOM.render(
      <ItemContainer  q={q}
                      data={data}/>,
      document.getElementsByClassName("contentHomePage")[0]);
  });

};


