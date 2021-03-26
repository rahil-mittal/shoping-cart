import {cartModel} from './model.js';
import {cartView} from './view.js';

let cartController={
    init:function(){
            cartView.init(cartModel.data);
            //console.log(cartModel.data);
    },
    getQuant:function(){
        return cartModel.q;
    },
    increment:function(data,id,price){
        let q=this.getQuant();
        q[id]++;
        cartView.render(data,id,price,...q);
    },
    decrement:function(data,id,price){
        if(cartModel.q[id]==1)
        {
            this.remove(id,data,price);
        }
        if(cartModel.q[id]>0)
        {
            let q=this.getQuant();
            q[id]--;
            cartView.render(data,id,price,...q);
        }
    },
    remove:function(id,data,price){

        let q=this.getQuant();
        q[id]=0;
        cartView.render(data,id,price,...q);
        document.getElementById("itemContainer"+id).style.display="none";
    }
};

export {cartController};
