fetch('./../cart.json').then(response => {
    return response.json();
  }).then(data => {
      controller.init(data);
  }).catch(err => {
      console.log(err);
  });
  class App extends React.Component {
    render(){
      return(
        <div className="app-content">
          <h1>Hello, ninjas!</h1>
          <p>Random number: { Math.random() * 10 }</p>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementsByClassName('contentHomePage')[0]);

  var model={
        items:[],
  };

  localStorage.setItem("ItemsData",JSON.stringify(model.items));

  var controller={

    init:function(data){
            view.viewHomePage(data);
    },
    addToCart:function(data){
        if(!model.items.includes(data))
        {
            model.items.push(data);
            localStorage.setItem("ItemsData",JSON.stringify(model.items));
        }
        console.log(model.items);
    }
  };
  var view={
    viewHomePage:function(data){
        data.forEach((data) =>{
            //var q=[];
            //console.log(q);
    
            //Item Container created
            let itemContainer = document.createElement("div");
            itemContainer.className="itemDescriptionHome";
    
            //Img created
            let imgdiv = this.createImgDiv(data.image);
    
            //Deatils created
            let details =document.createElement("div");
            details.innerText=data.name;
    
            //price 
            let pricee=document.createElement("div");
            pricee.innerText="$"+data.price;
    
            //Add to cart button
            let add=document.createElement("button");
            add.innerText="Add To Cart";
            add.id="add"+data.id;
    
            itemContainer.appendChild(imgdiv);
            itemContainer.appendChild(details);
            itemContainer.appendChild(pricee);
            itemContainer.appendChild(add);
    
            document.getElementsByClassName("contentHomePage")[0].appendChild(itemContainer);

            add.addEventListener('click',function(){
                controller.addToCart(data);
            });
                
        });
    },
    
    createImgDiv:function(image){  
        let imgdiv=document.createElement("div");
        
        let img = document.createElement("img");
        img.className="itemImage";
        img.src=image;

        imgdiv.appendChild(img);

        return imgdiv;
    }
  };




