

var objects=[{
    id:0,
    name:"bagpack",
    price:39.99,
    quantity:0
},{
    id:1,
    name:"tshirt",
    price:29.99,
    quantity:0
}];

function round(places){
	return function(number){
		return Number(number.toFixed(places));
	};
}
const roundTo2=round(2);


function getPrice(){
var quan1=document.getElementById('quantity1').value;
var quan2=document.getElementById('quantity2').value;
var tot1=objects[0].price*quan1;
var tot2=objects[1].price*quan2;
objects[0].quantity=quan1;
objects[1].quantity=quan2;
document.getElementById("displayPrice1").innerHTML=roundTo2(tot1);
document.getElementById("displayPrice2").innerHTML=tot2;
document.getElementById("displayTotal").innerHTML=roundTo2(tot1+tot2);
var myJSON1 = JSON.stringify(objects[0]);
var myJSON2 = JSON.stringify(objects[1]);
console.log(myJSON1);
console.log(myJSON2);
}

