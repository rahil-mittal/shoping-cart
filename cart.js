

fetch('./data.json').then(response => {
    return response.json();
  }).then(data => {
      buildCart(data),
      checkout(data);
  }).catch(err => {
      console.log(err);
  });



function buildCart(data){
    var q=[];
    
    return function(){
    data.forEach(({id,image,name,size,price,quantity}) =>{
        //var q=[];
        q.push(quantity);
        //console.log(this.q);
        //Item Container created
        let itemContainer = document.createElement("div");
        itemContainer.className="itemDescription";

        //Img created
        let imgdiv = createImgDiv(image);

        //Deatils created
        let details=createDetailsDiv(name,size,price);

        //Quant details
        let quant=createQuantDiv(id,...q);
        
        //Total Single item price
        let TPrice=createTPriceDiv(id,price,...q);

        itemContainer.appendChild(imgdiv);
        itemContainer.appendChild(details);
        itemContainer.appendChild(quant);
        itemContainer.appendChild(TPrice);

        document.getElementsByClassName("items")[0].appendChild(itemContainer);

        displayNetDetails(data,...q);

        document.getElementById("inc"+id).onclick=()=>{
            q[id]++;
            document.getElementById("show"+id).innerText=q[id];
            document.getElementById("singleItem"+id).innerText='$'+(price*q[id]).toFixed(2);
            data[id].quantity=q[id];
            displayNetDetails(data,...q);
        }

        document.getElementById("dec"+id).onclick=()=>{
            if(q[id]>0)
            {
                q[id]--;
                document.getElementById("show"+id).innerText=q[id];
                document.getElementById("singleItem"+id).innerText='$'+(price*q[id]).toFixed(2);
                data[id].quantity=q[id];
                displayNetDetails(data,...q);
            }
        }
            
    })}();

};

function createImgDiv(image)
{
    let imgdiv=document.createElement("div");
        imgdiv.className="descriptionValue";
        
        let img = document.createElement("img");
        img.className="itemImage";
        img.src=image;

        imgdiv.appendChild(img);

        return imgdiv;
}

function createDetailsDiv(name,size,price)
{
        let details =document.createElement("div");
        details.className="descriptionValue";

        let namee=document.createElement("span");
        namee.innerText=name;

        let sizee=document.createElement("span");
        sizee.innerText=size;

        let pricee=document.createElement("span");
        pricee.innerText="$"+price;

        details.appendChild(namee);
        details.appendChild(sizee);
        details.appendChild(pricee);

        return details;
}

function createQuantDiv(id,...q)
{
    let quant=document.createElement("div");
    quant.className="descriptionValue";
    quant.classList.add("quant");

    //Decrement button created
    let dec=document.createElement("button");
    dec.setAttribute("id","dec"+id);
    let t1 = document.createTextNode("-");
    dec.appendChild(t1);
    quant.appendChild(dec);

    //Quntity value shown
    let show=document.createElement("div");
    show.setAttribute("id","show"+id);
    show.innerText=q[id];
    quant.appendChild(show);

    //Increment button created
    let inc=document.createElement("button");
    let t2 = document.createTextNode("+");
    inc.setAttribute("id","inc"+id);
    inc.appendChild(t2);
    quant.appendChild(inc);

    return quant;
}

function createTPriceDiv(id,price,...q)
{
    let TPrice=document.createElement("div");
    TPrice.className="descriptionValue";
    TPrice.setAttribute("id","singleItem"+id);
    TPrice.innerText='$'+(price*q[id]).toFixed(2);

    return TPrice;
}

//To display net details
function displayNetDetails(data,...q)
{
    document.getElementById("displayNetQuan").innerText=q[0]+q[1];
    document.getElementById("displayTotal").innerText='$'+(data[0].price*q[0]+data[1].price*q[1]).toFixed(2);
}

function checkout(){
    
    console.log(data);
}

