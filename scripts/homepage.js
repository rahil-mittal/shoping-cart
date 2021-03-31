import Button from './addToCart.js';

fetch('./cart.json').then(response => {
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
      
  }
  render(){ 
    const det=this.props.data.map((data)=>
        <div key={data.id} className="itemDescriptionHome">
            <img className="itemImage"
              src={data.image}
            />
            <div className="details">
              {data.name}
            </div>
            <div className="price">
              ${data.price}
            </div>
            <Button data={data}  />
        </div>
        
    );     
  return(
      <div className="contentHomePage">
        {det}
      </div>
  );
  }
}
function buildPage(data){
  
      ReactDOM.render(
      <ItemContainer data={data}/>,
      document.getElementsByClassName("contentHomePage")[0]);

};


