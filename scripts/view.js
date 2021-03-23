

import {cartController} from './controller.js';

var cartView={
    init:function(data){
        var q=cartController.getQuant();
        if(data[0]==null)
        {
            document.getElementsByClassName("items").innerText="ADD ITEMS IN THE CART";
        }
        data.forEach(({id,image,name,size,price,quantity}) =>{
                q[id]=quantity;
                let itemContainer = document.createElement("div");
                itemContainer.className="itemDescription";
                itemContainer.id="itemContainer"+id;
        
                //Img created
                let imgdiv = this.createImgDiv(image);
        
                //Deatils created
                let details=this.createDetailsDiv(name,size,price);
        
                //Quant details
                let quant=this.createQuantDiv(id,...q);
                
                //Total Single item price
                let TPrice=this.createTPriceDiv(id,price,...q);
        
                let remove=this.remove(id);

                itemContainer.appendChild(imgdiv);
                itemContainer.appendChild(details);
                itemContainer.appendChild(quant);
                itemContainer.appendChild(TPrice);
                itemContainer.appendChild(remove);
        
                document.getElementsByClassName("items")[0].appendChild(itemContainer);
        
                this.displayNetDetails(data,...q);

                document.getElementById("remove"+id).addEventListener('click',function(){
                    cartController.remove(id,data,price);
                });

                document.getElementById("inc"+id).addEventListener('click',function(){
                        cartController.increment(data,id,price);
                });
                document.getElementById("dec"+id).addEventListener('click',function(){
                    cartController.decrement(data,id,price);

            });
                
        });
        //this.render();
    },
    render:function(data,id,price,...q){   
                
                    document.getElementById("show"+id).innerText=q[id];
                    document.getElementById("singleItem"+id).innerText='$'+(price*q[id]).toFixed(2);
                    //data[id].quantity=q[id];
                    this.displayNetDetails(data,...q);
           
    },
    remove:function(id){
        let rem=document.createElement("button");
        rem.className="descriptionValue";
        rem.setAttribute("id","remove"+id);
        rem.innerText="Remove";

        return rem;
    },
    createImgDiv:function(image){
        let imgdiv=document.createElement("div");
        imgdiv.className="descriptionValue";
        
        let img = document.createElement("img");
        img.className="itemImage";
        img.src=image;

        imgdiv.appendChild(img);

        return imgdiv;
    },
    createDetailsDiv:function(name,size,price){
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
    },
    createQuantDiv:function(id,...q){
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
    },
    createTPriceDiv:function(id,price,...q){
        let TPrice=document.createElement("div");
        TPrice.className="descriptionValue";
        TPrice.setAttribute("id","singleItem"+id);
        TPrice.innerText='$'+(price*q[id]).toFixed(2);

        return TPrice;
    },

    displayNetDetails:function(data,...q){
        let netQuant=0;
        for(let i=0;i<q.length;i++)
        {
            if(typeof q[i]=='number')
            {
                netQuant+=q[i];
            }
        }
        let netPrice=0;
        for(let i=0;i<data.length;i++)
        {
            if(typeof q[data[i].id]=='number')
            {
                netPrice+=(q[data[i].id]*data[i].price);
            }
        }
        document.getElementById("displayNetQuan").innerText=netQuant;
        document.getElementById("displayTotal").innerText='$'+netPrice.toFixed(2);
    }
};

export{cartView};
