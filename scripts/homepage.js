fetch('./../cart.json').then(response => {
    return response.json();
  }).then(data => {
      buildPage(data)
  }).catch(err => {
      console.log(err);
  });


//var q=[];
function buildPage(data){
    
    var q=[];
    return function(){
    data.forEach(({id,image,name,size,price,quantity}) =>{
        //var q=[];
        q.push(quantity);
        //console.log(q);

        //Item Container created
        let itemContainer = document.createElement("div");
        itemContainer.className="itemDescriptionHome";

        //Img created
        let imgdiv = createImgDiv(image);

        //Deatils created
        let details =document.createElement("div");
        details.innerText=name;

        //price 
        let pricee=document.createElement("div");
        pricee.innerText="$"+price;

        let add=document.createElement("button");
        add.innerText="Add To Cart";

        itemContainer.appendChild(imgdiv);
        itemContainer.appendChild(details);
        itemContainer.appendChild(pricee);
        itemContainer.appendChild(add);

        document.getElementsByClassName("contentHomePage")[0].appendChild(itemContainer);
            
    })}();

}

function createImgDiv(image)
{
    let imgdiv=document.createElement("div");
        
    let img = document.createElement("img");
    img.className="itemImage";
    img.src=image;

    imgdiv.appendChild(img);

    return imgdiv;
}


