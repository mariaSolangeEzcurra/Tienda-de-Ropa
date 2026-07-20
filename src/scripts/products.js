const products =
document.querySelectorAll(".product-card");


const searchInput =
document.getElementById("searchInput");


const sort =
document.getElementById("sortProducts");



function filterProducts(category,btn){


document.querySelectorAll(".categories button")
.forEach(b=>b.classList.remove("active"));


btn.classList.add("active");



products.forEach(product=>{


if(
category==="all" ||
product.dataset.category===category
){

product.style.display="block";


}else{


product.style.display="none";


}


});


}




searchInput.addEventListener("keyup",()=>{


let value =
searchInput.value.toLowerCase();



products.forEach(product=>{


let name =
product.querySelector("h3")
.textContent
.toLowerCase();



if(name.includes(value)){


product.style.display="block";


}else{


product.style.display="none";


}


});


});






sort.addEventListener("change",()=>{


let container =
document.querySelector(".products-container");



let items =
Array.from(products);



if(sort.value==="low"){


items.sort(
(a,b)=>
a.dataset.price-b.dataset.price
);


}


if(sort.value==="high"){


items.sort(
(a,b)=>
b.dataset.price-a.dataset.price
);


}



items.forEach(item=>
container.appendChild(item)
);



});






let cart=0;



function addCart(name,price){


cart++;


document.getElementById("cartCount")
.innerHTML=cart;



let icon=
document.querySelector(".cart");



icon.style.transform="scale(1.3)";



setTimeout(()=>{

icon.style.transform="scale(1)";

},300);



console.log(
`${name} agregado S/${price}`
);


}
