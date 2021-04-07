
import './style.css';
import Main from './Main.js';
let data=[
  {
  id:0,
  image:"./assets/bag.jpeg",
  name:"COMMAND SKATE BACKPACK",
  size:"One Size",
  price:39.99,
  quantity:1,
  pricePerItem:39.99
},
{
  id:1,
  image:"./assets/tshirt.jpeg",
  name:"ROUND NECK CREW T-SHIRT",
  size:"S Size",
  price:19.99,
  quantity:1,
  pricePerItem:19.99
},
{
  id:2,
  image:"./assets/shoes.png",
  name:"SPORT SHOES",
  size:"UK8 Size",
  price:29.99,
  quantity:1,
  pricePerItem:29.99
},
{
  id:3,
  image:"./assets/jacket.jpg",
  name:"LEATHER JACKET",
  size:"S Size",
  price:59.99,
  quantity:1,
  pricePerItem:59.99
}

];

function App() {
  return (
    <div className="App">
      <Main data={data}/>
    </div>
  );
  }

export default App;
