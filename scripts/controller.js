import {cartModel} from './model.js';
import {cartView} from './view.js';

let cartController={
    init:function(){
        cartModel.fetchData().then(data=>{
            cartView.init(data);
        });
    },
    getQuant:function(){
        return cartModel.q;
    },
    increment:function(data,id,price,...q){
        var q=this.getQuant();
        cartModel.q[id]++;
        cartView.render(data,id,price,...q);
    },
    decrement:function(data,id,price,...q){
        if(cartModel.q[id]>0)
        {
            var q=this.getQuant();
            cartModel.q[id]--;
            cartView.render(data,id,price,...q);
        }
    }
};

export {cartController};
