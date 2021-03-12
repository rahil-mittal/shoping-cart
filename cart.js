

fetch('./data.json').then(response => {
    return response.json();
  }).then(data => {
      buildCart(data);
      checkout(data);
  }).catch(err => {
      console.log(err);
  });


function round(places){
	return function(number){
		return Number(number.toFixed(places));
	};
}
const roundTo2=round(2);
var totalPrice=0;
var q=[];
function buildCart(data){

    data.forEach(({id,image,name,size,price,quantity}) =>{
        q.push(quantity);
        let itemContainer = document.createElement("div");
        itemContainer.className="itemDescription";

        let imgdiv = document.createElement("div");
        imgdiv.className="descriptionValue";
        
        let img = document.createElement("img");
        img.className="itemImage";
        img.src=image;

        imgdiv.appendChild(img);


        let details=document.createElement("div");
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

        let quant=document.createElement("div");
        quant.className="descriptionValue";
        quant.classList.add("quant");

        let dec=document.createElement("button");
        dec.setAttribute("id","dec"+id);
        
        let t1 = document.createTextNode("-");

        dec.appendChild(t1);
        quant.appendChild(dec);

        let show=document.createElement("div");
        show.setAttribute("id","show"+id);
        
        show.innerText=q[id];
        quant.appendChild(show);

        
        let inc=document.createElement("button");
        let t2 = document.createTextNode("+");
        inc.setAttribute("id","inc"+id);
       
        inc.appendChild(t2);
        quant.appendChild(inc);
        
        let TPrice=document.createElement("div");
        TPrice.className="descriptionValue";
        TPrice.setAttribute("id","singleItem"+id);
        TPrice.innerText='$'+roundTo2(price*q[id]);

        itemContainer.appendChild(imgdiv);
        itemContainer.appendChild(details);
        itemContainer.appendChild(quant);
        itemContainer.appendChild(TPrice);

        document.getElementsByClassName("items")[0].appendChild(itemContainer);

        document.getElementById("displayNetQuan").innerText=q[0]+q[1];
        document.getElementById("displayTotal").innerText='$'+roundTo2(data[0].price*q[0]+data[1].price*q[1]);

        document.getElementById("inc"+id).onclick=()=>{
            q[id]++;
            document.getElementById("show"+id).innerText=q[id];
            document.getElementById("singleItem"+id).innerText='$'+roundTo2(price*q[id]);
            data[id].quantity=q[id];
            document.getElementById("displayNetQuan").innerText=q[0]+q[1];
            document.getElementById("displayTotal").innerText='$'+roundTo2(data[0].price*q[0]+data[1].price*q[1]);
        }

        document.getElementById("dec"+id).onclick=()=>{
            if(q[id]>0)
            {
                q[id]--;
                document.getElementById("show"+id).innerText=q[id];
                document.getElementById("singleItem"+id).innerText='$'+roundTo2(price*q[id]);
                data[id].quantity=q[id];
                document.getElementById("displayNetQuan").innerText=q[0]+q[1];
                document.getElementById("displayTotal").innerText='$'+roundTo2(data[0].price*q[0]+data[1].price*q[1]);
            }
            data[id].quantity=q[id];
        }
            
    });

}

function checkout(){
    
    console.log(data);
}

